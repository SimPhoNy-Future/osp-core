"""An ontology individual."""
from __future__ import annotations

import functools
import logging
from abc import ABC
from itertools import chain
from types import MappingProxyType
from typing import (
    TYPE_CHECKING,
    Any,
    Dict,
    FrozenSet,
    Iterable,
    Iterator,
    Mapping,
    MutableSet,
    Optional,
    Set,
    Tuple,
    Type,
    Union,
)

from rdflib import OWL, RDF, Literal, URIRef
from rdflib.term import Identifier, Node

from simphony_osp.ontology.annotation import OntologyAnnotation
from simphony_osp.ontology.attribute import OntologyAttribute
from simphony_osp.ontology.entity import OntologyEntity
from simphony_osp.ontology.oclass import OntologyClass
from simphony_osp.ontology.relationship import OntologyRelationship
from simphony_osp.ontology.utils import DataStructureSet
from simphony_osp.utils.datatypes import (
    ATTRIBUTE_VALUE_TYPES,
    UID,
    AnnotationValue,
    AttributeValue,
    OntologyPredicate,
    PredicateValue,
    RelationshipValue,
    Triple,
)

if TYPE_CHECKING:
    from simphony_osp.session.session import Session

logger = logging.getLogger(__name__)


class ResultEmptyError(Exception):
    """The result is unexpectedly empty."""


class MultipleResultsError(Exception):
    """Only a single result is expected, but there were multiple."""


class ExistingIndividualException(ValueError):
    """To be raised when a provided CUDS is already linked."""

    pass


class ObjectSet(DataStructureSet, ABC):
    """A set interface to an ontology individual's neighbors.

    This class looks like and acts like the standard `set`, but it
    is a template to implement classes that use either the attribute
    interface or the methods `relationships_connect`,
    `relationships_disconnect` and `relationships_iter` from
    the ontology individual.

    When an instance is read or when it is modified in-place,
    the interfaced methods are used to reflect the changes.

    This class does not hold any object-related information itself, thus
    it is safe to spawn multiple instances linked to the same property
    and ontology individual (when single-threading).
    """

    _predicate: Optional[OntologyPredicate]
    """Main predicate to which this object refers. It will be used
    whenever there is ambiguity on which predicate to use. Can be set to
    None, usually meaning all predicates (see the specific
    implementations of this class: `AttributeSet`,
    `RelationshipSet` and `AnnotationSet`)."""

    _individual: OntologyIndividual
    """The ontology individual to which this object is linked to.
    Whenever the set is modified, the modification will affect this ontology
    individual."""

    # Public API
    # ↓ ------ ↓

    @property
    def individual(self) -> OntologyIndividual:
        """Ontology individual that this set refers to."""
        return self._individual

    @property
    def predicate(self) -> Union[OntologyPredicate]:
        """Predicate that this set refers to."""
        return self._predicate

    def __repr__(self) -> str:
        """Return repr(self)."""
        return (
            set(self).__repr__()
            + " <"
            + (f"{self._predicate} " if self._predicate is not None else "")
            + f"of ontology individual {self._individual}>"
        )

    def one(
        self,
    ) -> Union[AnnotationValue, AttributeValue, RelationshipValue]:
        """Return one element.

        Return one element if the set contains one element, else raise
        an exception.

        Returns:
            The only element contained in the set.

        Raises:
            ResultEmptyError: No elements in the set.
            MultipleResultsError: More than one element in the set.
        """
        iter_self = iter(self)
        first_element = next(iter_self, StopIteration)
        if first_element is StopIteration:
            raise ResultEmptyError(
                f"No elements attached to "
                f"{self._individual} through "
                f"{self._predicate}."
            )
        second_element = next(iter_self, StopIteration)
        if second_element is not StopIteration:
            raise MultipleResultsError(
                f"More than one element attached "
                f"to {self._individual} through "
                f"{self._predicate}."
            )
        return first_element

    def any(
        self,
    ) -> Optional[Union[AnnotationValue, AttributeValue, RelationshipValue]]:
        """Return any element of the set.

        Returns:
            Any element from the set if the set is not empty, else None.
        """
        return next(iter(self), None)

    def all(self) -> "ObjectSet":
        """Return all elements from the set.

        Returns:
            All elements from the set, namely the set itself.
        """
        return self

    # ↑ ------ ↑
    # Public API

    @property
    def _predicates(
        self,
    ) -> Optional[
        Union[
            Set[OntologyAttribute],
            Set[OntologyRelationship],
            Set[OntologyAnnotation],
        ]
    ]:
        """All the predicates to which this instance refers to.

        Returns:
            Such predicates, or `None` if no main predicate is
            associated with this `ObjectSet`.
        """
        return (
            self._predicate.subclasses if self._predicate is not None else None
        )

    def __init__(
        self,
        predicate: Optional[OntologyPredicate],
        individual: OntologyIndividual,
    ):
        """Fix the linked predicate and CUDS object."""
        self._individual = individual
        self._predicate = predicate
        super().__init__()


class AttributeSet(ObjectSet):
    """A set interface to an ontology individual's attributes.

    This class looks like and acts like the standard `set`, but it
    is an interface to the `attributes_add`, attributes_set`,
    `attributes_delete`, `attributes_value_contains` and
    `attributes_value_generator` methods.

    When an instance is read, the methods `attributes_value_generator`
    and `attributes_value_contains` are used to fetch the data. When it
    is modified in-place, the methods `attributes_add`, `attributes_set`,
    and `attributes_delete` are used to reflect the changes.

    This class does not hold any attribute-related information itself, thus
    it is safe to spawn multiple instances linked to the same attribute
    and ontology individual (when single-threading).
    """

    # Public API
    # ↓ ------ ↓

    def __iter__(self) -> Iterator[AttributeValue]:
        """The values assigned to the referred predicates.

        Such predicates are the main attribute and its subclasses.

        Returns:
            The mentioned values.
        """
        yielded: Set[AttributeValue] = set()
        for value in chain(
            *(
                self._individual.attributes_value_generator(
                    attribute=attribute
                )
                for attribute in self._predicates
            )
        ):
            if value not in yielded:
                yielded.add(value)
                yield value

    def __contains__(self, item: AttributeValue) -> bool:
        """Check whether a value is assigned to the attribute."""
        return any(
            self._individual.attributes_value_contains(attribute, item)
            for attribute in self._predicates
        )

    def update(self, other: Iterable[AttributeValue]) -> None:
        """Update the set with the union of itself and others."""
        underlying_set = set(self)
        added = set(other).difference(underlying_set)
        self._individual.attributes_add(self._predicate, added)

    def intersection_update(self, other: Iterable[AttributeValue]) -> None:
        """Update the set with the intersection of itself and another."""
        underlying_set = set(self)
        intersection = underlying_set.intersection(other)
        removed = underlying_set.difference(intersection)
        for attribute in self._predicates:
            self._individual.attributes_delete(attribute, removed)

    def difference_update(self, other: Iterable[AttributeValue]) -> None:
        """Remove all elements of another set from this set."""
        removed = set(self) & set(other)
        for attribute in self._predicates:
            self._individual.attributes_delete(attribute, removed)

    def symmetric_difference_update(self, other: Set[AttributeValue]) -> None:
        """Update set with the symmetric difference of it and another."""
        underlying_set = set(self)
        symmetric_difference = underlying_set.symmetric_difference(other)
        added = symmetric_difference.difference(underlying_set)
        self._individual.attributes_add(self._predicate, added)
        removed = underlying_set.difference(symmetric_difference)
        for attribute in self._predicates:
            self._individual.attributes_delete(attribute, removed)

    # ↑ ------ ↑
    # Public API

    _predicate: OntologyAttribute

    @property
    def _predicates(self) -> Set[OntologyAttribute]:
        """All the attributes to which this instance refers to.

        Returns:
            Such predicates are the subproperties of the main predicate, or
            if it is none, all the subproperties.
        """
        predicates = super()._predicates
        if predicates is None:
            predicates = set(self._individual.attributes_generator())
            # The code below is technically true, but makes no
            #  difference due to how `attributes_generator` is written.
            # predicates = set(chain(
            #    subclasses
            #    for attributes in
            #    self._individual.attributes_generator(_notify_read=True)
            #    for subclasses in attributes.subclasses
            # ))
        return predicates

    def __init__(
        self,
        attribute: Optional[OntologyAttribute],
        individual: OntologyIndividual,
    ):
        """Fix the liked OntologyAttribute and ontology individual."""
        super().__init__(attribute, individual)


class RelationshipSet(ObjectSet):
    """A set interface to an ontology individual's relationships.

    This class looks like and acts like the standard `set`, but it
    is an interface to the `relationships_connect`, `relationships_disconnect`
    and `relationships_iter` methods.

    When an instance is read, the method `relationships_iter` is used to fetch
    the data. When it is modified in-place, the methods
    `relationships_connect` and `relationships_disconnect` are used to
    reflect the changes.

    This class does not hold any relationship-related information itself,
    thus it is safe to spawn multiple instances linked to the same
    relationship and ontology individual (when single-threading).
    """

    @staticmethod
    def prevent_class_filtering(func):
        """Decorator breaking methods when class filtering is enabled."""

        @functools.wraps(func)
        def wrapper(self, *args, **kwargs):
            if self._class_filter is not None:
                raise RuntimeError(
                    "Cannot edit a set with a class " "filter in-place."
                )
            return func(self, *args, **kwargs)

        return wrapper

    # Bind static method to use as decorator.
    prevent_class_filtering = prevent_class_filtering.__get__(object, None)

    # Public API
    # ↓ ------ ↓

    def __iter__(self) -> Iterator[OntologyIndividual]:
        """Iterate over individuals assigned to `self._predicates`.

        Note: no class filter.

        Returns:
            The mentioned underlying set.
        """
        if self._uid_filter:
            last_identifier = None
            for i, r, t in self.iter_low_level():
                if i == last_identifier:
                    continue
                elif (r, t) == (None, None):
                    yield None
                else:
                    item = self._individual.session.from_identifier_typed(
                        i, typing=OntologyIndividual
                    )
                    if not self._class_filter or item.is_a(self._class_filter):
                        yield item
                    else:
                        yield None
                last_identifier = i
        else:
            yielded: Set[Node] = set()
            for i, r, t in self.iter_low_level():
                item = self._individual.session.from_identifier(i)
                if i in yielded or (
                    self._class_filter and not item.is_a(self._class_filter)
                ):
                    continue
                yielded.add(i)
                yield item

    def __contains__(self, item: OntologyIndividual) -> bool:
        """Check if an individual is connected via the relationship."""
        if item not in self.individual.session:
            return False

        original_uid_filter = self._uid_filter
        try:
            self._uid_filter = (item.uid,)
            return next(iter(self)) is not None
        finally:
            self._uid_filter = original_uid_filter

    def __invert__(self) -> RelationshipSet:
        """Get the inverse RelationshipSet."""
        return self.inverse

    @property
    def inverse(self) -> RelationshipSet:
        """Get the inverse RelationshipSet.

        Returns a RelationshipSet that works in the inverse direction: the
        ontology individuals displayed are the ones which are the subject of
        the relationship.
        """
        return RelationshipSet(
            relationship=self._predicate,
            individual=self.individual,
            oclass=self._class_filter,
            inverse=not self._inverse,
        )

    @prevent_class_filtering
    def update(self, other: Iterable[OntologyIndividual]) -> None:
        """Update the set with the union of itself and other."""
        # The individuals to update might be already attached. Given an
        #  individual from `other`, several situations may arise:
        #
        #    1 - The relationship through which it is already attached is
        #        the same as the main predicate `self._predicate`. It is
        #        safe to attach it again, the same connection cannot be
        #        duplicated in the RDF standard.
        #
        #    2 - The relationship through which it is already attached is a
        #        sub-relationship of the main predicate. In such case,
        #        we keep the existing connection and do not add a new
        #        connection. The principle is: the more specific the
        #        knowledge is, the better.
        #
        #    3 - The relationship through which it is already attached is a
        #        super-relationship of the main predicate. Then it can make
        #        sense to remove the original connection and replace it
        #        with a new, more specific connection using the main
        #        predicate.
        #
        added = filter(lambda x: x not in self, other)  # Takes care of 2.
        # TODO: We do not take care of 3, because `.add` also does not
        #  take care of 3. This topic can be an object of discussion.
        for individual in added:
            self._individual.relationships_connect(
                individual, rel=self._predicate
            )

    @prevent_class_filtering
    def intersection_update(self, other: Iterable[OntologyIndividual]) -> None:
        """Update the set with the intersection of itself and another."""
        # Note: please read the comment on the `update` method.
        underlying_set = set(self)
        result = underlying_set.intersection(other)

        removed = underlying_set.difference(result)
        if removed:
            for rel in self._predicates:
                self._individual.relationships_disconnect(*removed, rel=rel)

        added = result.difference(underlying_set)
        self._individual.relationships_connect(*added, rel=self._predicate)

    @prevent_class_filtering
    def difference_update(self, other: Iterable[OntologyIndividual]) -> None:
        """Remove all elements of another set from this set."""
        # Note: please read the comment on the `update` method.
        removed = set(self) & set(other)
        if removed:
            for rel in self._predicates:
                self._individual.relationships_disconnect(*removed, rel=rel)

    @prevent_class_filtering
    def symmetric_difference_update(
        self, other: Iterable[OntologyIndividual]
    ) -> None:
        """Update with the symmetric difference of it and another."""
        # Note: please read the comment on the `update` method.
        underlying_set = set(self)
        result = underlying_set.symmetric_difference(other)

        removed = underlying_set.difference(result)
        if removed:
            for rel in self._predicates:
                self._individual.relationships_disconnect(*removed, rel=rel)

        added = result.difference(underlying_set)
        self._individual.relationships_connect(*added, rel=self._predicate)

    # ↑ ------ ↑
    # Public API

    _predicate: Optional[OntologyRelationship]
    _class_filter: Optional[OntologyClass]
    _uid_filter: Optional[Tuple[UID]]
    _inverse: bool = False

    def __init__(
        self,
        relationship: Optional[OntologyRelationship],
        individual: OntologyIndividual,
        oclass: Optional[OntologyClass] = None,
        inverse: bool = False,
        uids: Optional[Iterable[UID]] = None,
    ):
        """Fix the liked OntologyRelationship and ontology individual."""
        if relationship is not None and not isinstance(
            relationship, OntologyRelationship
        ):
            raise TypeError(
                "Found object of type %s. "
                "Should be an OntologyRelationship." % type(relationship)
            )
        if oclass is not None and not isinstance(oclass, OntologyClass):
            raise TypeError(
                "Found object of type %s. Should be "
                "an OntologyClass." % type(oclass)
            )
        uids = tuple(uids) if uids is not None else None
        if uids is not None:
            for uid in uids:
                if not isinstance(uid, UID):
                    raise TypeError(
                        "Found object of type %s. Should be an UID."
                        % type(uid)
                    )

        self._class_filter = oclass
        self._inverse = inverse
        self._uid_filter = uids
        super().__init__(relationship, individual)

    def iter_low_level(
        self,
    ) -> Iterator[Tuple[Node, Optional[Node], Optional[bool]]]:
        """Iterate over individuals assigned to `self._predicates`.

        Note: no class filter.

        Returns:
            The mentioned underlying set.
        """
        # Get the predicate IRIs (p) to be considered.
        # Let x be `self._individual`.
        #  - direct_allowed: Triples of the form (x, p, o) will result in o
        #    being a candidate to be yielded.
        #  - inverse_allowed: Triples of the form (s, p, x) will result in s
        #    being a candidate to be yielded.
        direct_allowed = set(p.identifier for p in self._predicates)
        inverse_allowed = set(
            rel.identifier
            for rel in filter(None, (p.inverse for p in self._predicates))
        )
        if self._inverse:
            direct_allowed, inverse_allowed = inverse_allowed, direct_allowed

        # Get the individuals connected to `self._individual` through the
        # allowed predicates, that is, o and s from the last comment.
        individual = self._individual.identifier
        graph = self._individual.session.graph
        if self._uid_filter is None:
            predicate_individual_direct = (
                (o, p)
                for p, o in graph.predicate_objects(individual)
                if p in direct_allowed
            )
            predicate_individual_inverse = (
                (s, p)
                for s, p in graph.subject_predicates(individual)
                if p in inverse_allowed
            )
            individuals_and_relationships = chain(
                ((o, p, True) for o, p in predicate_individual_direct),
                ((s, p, False) for s, p in predicate_individual_inverse),
            )
        else:
            # In this case, we respect the ordering of the `_uid_filter` and
            # yield `(uid.to_identifier(), None, None)` when there is not an
            # allowed connection between `self._individual` the individual
            # represented by `uid`.
            def individuals_and_relationships():
                for uid in self._uid_filter:
                    identifier = uid.to_identifier()
                    found = chain(
                        (
                            (p, True)
                            for p in graph.predicates(individual, identifier)
                            if p in direct_allowed
                        ),
                        (
                            (p, False)
                            for p in graph.predicates(identifier, individual)
                            if p in inverse_allowed
                        ),
                    )
                    first = next(found, (None, None))
                    yield tuple((identifier, *first))
                    if first != (None, None):
                        yield from ((identifier, *f) for f in found)

            individuals_and_relationships = individuals_and_relationships()

        yield from individuals_and_relationships


class AnnotationSet(ObjectSet):
    """A set interface to an ontology individual's annotations.

    This class looks like and acts like the standard `set`, but it is an
    interface to the methods from `OntologyIndividual` that manage the
    annotations.

    This class does not hold any annotation-related information itself,
    thus it is safe to spawn multiple instances linked to the same
    relationship and ontology individual (when single-threading).
    """

    _predicate: OntologyAnnotation

    def __init__(
        self,
        annotation: Optional[OntologyAnnotation],
        individual: OntologyIndividual,
    ) -> None:
        """Fix the linked OntologyAnnotation and ontology individual."""
        super().__init__(annotation, individual)

    # Public API
    # ↓ ------ ↓

    def __iter__(self) -> Iterator[AnnotationValue]:
        """Iterate over annotations linked to the individual."""
        yield from self._individual.annotations_value_generator(
            annotation=self._predicate
        )

    def __contains__(self, item) -> bool:
        """Determine whether the individual is annotated with an item."""
        return super().__contains__(item)

    def update(self, other: Iterable[AnnotationValue]) -> None:
        """Update the set with the union of itself and other."""
        self._individual.annotations_add(
            annotation=self._predicate, values=other
        )

    def intersection_update(self, other: Iterable[AnnotationValue]) -> None:
        """Update the set with the intersection of itself and another."""
        self._individual.annotations_set(
            annotation=self._predicate, values=other
        )

    def difference_update(self, other: Iterable[Any]) -> None:
        """Return self-=other."""
        self._individual.annotations_delete(
            annotation=self._predicate, values=set(self) & set(other)
        )

    def symmetric_difference_update(
        self, other: Iterable[AnnotationValue]
    ) -> None:
        """Return self^=other."""
        self._individual.annotations_set(
            self._predicate, set(self) ^ set(other)
        )

    # ↑ ------ ↑
    # Public API


class OntologyIndividual(OntologyEntity):
    """An ontology individual."""

    rdf_identifier = Identifier

    def __init__(
        self,
        uid: Optional[UID] = None,
        session: Optional["Session"] = None,
        triples: Optional[Iterable[Triple]] = None,
        merge: bool = False,
        class_: Optional[OntologyClass] = None,
        attributes: Optional[
            Mapping["OntologyAttribute", Iterable[AttributeValue]]
        ] = None,
    ) -> None:
        """Initialize the ontology individual."""
        if uid is None:
            uid = UID()
        elif not isinstance(uid, UID):
            raise Exception(
                f"Tried to initialize an ontology individual with "
                f"uid {uid}, which is not a UID object."
            )
        self._ontology_classes = []
        triples = set(triples) if triples is not None else set()
        # Attribute triples.
        attributes = attributes or dict()
        triples |= set(
            (
                uid.to_iri(),
                k.iri,
                Literal(k.convert_to_datatype(e), datatype=k.datatype),
            )
            for k, v in attributes.items()
            for e in v
        )
        # Class triples.
        if class_:
            triples |= {(uid.to_iri(), RDF.type, class_.iri)}
            self._ontology_classes += [class_]
        # extra_class = False
        # Extra triples
        # for s, p, o in triples:
        # if p == RDF.type:
        #     extra_class = True
        # triples.add((s, p, o))
        # TODO: grab extra class from tbox, add it to _ontology_classes.

        # Determine whether class was assigned (currently unused).
        # class_assigned = bool(class_) or extra_class
        # if not class_assigned:
        # raise TypeError(f"No ontology class associated with {self}! "
        #                 f"Did you install the required ontology?")
        # logger.warning(f"No ontology class associated with {self}! "
        #               f"Did you install the required ontology?")
        # pass

        # When the construction is complete, the session is switched.
        super().__init__(uid, session, triples or None, merge=merge)
        logger.debug("Instantiated ontology individual %s" % self)

    # Public API
    # ↓ ------ ↓

    @property
    def classes(self) -> FrozenSet[OntologyClass]:
        """Get the ontology classes of this ontology individual.

        Returns:
            A set with all the ontology classes of the ontology
            individual. When the individual has no classes, the set is empty.
        """
        return frozenset(
            self.session.ontology.from_identifier_typed(
                o, typing=OntologyClass
            )
            for o in self.session.graph.objects(self.identifier, RDF.type)
        )

    @classes.setter
    def classes(self, value: Iterable[OntologyClass]) -> None:
        """Set the ontology classes of this ontology individual.

        Args:
            value: New ontology classes of the ontology individual.
        """
        identifiers = set()
        for x in value:
            if not isinstance(x, OntologyClass):
                raise TypeError(f"Expected {OntologyClass}, not {type(x)}.")
            identifiers.add(x.identifier)
        self.session.graph.remove((self.identifier, RDF.type, None))
        for x in identifiers:
            self.session.graph.add((self.identifier, RDF.type, x))

    def is_a(self, ontology_class: OntologyClass) -> bool:
        """Check if the individual is an instance of the given ontology class.

        Args:
            ontology_class: The ontology class to test against.

        Returns:
            Whether the ontology individual is an instance of such ontology
                class.
        """
        return any(oc in ontology_class.subclasses for oc in self.classes)

    def __dir__(self) -> Iterable[str]:
        """Show the individual's attributes as autocompletion suggestions.

        This method takes care of the autocompletion for the dot notation.
        """
        attribute_autocompletion = filter(
            lambda x: x.isidentifier(), self._attribute_autocompletion()
        )
        return chain(super().__dir__(), attribute_autocompletion)

    def _ipython_key_completions_(self):
        """Show the individual's predicates as tab completion suggestions.

        The predicates include its attributes, relationships and annotations.

        This method is specific for the bracket notation ([], __getitem__).
        """
        return chain(
            super().__dir__(),
            self._attribute_autocompletion(),
            self._relationship_autocompletion(),
            self._annotation_autocompletion(),
        )

    def __getattr__(self, name: str) -> AttributeSet:
        """Retrieve the value of an attribute of the individual.

        Args:
            name: The label or suffix of the attribute.

        Raises:
            AttributeError: Unknown attribute label or suffix.
            AttributeError: Multiple attributes for the given label or suffix.

        Returns:
            The value of the attribute (a python object).
        """
        attributes = self._attributes_get_by_name(name)
        num_attributes = len(attributes)
        if num_attributes == 0:
            raise AttributeError(
                f"No attribute associated with {self} with label or prefix "
                f"{name} found."
            )
        elif num_attributes >= 2:
            error = (
                f"There are multiple attributes with label or suffix {name} "
                f"associated with {self}:"
                f" {', '.join(r.iri for r in attributes)}. "
                f"Please use an OntologyAttribute object together with the "
                f"indexing notation `individual[attribute]` to access the "
                f"values of this attribute."
            )
            raise AttributeError(error)
        attr = attributes.pop()

        values = self.attributes_value_generator(attr)
        value = next(values, None)
        if next(values, None) is not None:
            raise RuntimeError(
                f"Tried to fetch values of a "
                f"non-functional attribute {attr} using "
                f"the dot notation. This is not "
                f"supported. "
                f"\n \n"
                f"Please use subscript "
                f"notation instead for such attributes: "
                f"my_cuds[{attr}]. This will return a set "
                f"of values instead of a single one"
            )
        return value

    def __setattr__(
        self,
        name: str,
        value: Optional[Union[AttributeValue, Set[AttributeValue]]],
    ) -> None:
        """Set the value(s) of an attribute.

        Args:
            name: The label or suffix of the attribute.
            value: The new value.

        Raises:
            AttributeError: Unknown attribute label or suffix.
            AttributeError: Multiple attributes for the given label or suffix.
        """
        if name.startswith("_"):
            super().__setattr__(name, value)
            return

        try:
            attributes = self._attributes_get_by_name(name)
            num_attributes = len(attributes)
            if num_attributes == 0:
                raise AttributeError(
                    f"No attribute, associated with {self} with label or"
                    f"prefix {name} found."
                )
            elif num_attributes >= 2:
                error = (
                    f"There are multiple attributes with label or suffix "
                    f"{name} associated with {self}:"
                    f" {', '.join(r.iri for r in attributes)}. "
                    f"Please use an OntologyAttribute object together with the"
                    f" indexing notation `individual[attribute]` to access "
                    f"the values of this attribute."
                )
                raise AttributeError(error)
            attr = attributes.pop()
            value = {value} if value is not None else set()
            self.attributes_set(attr, value)
        except AttributeError as e:
            # Might still be an attribute of a subclass of OntologyIndividual.
            if hasattr(self, name):
                super().__setattr__(name, value)
            else:
                raise e

    def __getitem__(
        self, rel: Union[OntologyPredicate, str]
    ) -> Union[AttributeSet, RelationshipSet, AnnotationSet]:
        """Retrieve linked individuals, attribute values or annotation values.

        The subscripting syntax `individual[rel]` allows:
        - When `rel` is an OntologyAttribute, to obtain a set containing all
          the values assigned to the specified attribute. Such set can be
          modified in-place to change the assigned values.
        - When `rel` is an OntologyRelationship, to obtain a set containing
          all ontology individuals objects that are connected to `individual`
          through rel. Such set can be modified in-place to modify the
          existing connections.
        - When `rel` is an OntologyAnnotation, to obtain a set containing
          all the annotation values assigned to the specified annotation
          property. Such set can be modified in-place to modify the existing
          connections.
        - When `rel` is a string, the string is resolved to an
          OntologyAttribute, OntologyRelationship or OntologyAnnotation with a
          matching label, and then one of the cases above applies.

        The reason why a set is returned and not a list, or any other
        container allowing repeated elements, is that the underlying RDF
        graph does not accept duplicate statements.

        Args:
            rel: An ontology attribute, an ontology relationship or an ontology
                annotation (OWL datatype property, OWL object property,
                OWL annotation property). Alternatively a string, which will be
                resolved, using labels, to one of the classes described above.

        Raises:
            KeyError: Unknown attribute, relationship or annotation label or
                suffix.
            KeyError: Multiple attributes, relationships or annotations found
                for the given label or suffix.
            TypeError: Trying to use something that is neither an
                OntologyAttribute, an OntologyRelationship, an
                OntologyAnnotation or a string as index.
        """
        if isinstance(rel, str):
            """Resolve string to an attribute, relationship or annotation."""
            entities = set()

            # Try to find a matching attribute.
            try:
                entities |= self._attributes_get_by_name(rel)
            except AttributeError:
                pass

            # Try to find a matching relationship.
            entities |= set(
                relationship
                for _, relationship in self.relationships_iter(return_rel=True)
                for label in relationship.iter_labels(return_literal=False)
                if rel == label or relationship.iri.endswith(rel)
            )

            # Try to find a matching annotation.
            entities |= set(
                annotation
                for _, annotation in self.annotations_iter(return_rel=True)
                for label in annotation.iter_labels(
                    return_literal=False, return_prop=False
                )
                if rel == label or annotation.iri.endswith(rel)
            )

            num_entities = len(entities)
            if num_entities == 0:
                raise KeyError(
                    f"No attribute, relationship or annotation "
                    f"associated with {self} with label or suffix {rel} found."
                )
            elif num_entities >= 2:
                raise KeyError(
                    f"There are multiple attributes, relationships or "
                    f"annotations with label or suffix {rel} associated with "
                    f"{self}:"
                    f"{', '.join(r.iri for r in entities)}. "
                    f"Please use an OntologyAttribute, OntologyRelationship "
                    f"or OntologyAnnotation object together with the "
                    f"indexing notation `individual[entity]` to access the "
                    f"values of this attribute, relationship or annotation."
                )
            rel = entities.pop()

        if isinstance(rel, OntologyAttribute):
            set_class = AttributeSet
        elif isinstance(rel, OntologyRelationship):
            set_class = RelationshipSet
        elif isinstance(rel, OntologyAnnotation):
            set_class = AnnotationSet
        else:
            raise TypeError(
                f"Ontology individual indices must be ontology "
                f"relationships, ontology attributes, "
                f"or ontology annotations, not {type(rel)}."
            )
        return set_class(rel, self)

    def __setitem__(
        self,
        rel: Union[OntologyPredicate, str],
        values: Optional[Union[PredicateValue, Set[PredicateValue]]],
    ) -> None:
        """Manages object, data and annotation properties.

        The subscripting syntax `individual[rel] = ` allows,

        - When `rel` is an OntologyRelationship, to replace the list of
          ontology individuals that are connected to `individual` through rel.
        - When `rel` is an OntologyAttribute, to replace the values of
          such attribute.
        - When `rel` is an OntologyAnnotation, to replace the annotation
          values of such annotation property.
        - When `rel` is a string, the string is resolved to an
          OntologyAttribute, OntologyRelationship or OntologyAnnotation with a
          matching label, and then one of the cases above applies.

        This function only accepts hashable objects as input, as the
        underlying RDF graph does not accept duplicate statements.

        Args:
            rel: Either an ontology attribute, an ontology relationship or
                an ontology annotation (OWL datatype property, OWL object
                property, OWL annotation property). Alternatively a string,
                which will be resolved, using labels, to one of the classes
                described above.
            values: Either a single element compatible with the OWL standard
                (this includes ontology individuals) or a set of such
                elements.

        Raises:
            KeyError: Unknown attribute, relationship or annotation label or
                suffix.
            KeyError: Multiple attributes, relationships or annotations found
                for the given label or suffix.
            TypeError: Trying to assign attributes using an object property,
                trying to assign ontology individuals using a data property,
                trying to use something that is neither an OntologyAttribute,
                an OntologyRelationship, an OntologyAnnotation nor a string as
                index.
        """
        if (
            isinstance(values, ObjectSet)
            and values.individual is self
            and values.predicate is rel
        ):
            # Do not do anything when the set assigned is a set referring to
            #  self and referring to the same predicate that was specified.
            #  Avoids duplication of work that would happen because
            #  `x[c] += y <-> x[c] == x[c].__iadd__(y)`. An alternative is
            #  getting rid of `__iadd__` so that
            #  `x[c] += y <-> x[c] = x[c] + y`. But this implies
            #  incompatibilities with `collections.ABC` (they already define
            #  `__isub__` for MutableSet for example).
            return

        values = values or set()
        values = (
            {values} if not isinstance(values, (Set, MutableSet)) else values
        )
        # Apparently instances of MutableSet are not instances of Set.

        # Classify the values by type.
        values = self._classify_by_type(values)

        if isinstance(rel, str):
            """Resolve string to an attribute, relationship or annotation."""
            entities = set()

            # Try to find a matching attribute.
            try:
                entities |= self._attributes_get_by_name(rel)
            except AttributeError:
                pass

            # Try to find a matching relationship.
            entities |= set(
                relationship
                for _, relationship in self.relationships_iter(return_rel=True)
                for label in relationship.iter_labels(return_literal=False)
                if rel == label or relationship.iri.endswith(rel)
            )

            # Try to find a matching annotation.
            entities |= set(
                annotation
                for _, annotation in self.annotations_iter(return_rel=True)
                for label in annotation.iter_labels(
                    return_literal=False, return_prop=False
                )
                if rel == label or annotation.iri.endswith(rel)
            )

            num_entities = len(entities)
            if num_entities == 0:
                raise KeyError(
                    f"No attribute, relationship or annotation "
                    f"associated with {self} with label or suffix {rel} found."
                )
            elif num_entities >= 2:
                raise KeyError(
                    f"There are multiple attributes, relationships or "
                    f"annotations with label or suffix {rel} associated with "
                    f"{self}:"
                    f"{', '.join(r.iri for r in entities)}. "
                    f"Please use an OntologyAttribute, OntologyRelationship "
                    f"or OntologyAnnotation object together with the "
                    f"indexing notation `individual[entity]` to access the "
                    f"values of this attribute, relationship or annotation."
                )
            rel = entities.pop()

        # Perform assignments.
        if isinstance(rel, OntologyRelationship):
            if (len(values) > 0 and OntologyIndividual not in values) or len(
                values
            ) > 1:
                raise TypeError(
                    f"Trying to assign python objects which are "
                    f"not ontology individuals using an object "
                    f"property {rel}."
                )
            assigned = set(values.get(OntologyIndividual, set()))
            current = RelationshipSet(rel, self, oclass=None)

            add = assigned - current
            remove = current - assigned

            current -= remove
            current |= add
        elif isinstance(rel, OntologyAttribute):
            if (
                len(values) > 0
                and all(
                    x not in values for x in (ATTRIBUTE_VALUE_TYPES, Literal)
                )
            ) or len(values) > 2:
                raise TypeError(
                    f"Trying to assign python objects which "
                    f"cannot be interpreted as literals "
                    f"using a data property {rel}."
                )
            assigned = set(values.get(ATTRIBUTE_VALUE_TYPES, set())) | set(
                values.get(Literal, set())
            )
            current = AttributeSet(rel, self)

            add = assigned - current
            remove = current - assigned

            current |= add
            current -= remove
        elif isinstance(rel, OntologyAnnotation):
            # TODO: Use a unit of work pattern here like above to only
            #  remove and add, rather than replacing.
            self.annotations_set(rel, values)
        else:
            raise TypeError(
                f"Ontology individual indices must be ontology "
                f"relationships, ontology attributes or ontology "
                f"annotations not {type(rel)}."
            )

    def __delitem__(self, rel: OntologyPredicate):
        """Delete all objects attached through rel.

        Args:
            rel: Either an ontology attribute, an ontology relationship or
                an ontology annotation (OWL datatype property, OWL object
                property, OWL annotation property). Alternatively a string,
                which will be resolved, using labels, to one of the classes
                described above.
        """
        self.__setitem__(rel=rel, values=set())

    def connect(
        self,
        *individuals: Union[OntologyIndividual, Identifier, str],
        rel: Union[OntologyRelationship, Identifier],
    ) -> None:
        """Connect ontology individuals to other ontology individuals.

        Args:
            individuals: The objects to be added. Their identifiers may also
                be used.
            rel: The relationship between the objects.

        Raises:
            TypeError: Objects that are not ontology individuals,
                identifiers or strings provided as positional arguments.
            TypeError: Object that is not an ontology relationship or the
                identifier of an ontology relationship passed as keyword
                argument `rel`.
            RuntimeError: Ontology individuals that belong to a different
                session provided.
        """
        individuals = list(individuals)
        for i, x in enumerate(individuals):
            if isinstance(x, str):
                if not isinstance(x, Identifier):
                    x = URIRef(x)
                x = self.session.from_identifier_typed(
                    x, typing=OntologyIndividual
                )
                individuals[i] = x
            if not isinstance(x, OntologyIndividual):
                raise TypeError(
                    f"Expected {OntologyIndividual}, {Identifier} or {str} "
                    f"objects, not {type(x)}."
                )
            elif x not in self.session:
                raise RuntimeError(
                    "Cannot connect an ontology individual that belongs to "
                    "a different session, please add it to this session "
                    "first using `session.add`."
                )
        individuals = set(individuals)

        if isinstance(rel, Identifier):
            rel = self.session.ontology.from_identifier_typed(
                rel,
                typing=OntologyRelationship,
            )
        elif not isinstance(rel, OntologyRelationship):
            raise TypeError(
                "Found object of type %s passed to argument rel. "
                "Should be an OntologyRelationship." % type(rel)
            )

        self[rel] |= individuals

    def disconnect(
        self,
        *individuals: Union[OntologyIndividual, Identifier, str],
        rel: Union[OntologyRelationship, Identifier] = OWL.topObjectProperty,
        oclass: Optional[OntologyClass] = None,
    ) -> None:
        """Disconnect ontology individuals from this one.

        Args:
            individuals: Specify the individuals to disconnect. When no
                individuals are specified, all connected individuals are
                considered.
            rel: Only remove individuals which are connected by subclass of the
                given relationship. Defaults to OWL.topObjectProperty (any
                relationship).
            oclass: Only remove elements which are a subclass of the given
                ontology class. Defaults to None (no filter).

        Raises:
            TypeError: Objects that are not ontology individuals,
                identifiers or strings provided as positional arguments.
            TypeError: Object that is not an ontology relationship or the
                identifier of an ontology relationship passed as keyword
                argument `rel`.
            TypeError: Object that is not an ontology class passed as
                keyword argument `oclass`.
            RuntimeError: Ontology individuals that belong to a different
                session provided.
        """
        individuals = list(individuals)
        for i, x in enumerate(individuals):
            if isinstance(x, str):
                if not isinstance(x, Identifier):
                    x = URIRef(x)
                x = self.session.from_identifier_typed(
                    x, typing=OntologyIndividual
                )
                individuals[i] = x
            if not isinstance(x, OntologyIndividual):
                raise TypeError(
                    f"Expected {OntologyIndividual}, {Identifier} or {str} "
                    f"objects, not {type(x)}."
                )
            elif x not in self.session:
                raise RuntimeError(
                    "Cannot connect an ontology individual that belongs to "
                    "a different session, please add it to this session "
                    "first using `session.add`."
                )
        individuals = set(individuals)

        if isinstance(rel, Identifier):
            rel = self.session.ontology.from_identifier_typed(
                rel, typing=OntologyRelationship
            )
        elif not isinstance(rel, OntologyRelationship):
            raise TypeError(
                "Found object of type %s passed to argument rel. "
                "Should be an OntologyRelationship." % type(rel)
            )

        if oclass is not None and not isinstance(oclass, OntologyClass):
            raise TypeError(
                "Found object of type %s passed to argument "
                "oclass. Should be an OntologyClass." % type(oclass)
            )

        individuals = individuals or self[rel]

        if oclass:
            individuals = set(x for x in individuals if x.is_a(oclass))

        self[rel] -= individuals

    def get(
        self,
        *individuals: Union[OntologyIndividual, Identifier, str],
        rel: Union[OntologyRelationship, Identifier] = OWL.topObjectProperty,
        oclass: Optional[OntologyClass] = None,
        return_rel: bool = False,
    ) -> Union[
        RelationshipSet,
        Optional[OntologyIndividual],
        Tuple[Optional[OntologyIndividual], ...],
        Tuple[Tuple[OntologyIndividual, OntologyRelationship]],
    ]:
        """Return the connected individuals.

        The structure of the output can vary depending on the form used for
        the call. See the "Returns:" section of this
        docstring for more details on this.

        Args:
            individuals: Restrict the elements to be returned to a certain
                subset of the connected elements.
            rel: Only return individuals which are connected by a subclass
                of the given relationship. Defaults to
                OWL.topObjectProperty (any relationship).
            oclass: Only yield individuals which are a subclass of the given
                ontology class. Defaults to None (no filter).
            return_rel: Whether to return the connecting relationship.
                Defaults to False.

        Returns:
            Calls without `*individuals` (RelationshipSet): The result of the
                call is a set-like object. This corresponds to
                the calls `get()`, `get(rel=___)`, `get(oclass=___)`,
                `get(rel=___, oclass=___)`, with the parameter `return_rel`
                unset or set to False.
            Calls with `*individuals` (Optional[OntologyIndividual],
                    Tuple[Optional["OntologyIndividual"], ...]):
                The position of each element in the result is determined by
                the position of the corresponding identifier/individual in the
                given list of identifiers/individuals. In this case, the result
                can contain `None` values if a given identifier/individual is
                not connected to this individual, or if it does not satisfy
                the class filter. When only one individual or identifier is
                specified, a single object is returned instead of a Tuple.
                This description corresponds to the calls `get(*individuals)`,
                `get(*uids, rel=___)`, `get(*uids, rel=___, oclass=___)`,
                with the parameter `return_rel` unset or set to False.
            Calls with `return_rel=True` (Tuple[
                    Tuple[OntologyIndividual, OntologyRelationship]]):
                The dependence of the order of the elements is maintained
                for the calls with `*individuals`, a non-deterministic order is
                used for the calls without `*individuals`. No `None` values
                are contained in the result (such identifiers or individuals
                are simply skipped). Moreover, the elements returned are now
                pairs of individuals and the relationship connecting this
                individual to such ones. This description corresponds to any
                call of the form `get(..., return_rel=True)`.

        Raises:
            TypeError: Objects that are not ontology individuals,
                identifiers or strings provided as positional arguments.
            TypeError: Object that is not an ontology relationship or the
                identifier of an ontology relationship passed as keyword
                argument `rel`.
            TypeError: Object that is not an ontology class passed as
                keyword argument `oclass`.
            RuntimeError: Ontology individuals that belong to a different
                session provided.
        """
        identifiers = list(individuals)
        for i, x in enumerate(identifiers):
            if not isinstance(x, (OntologyIndividual, Identifier, str)):
                raise TypeError(
                    f"Expected {OntologyIndividual}, {Identifier} or {str} "
                    f"objects, not {type(x)}."
                )
            elif isinstance(x, OntologyIndividual) and x not in self.session:
                raise RuntimeError(
                    "Cannot get an individual that belongs to "
                    "a different session, please add it to this session "
                    "first using `session.add`."
                )

            if isinstance(x, str):
                if not isinstance(x, Identifier):
                    x = URIRef(x)
                identifiers[i] = UID(x)
            elif isinstance(x, OntologyIndividual):
                identifiers[i] = UID(x.identifier)

        if isinstance(rel, Identifier):
            rel = self.session.ontology.from_identifier_typed(
                rel, typing=OntologyRelationship
            )
        elif not isinstance(rel, OntologyRelationship):
            raise TypeError(
                "Found object of type %s passed to argument rel. "
                "Should be an OntologyRelationship." % type(rel)
            )

        if oclass is not None and not isinstance(oclass, OntologyClass):
            raise TypeError(
                "Found object of type %s passed to argument "
                "oclass. Should be an OntologyClass." % type(oclass)
            )

        relationship_set = RelationshipSet(
            rel, self, oclass=oclass, uids=tuple(identifiers) or None
        )

        if not return_rel:
            if not identifiers:
                return relationship_set
            else:
                return (
                    next(iter(relationship_set), None)
                    if len(identifiers) <= 1
                    else tuple(relationship_set)
                )
        else:
            result = []
            for (i, r, t) in relationship_set.iter_low_level():
                if not t:
                    continue
                session = self.session
                result += [
                    (
                        session.from_identifier_typed(
                            i, typing=OntologyIndividual
                        ),
                        session.ontology.from_identifier_typed(
                            r, typing=OntologyRelationship
                        ),
                    )
                ]
            return tuple(result)

    def iter(
        self,
        *individuals: Union[OntologyIndividual, Identifier, str],
        rel: Union[OntologyRelationship, Identifier] = OWL.topObjectProperty,
        oclass: Optional[OntologyClass] = None,
        return_rel: bool = False,
    ) -> Union[
        Iterator[OntologyIndividual],
        Iterator[Optional[OntologyIndividual]],
        Iterator[Tuple[OntologyIndividual, OntologyRelationship]],
    ]:
        """Iterate over the connected individuals.

        The structure of the output can vary depending on the form used for
        the call. See the "Returns:" section of this docstring for more
        details on this.

        Args:
            individuals: Restrict the elements to be returned to a certain
                subset of the connected elements.
            rel: Only yield individuals which are connected by a subclass
                of the given relationship. Defaults to
                OWL.topObjectProperty (any relationship).
            oclass: Only yield individuals which are a subclass of the given
                ontology class. Defaults to None (no filter).
            return_rel: Whether to yield the connecting relationship.
                Defaults to False.

        Returns:
            Calls without `*individuals` (Iterator[OntologyIndividual]): The
                position of each element in the result is non-deterministic.
                This corresponds to the calls `iter()`, `iter(rel=___)`,
                `iter(oclass=___)`, `iter(rel=___, oclass=___)`, with the
                parameter `return_rel` unset or set to False.
            Calls with `*individuals` (Iterator[Optional[
                    OntologyIndividual]]):
                The position of each element in the result is determined by the
                position of the corresponding identifier/individual in the
                given list of identifiers/individuals. In this case, the result
                can contain `None` values if a given identifier/individual is
                not connected to this individual, or if it does not satisfy
                the class filter. This description corresponds to the calls
                `iter(*uids)`, `iter(*uids, rel=___)`,
                `iter(*uids, rel=___, oclass=`___`)`.
            Calls with `return_rel=True` (Iterator[
                    Tuple[OntologyIndividual, OntologyRelationship]]):
                The dependence of the order of the elements is maintained
                for the calls with `*individuals`. No `None` values
                are contained in the result (such identifiers or individuals
                are simply skipped). Moreover, the elements returned are now
                pairs of individualsand the relationship connecting this
                individual to such ones. This description corresponds to any
                call of the form `iter(..., return_rel=True)`.


        Raises:
            TypeError: Objects that are not ontology individuals,
                identifiers or strings provided as positional arguments.
            TypeError: Object that is not an ontology relationship or the
                identifier of an ontology relationship passed as keyword
                argument `rel`.
            TypeError: Object that is not an ontology class passed as
                keyword argument `oclass`.
            RuntimeError: Ontology individuals that belong to a different
                session provided.
        """
        identifiers = list(individuals)
        for n, x in enumerate(identifiers):
            if not isinstance(x, (OntologyIndividual, Identifier, str)):
                raise TypeError(
                    f"Expected {OntologyIndividual}, {Identifier} or {str} "
                    f"objects, not {type(x)}."
                )
            elif isinstance(x, OntologyIndividual) and x not in self.session:
                raise RuntimeError(
                    "Cannot get an individual that belongs to "
                    "a different session, please add it to this session "
                    "first using `session.add`."
                )

            if isinstance(x, str):
                if not isinstance(x, Identifier):
                    x = URIRef(x)
                identifiers[n] = UID(x)
            elif isinstance(x, OntologyIndividual):
                identifiers[n] = UID(x.identifier)

        if isinstance(rel, Identifier):
            rel = self.session.ontology.from_identifier_typed(
                rel, typing=OntologyRelationship
            )
        elif not isinstance(rel, OntologyRelationship):
            raise TypeError(
                "Found object of type %s passed to argument rel. "
                "Should be an OntologyRelationship." % type(rel)
            )

        if oclass is not None and not isinstance(oclass, OntologyClass):
            raise TypeError(
                "Found object of type %s passed to argument "
                "oclass. Should be an OntologyClass." % type(oclass)
            )

        relationship_set = RelationshipSet(
            rel, self, oclass=oclass, uids=tuple(identifiers) or None
        )

        # In the following section, return is used instead of yield so that
        # code runs until the `return` statement when iter is called (
        # otherwise the exceptions above would not be raised until the first
        # item from the iterator is requested).
        if not return_rel:
            iterator = iter(relationship_set)
        else:

            def iterator() -> Iterator[
                Tuple[OntologyIndividual, OntologyRelationship]
            ]:
                """Helper iterator.

                The purpose of defining this iterator is to be able to
                return it, instead of using the `yield` keyword on the main
                function, as described on the comment above.
                """
                for (i, r, t) in relationship_set.iter_low_level():
                    if not t:
                        continue
                    session = self.session
                    yield (
                        (
                            session.from_identifier_typed(
                                i, typing=OntologyIndividual
                            ),
                            session.ontology.from_identifier_typed(
                                r, typing=OntologyRelationship
                            ),
                        )
                    )

            iterator = iterator()
        return iterator

    # ↑ ------ ↑
    # Public API

    def _attribute_autocompletion(self) -> Iterable[str]:
        """Compute individual's attributes as autocompletion suggestions."""
        result = iter(())
        attributes = (
            attr
            for oclass in self.classes
            for attr in chain(
                oclass.attributes.keys(),
                oclass.optional_attributes,
                self.attributes_generator(),
            )
        )
        for attribute in attributes:
            result = chain(
                result,
                attribute.iter_labels(return_literal=False),
                (attribute.iri[len(attribute.namespace.iri) :],),
            )
        return result

    def _relationship_autocompletion(self) -> Iterable[str]:
        """Compute individual's relationships as autocompletion suggestions."""
        result = iter(())
        relationships = (
            relationship
            for _, relationship in self.relationships_iter(return_rel=True)
        )
        for relationship in relationships:
            result = chain(
                result,
                relationship.iter_labels(return_literal=False),
                (relationship.iri[len(relationship.namespace.iri) :],),
            )
        return result

    def _annotation_autocompletion(self) -> Iterable[str]:
        """Compute individual's annotations as autocompletion suggestions."""
        result = iter(())
        annotation_properties = (
            annotation for annotation, _ in self.annotations_iter()
        )
        for annotation in annotation_properties:
            result = chain(
                result,
                annotation.iter_labels(
                    return_literal=False, return_prop=False
                ),
                (annotation.iri[len(annotation.namespace.iri) :],),
            )
        return result

    def _get_direct_superclasses(self) -> Iterable["OntologyClass"]:
        yield from (
            x for oclass in self.classes for x in oclass.direct_superclasses
        )

    def _get_direct_subclasses(self) -> Iterable["OntologyClass"]:
        yield from (
            x for oclass in self.classes for x in oclass.direct_subclasses
        )

    def _get_superclasses(self) -> Iterable["OntologyClass"]:
        yield from (x for oclass in self.classes for x in oclass.superclasses)

    def _get_subclasses(self) -> Iterable["OntologyClass"]:
        yield from (x for oclass in self.classes for x in oclass.subclasses)

    # Annotation handling
    # ↓ --------------- ↓

    @staticmethod
    def _classify_by_type(
        values: Set[PredicateValue],
    ) -> Dict[Type[PredicateValue], PredicateValue]:
        values = {
            type_: tuple(filter(lambda x: isinstance(x, type_), values))
            for type_ in (
                OntologyAnnotation,
                OntologyAttribute,
                OntologyClass,
                OntologyIndividual,
                OntologyRelationship,
                ATTRIBUTE_VALUE_TYPES,
                URIRef,
                Literal,
            )
        }
        values = {key: value for key, value in values.items() if value}
        return values

    def annotations_add(
        self,
        annotation: OntologyAnnotation,
        values: Union[
            Dict[Type[AnnotationValue], AnnotationValue], Set[AnnotationValue]
        ],
    ) -> None:
        """Adds annotations to the ontology individual."""
        if not isinstance(values, dict):
            values = self._classify_by_type(values)
        for value in chain(
            *(
                values.get(key, set())
                for key in (
                    OntologyAnnotation,
                    OntologyAttribute,
                    OntologyClass,
                    OntologyIndividual,
                    OntologyRelationship,
                )
            )
        ):
            self.session.graph.add((self.iri, annotation.iri, value.iri))
        for value in values.get(Literal, set()):
            self.session.graph.add((self.iri, annotation.iri, value))
        for value in values.get(ATTRIBUTE_VALUE_TYPES, set()):
            self.session.graph.add((self.iri, annotation.iri, Literal(value)))
        for value in values.get(URIRef, set()):
            self.session.graph.add((self.iri, annotation.iri, value))

    def annotations_delete(
        self,
        annotation: OntologyAnnotation,
        values: Union[
            Dict[Type[AnnotationValue], Union[AnnotationValue]],
            Set[AnnotationValue],
        ],
    ) -> None:
        """Deletes an annotation from an individual."""
        if not isinstance(values, dict):
            values = self._classify_by_type(values)

        for value in values.get(Literal, set()):
            self.session.graph.remove((self.iri, annotation.iri, value))
        for value in values.get(ATTRIBUTE_VALUE_TYPES, set()):
            self.session.graph.remove(
                (self.iri, annotation.iri, Literal(value))
            )
        for value in values.get(URIRef, set()):
            self.session.graph.remove((self.iri, annotation.iri, value))

    def annotations_set(
        self,
        annotation: OntologyAnnotation,
        values: Union[
            Dict[Type[AnnotationValue], AnnotationValue], Set[AnnotationValue]
        ],
    ) -> None:
        """Replaces the annotations of an individual."""
        if not isinstance(values, dict):
            values = self._classify_by_type(values)

        self.session.graph.remove((self.iri, annotation.iri, None))
        for value in chain(
            *(
                values.get(key, set())
                for key in (
                    OntologyAnnotation,
                    OntologyAttribute,
                    OntologyClass,
                    OntologyIndividual,
                    OntologyRelationship,
                )
            )
        ):
            self.session.graph.add((self.iri, annotation.iri, value.iri))
        for value in values.get(Literal, set()):
            self.session.graph.add((self.iri, annotation.iri, value))
        for value in values.get(ATTRIBUTE_VALUE_TYPES, set()):
            self.session.graph.add((self.iri, annotation.iri, Literal(value)))
        for value in values.get(URIRef, set()):
            self.session.graph.add((self.iri, annotation.iri, value))

    def annotations_value_generator(
        self, annotation: OntologyAnnotation
    ) -> Iterator[AnnotationValue]:
        """Yields the annotation values applied to the individual."""
        for obj in self.session.graph.objects(self.iri, annotation.iri):
            if isinstance(obj, URIRef):
                try:
                    yield self.session.from_identifier(obj)
                    continue
                except KeyError:
                    pass
                try:
                    yield self.session.ontology.from_identifier(obj)
                    continue
                except KeyError:
                    pass
                yield obj
            elif isinstance(obj, Literal):
                yield obj.toPython()

    def annotations_iter(
        self,
        rel: Optional[OntologyAnnotation] = None,
        return_rel: bool = False,
    ) -> Iterator[AnnotationValue]:
        """Iterate over the connected ontology individuals.

        Args:
            rel: Only return the annotation values which are connected by
                the given annotation. Defaults to None (any relationship).
            return_rel: Whether to return the connecting
                relationship. Defaults to False.

        Returns:
            Iterator with the queried ontology individuals.
        """
        entities_and_annotations = (
            (
                self.session.from_identifier(o),
                self.session.ontology.from_identifier(p),
            )
            for s, p, o in self.session.graph.triples(
                (
                    self.identifier,
                    rel.identifier if rel is not None else None,
                    None,
                )
            )
            if not (isinstance(o, Literal) or p == RDF.type)
        )
        entities_and_annotations = filter(
            lambda x: isinstance(x, OntologyAnnotation),
            entities_and_annotations,
        )
        if return_rel:
            yield from entities_and_annotations
        else:
            yield from map(lambda x: x[0], entities_and_annotations)

    # ↑ --------------- ↑
    # Annotation handling

    # Attribute handling
    # ↓ -------------- ↓

    @property
    def attributes(
        self,
    ) -> Mapping[OntologyAttribute, FrozenSet[AttributeValue]]:
        """Get the attributes of this individual as a dictionary."""
        generator = self.attributes_attribute_and_value_generator()
        return MappingProxyType(
            {attr: frozenset(gen) for attr, gen in generator}
        )

    def _attributes_get_by_name(self, name: str) -> Set[OntologyAttribute]:
        """Get an attribute of this individual by name."""
        attributes = (
            attr
            for oclass in self.classes
            for attr in chain(
                oclass.attributes.keys(),
                oclass.optional_attributes,
                self.attributes_generator(),
            )
        )
        attributes = (
            attr
            for attr in attributes
            if any(
                (
                    str(attr.identifier).endswith(name),
                    name in attr.iter_labels(return_literal=False),
                )
            )
        )
        return set(attributes)

    @staticmethod
    def _attributes_modifier(func):
        """Decorator for functions that perform attribute modifications.

        To be used with `attributes_add`, `attributes_delete` and
        `attributes_set` exclusively. The three functions are extremely
        similar. This decorator covers the code that they share.
        """

        @functools.wraps(func)
        def wrapper(
            self,
            attribute: OntologyAttribute,
            values: Iterable[AttributeValue],
            *args,
            **kwargs,
        ):
            values = set(values)
            for x in values:
                if not isinstance(x, ATTRIBUTE_VALUE_TYPES):
                    raise TypeError(
                        f"Type '{type(x)}' of object {x} cannot "
                        f"be set as attribute value, as it is "
                        f"either incompatible with the OWL "
                        f"standard or not yet supported by "
                        f"SimPhoNy."
                    )
            return func(self, attribute, values, *args, **kwargs)

        return wrapper

    # Bind static method to use as decorator.
    _attribute_modifier = _attributes_modifier.__get__(object, None)

    @_attribute_modifier
    def attributes_add(
        self, attribute: OntologyAttribute, values: Iterable[AttributeValue]
    ):
        """Add values to a datatype property.

        If any of the values provided in `values` have already been assigned,
        then they are simply ignored.

        Args:
            attribute: The ontology attribute to be used for assignments.
            values: An iterable of objects whose types are compatible either
                with the OWL standard's data types for literals or compatible
                with SimPhoNy as custom data types.

        Raises:
            TypeError: When Python objects with types incompatible with the
                OWL standard or with SimPhoNy as custom data types are given.
        """
        # TODO: prevent the end result having more than one value depending on
        #  ontology cardinality restrictions and/or functional property
        #  criteria.
        for value in filter(lambda v: v is not None, values):
            self.session.graph.add(
                (
                    self.iri,
                    attribute.iri,
                    Literal(
                        attribute.convert_to_datatype(value),
                        datatype=attribute.datatype,
                    ),
                )
            )

    @_attribute_modifier
    def attributes_delete(
        self, attribute: OntologyAttribute, values: Iterable[AttributeValue]
    ):
        """Remove values from a datatype property.

        If any of the values provided in `values` are not present, they are
        simply ignored.

        Args:
            attribute: The ontology attribute to be used for assignments.
            values: An iterable of objects whose types are compatible either
                with the OWL standard's data types for literals or compatible
                with SimPhoNy as custom data types.

        Raises:
            TypeError: When Python objects with types incompatible with the
                OWL standard or with SimPhoNy as custom data types are given.
        """
        for value in values:
            self.session.graph.remove(
                (
                    self.iri,
                    attribute.iri,
                    Literal(
                        attribute.convert_to_datatype(value),
                        datatype=attribute.datatype,
                    ),
                )
            )

    @_attribute_modifier
    def attributes_set(
        self,
        attribute: OntologyAttribute,
        values: Iterable[Union[AttributeValue, Literal]],
    ):
        """Replace values assigned to a datatype property.

        Args:
            attribute: The ontology attribute to be used for assignments.
            values: An iterable of objects whose types are compatible either
                with the OWL standard's data types for literals or compatible
                with SimPhoNy as custom data types.

        Raises:
            TypeError: When Python objects with types incompatible with the
                OWL standard or with SimPhoNy as custom data types are given.
        """
        # TODO: prevent the end result having more than one value depending on
        #  ontology cardinality restrictions and/or functional property
        #  criteria.
        self.session.graph.remove((self.iri, attribute.iri, None))
        self.attributes_add(attribute, values)

    def attributes_value_generator(
        self, attribute: OntologyAttribute
    ) -> Iterator[AttributeValue]:
        """Returns a generator of values assigned to the specified attribute.

        Args:
            attribute: The ontology attribute query for values.

        Returns:
            Generator that returns the attribute values.
        """
        for literal in self.session.graph.objects(self.iri, attribute.iri):
            # TODO: Recreating the literal to get a vector from
            #  literal.toPython() should not be necessary, find out why it
            #  is happening.
            literal = Literal(
                str(literal), datatype=literal.datatype, lang=literal.language
            )
            yield literal.toPython()

    def attributes_value_contains(
        self, attribute: OntologyAttribute, value: AttributeValue
    ) -> bool:
        """Whether a specific value is assigned to the specified attribute.

        Args:
            attribute: The ontology attribute query for values.

        Returns:
            Whether the specific value is assigned to the specified
            attribute or not.
        """
        if attribute.datatype in (None, RDF.langString):
            return any(
                str(value) == str(x)
                for x in self.session.graph.objects(self.iri, attribute.iri)
                if isinstance(x, Literal)
            )
        else:
            literal = Literal(value, datatype=attribute.datatype)
            literal = Literal(str(literal), datatype=attribute.datatype)
            return literal in self.session.graph.objects(
                self.iri, attribute.iri
            )

    def attributes_generator(self) -> Iterator[OntologyAttribute]:
        """Returns a generator of the attributes of this CUDS object.

        The generator only returns the OntologyAttribute objects, NOT the
        values.

        Returns:
            Generator that returns the attributes of this CUDS object.
        """
        for predicate in self.session.graph.predicates(self.iri, None):
            try:
                obj = self.session.ontology.from_identifier_typed(
                    predicate, typing=OntologyAttribute
                )
            except (KeyError, TypeError):
                continue
            if isinstance(obj, OntologyAttribute):
                yield obj

    def attributes_attribute_and_value_generator(
        self,
    ) -> Iterator[Tuple[OntologyAttribute, Iterator[AttributeValue]]]:
        """Returns a generator of both the attributes and their values.

        Returns:
            Generator that yields tuples, where the first item is the ontology
            attribute and the second a generator of values for such attribute.
        """
        for attribute in self.attributes_generator():
            yield attribute, self.attributes_value_generator(attribute)

    # ↑ -------------- ↑
    # Attribute handling

    # Relationship handling
    # ↓ ----------------- ↓

    def relationships_connect(
        self, *other: OntologyIndividual, rel: OntologyRelationship
    ):
        """Connect other ontology individuals to this one.

        If the connected object is associated with the same session, only a
        link is created. Otherwise, the information associated with the
        connected object is added to the session of this ontology individual.

        Args:
            other: The ontology individual(s) to connect.
            rel: The relationship to use.

        Raises:
            TypeError: No relationship given.

        Returns:
            The ontology individual that has been connected,
            associated with the session of the current ontology individual
            object.
        """
        for individual in other:
            self.session.merge(individual)
            self.session.graph.add(
                (self.identifier, rel.identifier, individual.identifier)
            )

    def relationships_disconnect(
        self,
        *other: OntologyIndividual,
        rel: Optional[OntologyRelationship] = None,
    ):
        """Disconnect ontology individuals from this one.

        Args:
            other: The ontology individual(s) to disconnect. When not
                specified, this ontology individual will be disconnected
                from all connected individuals.
            rel: This ontology individual will be disconnected from `other`
                for relationship `rel`. When not specified, this ontology
                individual will be disconnected from `other` for all
                relationships.
        """
        if rel is None:
            predicates = set()
            for predicate in self.session.graph.predicates(
                self.identifier, None
            ):
                try:
                    relationship = self.session.ontology.from_identifier(
                        predicate
                    )
                    predicates |= {relationship.identifier}
                except KeyError:
                    pass
        else:
            predicates = {rel.identifier}

        other = other if other else {None}
        for item in other:
            s, o = (
                self.identifier,
                item.identifier if item is not None else None,
            )
            for p in predicates:
                self.session.graph.remove((s, p, o))

    def relationships_iter(
        self,
        rel: Optional[OntologyRelationship] = None,
        oclass: Optional[OntologyClass] = None,
        return_rel: bool = False,
    ) -> Iterator[OntologyIndividual]:
        """Iterate over the connected ontology individuals.

        Args:
            rel: Only return ontology individuals which are connected by
                the given relationship. Defaults to None (any relationship).
            oclass: Only return ontology individuals which belong to the
                given ontology class. Defaults to None (any class).
            return_rel: Whether to return the connecting
                relationship. Defaults to False.

        Returns:
            Iterator with the queried ontology individuals.
        """
        entities_and_relationships = (
            (
                self.session.from_identifier(o),
                self.session.ontology.from_identifier(p),
            )
            for s, p, o in self.session.graph.triples(
                (
                    self.identifier,
                    rel.identifier if rel is not None else None,
                    None,
                )
            )
            if not (isinstance(o, Literal) or p == RDF.type)
        )
        if oclass:
            entities_and_relationships = (
                (entity, relationship)
                for entity, relationship in entities_and_relationships
                if oclass == entity
            )

        if return_rel:
            yield from entities_and_relationships
        else:
            yield from map(lambda x: x[0], entities_and_relationships)

    # ↑ ----------------- ↑
    # Relationship handling