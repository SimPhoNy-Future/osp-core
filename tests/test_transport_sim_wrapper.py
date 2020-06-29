import sys
import time
import subprocess
import unittest2 as unittest
import logging
from osp.core.session.transport.transport_session_client import \
    TransportSessionClient
from osp.core.session.transport.transport_session_server import \
    TransportSessionServer
from osp.wrappers.simdummy import SimDummySession

logger = logging.getLogger("osp.core")
logger.setLevel(logging.CRITICAL)

try:
    from osp.core.namespaces import CITY
except ImportError:
    from osp.core.ontology import Parser
    from osp.core.namespaces import _namespace_registry
    Parser(_namespace_registry._graph).parse("city")
    _namespace_registry.update_namespaces()
    from osp.core.namespaces import CITY

HOST = "127.0.0.1"
PORT = 8689
URI = f"ws://{HOST}:{PORT}"
TABLE = "transport.db"

SERVER_STARTED = False


class TestTransportSimWrapperCity(unittest.TestCase):

    SERVER_STARTED = False

    @classmethod
    def setUpClass(cls):
        args = ["python",
                "tests/test_transport_sim_wrapper.py",
                "server"]
        p = subprocess.Popen(args)

        TestTransportSimWrapperCity.SERVER_STARTED = p
        time.sleep(1)

    @classmethod
    def tearDownClass(cls):
        TestTransportSimWrapperCity.SERVER_STARTED.terminate()

    def test_dummy_sim_wrapper(self):
        """Create a dummy simulation syntactic layer + test
        if working with this layer works as expected.
        """
        with TransportSessionClient(SimDummySession, URI) \
                as session:
            wrapper = CITY.CITY_SIM_WRAPPER(num_steps=1, session=session)
            c = CITY.CITY(name="Freiburg")
            p1 = CITY.PERSON(name="Hans", age=34)
            p2 = CITY.PERSON(name="Renate", age=54)
            cw, _, _ = wrapper.add(c, p1, p2)

            session.run()

            self.assertEqual(len(
                wrapper.get(oclass=CITY.PERSON,
                            rel=CITY.HAS_PART)), 1)
            self.assertEqual(len(
                cw.get(oclass=CITY.CITIZEN,
                       rel=CITY.HAS_INHABITANT)), 1)
            self.assertEqual(wrapper.get(p2.uid).name, "Renate")
            self.assertEqual(wrapper.get(p2.uid).age, 55)
            self.assertEqual(cw.get(p1.uid).name, "Hans")
            self.assertEqual(cw.get(p1.uid).age, 35)

            session.run()
            wrapper.add(CITY.PERSON(name="Peter"))
            self.assertRaises(RuntimeError, session.run)


if __name__ == '__main__':
    if sys.argv[-1] == "server":
        sys.path.append("tests")
        server = TransportSessionServer(SimDummySession, HOST, PORT)
        server.startListening()
