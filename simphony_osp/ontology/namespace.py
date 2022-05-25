"""An ontology namespace."""

import itertools
import logging
from itertools import chain
from typing import TYPE_CHECKING, Any, Iterable, Iterator, Optional, Set, Union

from rdflib import URIRef
from rdflib.term import Identifier

from simphony_osp.ontology.entity import OntologyEntity

if TYPE_CHECKING:
    from simphony_osp.session.session import Session


logger = logging.getLogger(__name__)


class OntologyNamespace:
    """An ontology namespace."""

    # Public API
    # ↓ ------ ↓

    def __init__(
        self,
        iri: Union[str, URIRef],
        ontology: Optional["Session"] = None,
        name: Optional[str] = None,
    ):
        """Initialize a namespace object.

        Args:
            iri: The IRI of the namespace.
            ontology: The ontology to which the namespace is connected.
            name: The name of the namespace
        """
        from simphony_osp.session.session import Session

        ontology = ontology or Session.get_default_session()
        self._iri = URIRef(iri)
        self._ontology = ontology
        ontology.bind(name, iri)

    @property
    def name(self) -> Optional[str]:
        """The name of the namespace."""
        return self.ontology.get_namespace_bind(self)

    @property
    def iri(self) -> URIRef:
        """The IRI of the namespace."""
        return self._iri

    @property
    def ontology(self) -> "Session":
        """Returns the session that the namespace is bound to."""
        return self._ontology

    def __eq__(self, other: "OntologyNamespace") -> bool:
        """Check whether the two namespace objects are equal.

        Args:
            other: The namespace object to compare with.

        Returns:
            bool: Whether the given namespace object is equal.
        """
        return (
            isinstance(other, OntologyNamespace)
            and self.ontology is other.ontology
            and self.iri == other.iri
        )

    def __hash__(self) -> int:
        """Hash the namespace.

        The namespace is defined by its IRI and its underlying data
        structure (the ontology), which are immutable attributes.
        """
        return hash((self.ontology, self.iri))

    def __getattr__(self, name: str) -> OntologyEntity:
        """Get an entity from the ontology associated to the namespace.

        Args:
            name: The label or namespace suffix of the ontology entity.

        Raises:
            AttributeError: Unknown label or suffix.
            AttributeError: Multiple entities for the given label or suffix.

        Returns:
            An ontology entity with matching label or suffix.
        """
        try:
            return self.get(name)
        except KeyError as e:
            raise AttributeError(str(e)) from e

    def __getitem__(self, label: str) -> OntologyEntity:
        """Get an entity from the ontology associated to the namespace.

        Useful for entities whose labels or suffixes contain characters which
        are not compatible with the Python syntax.

        Args:
            label: The label of the ontology entity.

        Raises:
            KeyError: Unknown label or suffix.
            KeyError: Multiple entities for the given label or suffix.

        Returns:
            An ontology entity with matching label or suffix.
        """
        if not isinstance(label, str):
            exception = TypeError(
                f"{str(type(self)).capitalize()} indices must be"
                f"of type {str}."
            )
            raise exception

        return self.get(label)

    def __dir__(self) -> Iterable[str]:
        """Attributes available for the OntologyNamespace class.

        Returns:
            The available attributes, which include the methods and
            the ontology entities in the namespace, both by label and suffix.
        """
        entity_autocompletion = chain(
            self._iter_labels(), self._iter_suffixes()
        )
        entity_autocompletion = filter(
            lambda x: x.isidentifier(), entity_autocompletion
        )
        return chain(super().__dir__(), entity_autocompletion)

    def _ipython_key_completions_(self):
        """Items available for the OntologyNamespace class.

        Returns:
            The available ontology entities in the namespace, both by label
            and suffix.
        """
        entity_autocompletion = chain(
            self._iter_labels(), self._iter_suffixes()
        )
        super_completion = getattr(super(), "_ipython_key_completions_", set())
        return itertools.chain(entity_autocompletion, super_completion)

    def __iter__(self) -> Iterator[OntologyEntity]:
        """Iterate over the ontology entities in the namespace."""
        return (entity for entity in iter(self.ontology) if entity in self)

    def __contains__(self, item: Union[OntologyEntity, Identifier]) -> bool:
        """Check whether the given entity is part of the namespace.

        Args:
            item: An ontology entity or identifier.

        Returns:
            Whether the given entity name or IRI is part of the namespace.
            Blank nodes are never part of a namespace.
        """
        if isinstance(item, Identifier) and not isinstance(item, URIRef):
            return False
        elif isinstance(item, URIRef):
            return item.startswith(self.iri)
        elif isinstance(item, OntologyEntity):
            return (
                item.identifier in self
                if item.session is self.ontology
                else False
            )
        else:
            raise TypeError(
                f"in {type(self)} requires, "
                f"{Identifier} or {OntologyEntity} as left "
                f"operand, not {type(item)}."
            )

    def __len__(self) -> int:
        """Return the number of entities in the namespace."""
        return sum(1 for _ in self)

    def get(self, name: str, default: Optional[Any] = None) -> OntologyEntity:
        """Get ontology entities from the registry by suffix or label.

        Args:
            name: The label or suffix of the ontology entity.
            default: The value to return if no entity is found.

        Raises:
            KeyError: Unknown label or suffix.
            KeyError: Multiple entities for the given label or suffix.

        Returns:
            The ontology entity with given label or suffix, or the default
            value.
        """
        from_label = self._from_label_set(name, case_sensitive=True)

        try:
            from_suffix = self.from_suffix(name)
        except (KeyError, ValueError):
            from_suffix = None

        entities = from_label | ({from_suffix} if from_suffix else set())
        num_entities = len(entities)
        if num_entities == 0:
            if default is None:
                raise KeyError(
                    f"No entity with label or suffix {name} was found in "
                    f"namespace {self}."
                )
            else:
                entities = {default}
        elif num_entities >= 2:
            error = (
                f"There are multiple entities with label or suffix {name} "
                f"in namespace {self}: {', '.join(r.iri for r in entities)}. "
                f"Please refer to a specific element of the "
                f"list by calling the method `from_iri(iri)` from "
                f"namespace {self}."
            )
            raise KeyError(error)
        return entities.pop()

    def from_suffix(self, suffix: str) -> OntologyEntity:
        """Get an ontology entity from its namespace suffix.

        Args:
            suffix: Suffix of the ontology entity.

        Raises:
            KeyError: When no entity with such suffix exists in the namespace.
            ValueError: When an invalid suffix is received (e.g. it contains a
                space).
        """
        return self.from_iri(str(self._iri) + suffix)

    def from_iri(self, iri: Union[str, URIRef]) -> OntologyEntity:
        """Get an ontology entity directly from its IRI.

        For consistency, this method only returns entities from this namespace.

        Args:
            iri: The iri of the ontology entity.

        Returns:
            The ontology entity.

        Raises:
            KeyError: When the IRI does not belong to the namespace.
            ValueError: When an invalid IRI is received.
        """
        if " " in iri:
            raise ValueError(f"Invalid IRI: {iri}.")
        # TODO: check that it is a valid URI instead of just checking if it
        #  has spaces. The check is needed to avoid RDFLib complaining that
        #  trying to serialize an IRI with spaces will break.

        iri = URIRef(str(iri))
        if iri in self:
            return self.ontology.from_identifier(iri)
        else:
            raise KeyError(
                f"The IRI {iri} does not belong to the namespace" f"{self}."
            )

    def from_label(
        self,
        label: str,
        lang: Optional[str] = None,
        case_sensitive: bool = False,
    ) -> OntologyEntity:
        """Get an ontology entity from its label.

        Args:
            label: The label to match.
            lang: Optionally filter labels by a specific language.
            case_sensitive: Whether the match should be case-sensitive or
                not. The default setting is a case-insensitive lookup.

        Raises:
            KeyError: No label matches the given one.
            KeyError: More than one label matches the given one.
        """
        try:
            entities = set(
                entity
                for entity in self.ontology.from_label(
                    label, lang=lang, case_sensitive=case_sensitive
                )
                if entity in self
            )
        except KeyError:
            entities = set()
        if len(entities) == 0:
            error = "No element with label %s was found in namespace %s." % (
                label,
                self,
            )
            raise KeyError(error)
        elif len(entities) >= 2:
            element_suffixes = (r.iri[len(self.iri) :] for r in entities)
            error = (
                f"There are multiple elements "
                f"({', '.join(element_suffixes)}) with label"
                f" {label} for namespace {self}."
                f"\n"
                f"Please refer to a specific element of the "
                f"list by calling from_iri(IRI) for "
                f"namespace {self} for one of the following "
                f"IRIs: " + "{iris}."
            ).format(iris=", ".join(entity.iri for entity in entities))
            raise KeyError(error)
        return entities.pop()

    # ↑ ------ ↑
    # Public API

    def __str__(self) -> str:
        """Transform the namespace to a human-readable string.

        Returns:
            The resulting string.
        """
        return "%s (%s)" % (self.name, self.iri)

    def __repr__(self) -> str:
        """Transform the namespace to a string.

        Returns:
            The resulting string.
        """
        return "<%s: %s>" % (self.name, self.iri)

    def _from_label_set(
        self,
        label: str,
        lang: Optional[str] = None,
        case_sensitive: bool = False,
    ) -> Set[OntologyEntity]:
        """Get ontology entities from their labels.

        Args:
            label: The label to match.
            lang: Optionally filter labels by a specific language.
            case_sensitive: Whether the match should be case-sensitive or
                not. The default setting is a case-insensitive lookup.
        """
        try:
            entities = set(
                entity
                for entity in self.ontology.from_label(
                    label, lang=lang, case_sensitive=case_sensitive
                )
                if entity in self
            )
        except KeyError:
            entities = set()

        return entities

    def _iter_labels(self) -> Iterator[str]:
        """Iterate over the labels of the ontology entities in the namespace.

        Returns:
            An iterator of strings containing the labels.
        """
        return (
            label
            for iri in self._iter_identifiers()
            for label in self.ontology.iter_labels(iri, return_literal=False)
        )

    def _iter_suffixes(self) -> Iterator[str]:
        """Iterate over suffixes of the ontology entities in the namespace.

        Returns:
            An iterator of suffixes containing the suffixes.
        """
        return (str(iri)[len(str(self._iri)) :] for iri in self._iter_iris())

    def _iter_identifiers(self) -> Iterator[Identifier]:
        """Iterate over the identifiers of the ontology entities.

        For consistency, only returns ontology entities that belong to the
        namespace.

        Returns:
            An iterator of identifiers.
        """
        return (
            identifier
            for identifier in self.ontology.iter_identifiers()
            if identifier in self
        )

    def _iter_iris(self) -> Iterator[URIRef]:
        """Iterate over the IRIs of the ontology entities in the namespace.

        Returns:
            An iterator of IRIs.
        """
        return (x for x in self._iter_identifiers() if isinstance(x, URIRef))