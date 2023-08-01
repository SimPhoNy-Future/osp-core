"""Ontology module for the SimPhoNy OSP."""

from osp.ontology.annotation import OntologyAnnotation
from osp.ontology.attribute import OntologyAttribute
from osp.ontology.composition import OPERATOR as COMPOSITION_OPERATOR
from osp.ontology.composition import Composition
from osp.ontology.entity import OntologyEntity
from osp.ontology.individual import (
    AnnotationSet,
    AttributeSet,
    MultipleResultsError,
    OntologyIndividual,
    RelationshipSet,
    ResultEmptyError,
)
from osp.ontology.namespace import OntologyNamespace
from osp.ontology.oclass import OntologyClass
from osp.ontology.relationship import OntologyRelationship
from osp.ontology.restriction import (
    QUANTIFIER as RESTRICTION_QUANTIFIER,
)
from osp.ontology.restriction import RTYPE as RESTRICTION_TYPE
from osp.ontology.restriction import Restriction

__all__ = [
    "AnnotationSet",
    "AttributeSet",
    "Composition",
    "COMPOSITION_OPERATOR",
    "MultipleResultsError",
    "RESTRICTION_QUANTIFIER",
    "RESTRICTION_TYPE",
    "RelationshipSet",
    "Restriction",
    "ResultEmptyError",
    "OntologyAnnotation",
    "OntologyAttribute",
    "OntologyEntity",
    "OntologyIndividual",
    "OntologyNamespace",
    "OntologyClass",
    "OntologyRelationship",
]
