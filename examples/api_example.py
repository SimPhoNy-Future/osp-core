# If you did not install the CITY ontology
# (pico install city),
# you have to execute these commands first:
# from osp.core import Parser
# p = Parser()
# p.parse("city")

from osp.core.namespaces import CITY

print("Creating a City object, c...")
c = CITY.CITY(name="Freiburg", coordinates=[47, 7])
print("  uid of c: " + str(c.uid))
print("  oclass of c: " + str(c.oclass) + "\n")

print("Creating Citizen objects, p1, p2...")
p1 = CITY.CITIZEN(name="Peter")
p2 = CITY.CITIZEN(name="Anne")

print("\nAdding p1 to c...")
c.add(p1, rel=CITY.HAS_INHABITANT)
print("internal dict of c:", c._neighbors, "\n")

print("Adding p2 to c...")
c.add(p2, rel=CITY.HAS_INHABITANT)
print("internal dict of c:", c._neighbors, "\n")

print("\nElements in c:")
for el in c.iter():
    print("  uid: " + str(el.uid))

print("\nGetting p1 from c:")
print(c.get(p1.uid))

print("\nGetting CUBA.CITIZEN from c:")
print(c.get(oclass=CITY.CITIZEN))

print("\n Remove p1:")
c.remove(p1.uid)
print("internal dict of c:", c._neighbors, "\n")

print("\nAdding neighborhoods to Cuds object in a loop:")
for i in range(6):
    print("Added neighborhood %s" % i)
    c.add(CITY.NEIGHBORHOOD(
        name="neighborhood %s" % i))
print("internal dict of c:", c._neighbors, "\n")
