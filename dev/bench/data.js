window.BENCHMARK_DATA = {
  "lastUpdate": 1627373798103,
  "repoUrl": "https://github.com/simphony/osp-core",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jose.manuel.dominguez@iwm.fraunhofer.de",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "jose.manuel.dominguez@iwm.fraunhofer.de",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "distinct": true,
          "id": "d2106ce0be96e5f7b94f2262586456a3b3021de5",
          "message": "Updated docker image.",
          "timestamp": "2021-06-02T10:15:43+02:00",
          "tree_id": "965d17ff47257266eb99602e375ae4c5d5e4bb0f",
          "url": "https://github.com/simphony/osp-core/commit/d2106ce0be96e5f7b94f2262586456a3b3021de5"
        },
        "date": 1622621988064,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 128.64625019355034,
            "unit": "iter/sec",
            "range": "stddev: 0.005153894187014561",
            "extra": "mean: 7.773254163999992 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 125.14831373591512,
            "unit": "iter/sec",
            "range": "stddev: 0.0033471352705642513",
            "extra": "mean: 7.990519169999967 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 125.99540058124444,
            "unit": "iter/sec",
            "range": "stddev: 0.003266985200362325",
            "extra": "mean: 7.936797655999986 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 229.39210617480813,
            "unit": "iter/sec",
            "range": "stddev: 0.0013666526319144117",
            "extra": "mean: 4.359347915999997 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 279.84483000436353,
            "unit": "iter/sec",
            "range": "stddev: 0.0007831569986133275",
            "extra": "mean: 3.5734088780000235 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 398.57436359217394,
            "unit": "iter/sec",
            "range": "stddev: 0.0001981805401423121",
            "extra": "mean: 2.508942098000091 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.235172734691302,
            "unit": "iter/sec",
            "range": "stddev: 0.006540498050333386",
            "extra": "mean: 89.00619720000024 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 442.1637723533681,
            "unit": "iter/sec",
            "range": "stddev: 0.048502225522917185",
            "extra": "mean: 2.261605456000183 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 693.1218995105404,
            "unit": "iter/sec",
            "range": "stddev: 0.030729945808742637",
            "extra": "mean: 1.4427476620002437 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 361.987804044455,
            "unit": "iter/sec",
            "range": "stddev: 0.0005678897907963088",
            "extra": "mean: 2.7625240100000497 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.99417750773507,
            "unit": "iter/sec",
            "range": "stddev: 0.009461794716881829",
            "extra": "mean: 90.95723616400039 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 5061.394615465168,
            "unit": "iter/sec",
            "range": "stddev: 0.00011586069130436673",
            "extra": "mean: 197.57400399970493 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 8075.229092632582,
            "unit": "iter/sec",
            "range": "stddev: 0.000019267988146653417",
            "extra": "mean: 123.83549600002651 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 13609.510216949588,
            "unit": "iter/sec",
            "range": "stddev: 0.000029108286446393328",
            "extra": "mean: 73.47802999953501 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 9545.987124801051,
            "unit": "iter/sec",
            "range": "stddev: 0.00002482937192593551",
            "extra": "mean: 104.75605999948812 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 213.72642124706607,
            "unit": "iter/sec",
            "range": "stddev: 0.0011346798431396076",
            "extra": "mean: 4.678878699999416 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jose.manuel.dominguez@iwm.fraunhofer.de",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "jose.manuel.dominguez@iwm.fraunhofer.de",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "distinct": true,
          "id": "37355c322be794f0c298238c1e0195470a9e0e2f",
          "message": "Refresh PR.",
          "timestamp": "2021-06-02T10:50:27+02:00",
          "tree_id": "e5734f5912b8c2a3d9234fb5f0bcbd584a887661",
          "url": "https://github.com/simphony/osp-core/commit/37355c322be794f0c298238c1e0195470a9e0e2f"
        },
        "date": 1622624761898,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 137.52091645694603,
            "unit": "iter/sec",
            "range": "stddev: 0.005581769314782294",
            "extra": "mean: 7.271621115999995 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 123.52401823813157,
            "unit": "iter/sec",
            "range": "stddev: 0.004145250933284245",
            "extra": "mean: 8.095591564 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 123.04355157588877,
            "unit": "iter/sec",
            "range": "stddev: 0.0040378578065194464",
            "extra": "mean: 8.127203637999969 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 229.2878177351415,
            "unit": "iter/sec",
            "range": "stddev: 0.001265394652891297",
            "extra": "mean: 4.361330705999983 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 283.3410413902518,
            "unit": "iter/sec",
            "range": "stddev: 0.000706917030129746",
            "extra": "mean: 3.529315749999938 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 383.3086426988027,
            "unit": "iter/sec",
            "range": "stddev: 0.00037342727013191365",
            "extra": "mean: 2.6088636899997653 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.108218549267761,
            "unit": "iter/sec",
            "range": "stddev: 0.007871096847269802",
            "extra": "mean: 90.02343585199975 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 463.4807451980934,
            "unit": "iter/sec",
            "range": "stddev: 0.04667162075131904",
            "extra": "mean: 2.1575869340000224 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 710.1243763104693,
            "unit": "iter/sec",
            "range": "stddev: 0.029986353273167784",
            "extra": "mean: 1.4082040179997932 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 386.785367155788,
            "unit": "iter/sec",
            "range": "stddev: 0.000355188074836967",
            "extra": "mean: 2.5854132160000347 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 11.361945300244368,
            "unit": "iter/sec",
            "range": "stddev: 0.005375414286229803",
            "extra": "mean: 88.013097544 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4809.948589833292,
            "unit": "iter/sec",
            "range": "stddev: 0.00011830085272262114",
            "extra": "mean: 207.90242999970587 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7967.823760357772,
            "unit": "iter/sec",
            "range": "stddev: 0.000024702975113562658",
            "extra": "mean: 125.50478400078191 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 16542.697894518165,
            "unit": "iter/sec",
            "range": "stddev: 0.000018249943870623496",
            "extra": "mean: 60.449631999347275 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10555.509662558474,
            "unit": "iter/sec",
            "range": "stddev: 0.000019502428052441993",
            "extra": "mean: 94.73725399988098 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 235.3903848927603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005841984354278254",
            "extra": "mean: 4.248261883999987 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55ac8a2ebea5d34da5a0205c9debd627a1843484",
          "message": "108 Do continuous benchmarks (#647)\n\n* Benchmark class to control iterations and times.\r\n\r\n* Add benchmarks for all the the methods of the CUDS API referenced in the CUDS API tutorial.\r\n\r\n* Add wrapper functions to make the benchmarks compatible with pytest-benchmark.\r\n\r\n* Add `pytest.ini` file, needed for the benchmarks.\r\n\r\n* Simplify pytest-benchmark wrapper functions using a template.\r\n\r\n* Move pytest-benchmark wrapper functions template to the benchmark class.\r\n\r\n* Change default size of CUDS API benchmarks to 500.\r\n\r\n* Add benchmarks workflow.\r\n\r\n* Update benchmark token name.\r\n\r\n* Enable benchmarks on the PR branch (for testing).\r\n\r\n* Workflow test.\r\n\r\n* Updated docker image.\r\n\r\n* Remove PR branch from `benchmarks.yml`.",
          "timestamp": "2021-06-16T14:22:22+02:00",
          "tree_id": "7e3d2f2b466bd504586e8606a4b602bb9f081a85",
          "url": "https://github.com/simphony/osp-core/commit/55ac8a2ebea5d34da5a0205c9debd627a1843484"
        },
        "date": 1623846356272,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 154.75321840848648,
            "unit": "iter/sec",
            "range": "stddev: 0.005293061680850901",
            "extra": "mean: 6.46190115 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 113.0983054397646,
            "unit": "iter/sec",
            "range": "stddev: 0.004972992426035721",
            "extra": "mean: 8.841865456000075 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 126.79217236169214,
            "unit": "iter/sec",
            "range": "stddev: 0.00360839318592621",
            "extra": "mean: 7.88692220800005 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 212.81248867105896,
            "unit": "iter/sec",
            "range": "stddev: 0.001809650646226487",
            "extra": "mean: 4.698972350000027 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 238.5130374076588,
            "unit": "iter/sec",
            "range": "stddev: 0.0013954273975939077",
            "extra": "mean: 4.192642929999806 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 342.6443351931054,
            "unit": "iter/sec",
            "range": "stddev: 0.0007187620509322808",
            "extra": "mean: 2.9184781339998693 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 10.117580189426876,
            "unit": "iter/sec",
            "range": "stddev: 0.01526685733525202",
            "extra": "mean: 98.83786253999992 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 438.62527158673873,
            "unit": "iter/sec",
            "range": "stddev: 0.049452262083969106",
            "extra": "mean: 2.2798503980002636 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 694.9592393620153,
            "unit": "iter/sec",
            "range": "stddev: 0.03070969937628243",
            "extra": "mean: 1.4389333119997332 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 320.3229694008756,
            "unit": "iter/sec",
            "range": "stddev: 0.0010907275415568498",
            "extra": "mean: 3.1218491820002043 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.685197728012053,
            "unit": "iter/sec",
            "range": "stddev: 0.010863163681414014",
            "extra": "mean: 93.58741180600003 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4912.253979125075,
            "unit": "iter/sec",
            "range": "stddev: 0.00010779581531485208",
            "extra": "mean: 203.57253599866 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7771.803678613777,
            "unit": "iter/sec",
            "range": "stddev: 0.000029377711838124",
            "extra": "mean: 128.6702600004901 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 16434.71909330291,
            "unit": "iter/sec",
            "range": "stddev: 0.000020537605534430002",
            "extra": "mean: 60.84679600076015 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10255.972878643723,
            "unit": "iter/sec",
            "range": "stddev: 0.000029133519963881722",
            "extra": "mean: 97.50415799970824 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 278.46983937675896,
            "unit": "iter/sec",
            "range": "stddev: 0.0006279353429754167",
            "extra": "mean: 3.5910531719991354 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "415c676be9f39acd4cc0a730c0469eb43aa9ea46",
          "message": "Decouple the parsers actions (#658)\n\n* Decouple the following operations that the parser was responsible for: get the graph of the ontology, put the ontology in the namespace registry.\r\n\r\n* Modify the unit tests to accommodate the new changes.\r\n\r\n* Make the `Ontology` class directly accesible from the `ontology` module.",
          "timestamp": "2021-06-16T14:55:54+02:00",
          "tree_id": "4e1bf85a2b9adddb0fbdb4e492eeec141d7fc92b",
          "url": "https://github.com/simphony/osp-core/commit/415c676be9f39acd4cc0a730c0469eb43aa9ea46"
        },
        "date": 1623848364523,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 149.699370326335,
            "unit": "iter/sec",
            "range": "stddev: 0.005340880188970438",
            "extra": "mean: 6.680054817999997 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 125.16502749157353,
            "unit": "iter/sec",
            "range": "stddev: 0.0037679208134168613",
            "extra": "mean: 7.989452165999987 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 110.04512566986385,
            "unit": "iter/sec",
            "range": "stddev: 0.0048086565032759414",
            "extra": "mean: 9.087181226000023 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 211.7488964108043,
            "unit": "iter/sec",
            "range": "stddev: 0.0017136593041086855",
            "extra": "mean: 4.722574790000067 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 272.46423253714215,
            "unit": "iter/sec",
            "range": "stddev: 0.0007754128884990152",
            "extra": "mean: 3.6702065100000993 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 351.78020066123213,
            "unit": "iter/sec",
            "range": "stddev: 0.0006565806622675701",
            "extra": "mean: 2.84268414800016 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 10.607426830453921,
            "unit": "iter/sec",
            "range": "stddev: 0.011742099968498598",
            "extra": "mean: 94.2735703939998 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 447.90213385678857,
            "unit": "iter/sec",
            "range": "stddev: 0.04843202629358056",
            "extra": "mean: 2.2326305779997426 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 694.1601665739413,
            "unit": "iter/sec",
            "range": "stddev: 0.030603949161829867",
            "extra": "mean: 1.4405897200001334 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 370.82607798826155,
            "unit": "iter/sec",
            "range": "stddev: 0.00044350905890792376",
            "extra": "mean: 2.69668197399983 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.450468440786846,
            "unit": "iter/sec",
            "range": "stddev: 0.01146252064645033",
            "extra": "mean: 95.68949044400034 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4725.189990679727,
            "unit": "iter/sec",
            "range": "stddev: 0.00011480310406396242",
            "extra": "mean: 211.6317019998064 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 6218.08312338896,
            "unit": "iter/sec",
            "range": "stddev: 0.00006411367610048244",
            "extra": "mean: 160.82126600053925 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 14366.097939689265,
            "unit": "iter/sec",
            "range": "stddev: 0.00003256666373039656",
            "extra": "mean: 69.60832399988703 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10291.675553544215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000193231156871017",
            "extra": "mean: 97.1659079998517 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 265.1533479838543,
            "unit": "iter/sec",
            "range": "stddev: 0.0008989535873424225",
            "extra": "mean: 3.7714025020000577 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ad48a46f529801b4c08a5859fecc131bd5881f8",
          "message": "638 Strange behaviour of CUDS remove (#659)\n\n* Do not put the wrapper in the added buffer.\r\n\r\n* Have the assumption \"the wrapper is not put in the added buffer\" baked in the transport session.\r\n\r\n* Have the assumption \"the wrapper is not put in the added buffer\" also baked in the unit tests. Notice how when `wrapper.add` is used, the wrapper is expected in the updated buffer instead of the added buffer. When `wrapper.add` is not used, the wrapper is not expected in neither buffer.",
          "timestamp": "2021-06-24T16:42:27+02:00",
          "tree_id": "154f06bf56025d67c76ec06cf06d22c37b5b16ca",
          "url": "https://github.com/simphony/osp-core/commit/6ad48a46f529801b4c08a5859fecc131bd5881f8"
        },
        "date": 1624545953487,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 153.42967093996137,
            "unit": "iter/sec",
            "range": "stddev: 0.00585484876538198",
            "extra": "mean: 6.517644168000011 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 123.03862309945542,
            "unit": "iter/sec",
            "range": "stddev: 0.0037557416770005753",
            "extra": "mean: 8.127529183999997 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 119.9018405261524,
            "unit": "iter/sec",
            "range": "stddev: 0.004146395614108172",
            "extra": "mean: 8.340155544000051 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 191.16128382502197,
            "unit": "iter/sec",
            "range": "stddev: 0.0021221515316505635",
            "extra": "mean: 5.231184787999972 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 280.7271379504795,
            "unit": "iter/sec",
            "range": "stddev: 0.0009097018556484361",
            "extra": "mean: 3.562177876000007 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 397.4081839418095,
            "unit": "iter/sec",
            "range": "stddev: 0.00021381069121657623",
            "extra": "mean: 2.5163044960000747 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 10.801280157519294,
            "unit": "iter/sec",
            "range": "stddev: 0.00845714261988745",
            "extra": "mean: 92.58161860599937 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 435.16815367884885,
            "unit": "iter/sec",
            "range": "stddev: 0.04986877000153655",
            "extra": "mean: 2.297962273999474 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 700.7014868328368,
            "unit": "iter/sec",
            "range": "stddev: 0.030408382874563912",
            "extra": "mean: 1.4271412560004535 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 375.9768262381991,
            "unit": "iter/sec",
            "range": "stddev: 0.0005049011042808997",
            "extra": "mean: 2.6597383939999872 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 11.096825608225522,
            "unit": "iter/sec",
            "range": "stddev: 0.00770153903936455",
            "extra": "mean: 90.11586153600089 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 3998.3989770713697,
            "unit": "iter/sec",
            "range": "stddev: 0.00015901798829669417",
            "extra": "mean: 250.1001040002393 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7292.422222379798,
            "unit": "iter/sec",
            "range": "stddev: 0.000027887446410848072",
            "extra": "mean: 137.1286479999867 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 16366.120324206779,
            "unit": "iter/sec",
            "range": "stddev: 0.000016454528321624603",
            "extra": "mean: 61.101835999636485 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10113.19230947822,
            "unit": "iter/sec",
            "range": "stddev: 0.000020664822733354925",
            "extra": "mean: 98.88074599973606 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 285.1159831832923,
            "unit": "iter/sec",
            "range": "stddev: 0.00030982515672498575",
            "extra": "mean: 3.5073445860000447 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2d110555cd1d416f03153c96b92d13f705f258d",
          "message": "622 Update license file (#661)\n\nMove partners to README.",
          "timestamp": "2021-06-30T09:04:05+02:00",
          "tree_id": "5acc09f87e7e84275c9a9e396fffd2a356926923",
          "url": "https://github.com/simphony/osp-core/commit/c2d110555cd1d416f03153c96b92d13f705f258d"
        },
        "date": 1625036839064,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 163.6637880333977,
            "unit": "iter/sec",
            "range": "stddev: 0.0053187673527700235",
            "extra": "mean: 6.1100871000000145 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 125.1535005494054,
            "unit": "iter/sec",
            "range": "stddev: 0.00359488591665041",
            "extra": "mean: 7.9901880139999895 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 124.49888529487416,
            "unit": "iter/sec",
            "range": "stddev: 0.0038444018903876667",
            "extra": "mean: 8.032200429999929 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 219.80897137339886,
            "unit": "iter/sec",
            "range": "stddev: 0.0015764276232287267",
            "extra": "mean: 4.5494048479998455 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 267.31789411676607,
            "unit": "iter/sec",
            "range": "stddev: 0.0009166893366184737",
            "extra": "mean: 3.740864423999966 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 342.91542664417716,
            "unit": "iter/sec",
            "range": "stddev: 0.000815863855519592",
            "extra": "mean: 2.916170934000121 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 10.929860393154888,
            "unit": "iter/sec",
            "range": "stddev: 0.008030364126910114",
            "extra": "mean: 91.49247694199975 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 457.93165053416226,
            "unit": "iter/sec",
            "range": "stddev: 0.04729021841225897",
            "extra": "mean: 2.183732001999715 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 636.0660165641668,
            "unit": "iter/sec",
            "range": "stddev: 0.03336756085896143",
            "extra": "mean: 1.572163854000081 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 376.9737846933997,
            "unit": "iter/sec",
            "range": "stddev: 0.0003339699468602238",
            "extra": "mean: 2.6527043539998942 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.928145313227525,
            "unit": "iter/sec",
            "range": "stddev: 0.007264247662305863",
            "extra": "mean: 91.50683591199973 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 5099.712953461493,
            "unit": "iter/sec",
            "range": "stddev: 0.00011079633577239684",
            "extra": "mean: 196.08946800059357 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7923.033748680502,
            "unit": "iter/sec",
            "range": "stddev: 0.00002235504535403208",
            "extra": "mean: 126.21427999931711 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 17081.613215007033,
            "unit": "iter/sec",
            "range": "stddev: 0.000015052348003699116",
            "extra": "mean: 58.542479999573516 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 9348.824809775188,
            "unit": "iter/sec",
            "range": "stddev: 0.000038135617707671404",
            "extra": "mean: 106.96531599933223 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 252.39129559017255,
            "unit": "iter/sec",
            "range": "stddev: 0.00118160121963872",
            "extra": "mean: 3.962101774000075 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0386e2b1a8159887a1260535ce4f16b927615ee",
          "message": "665 Raise a warning instead of an error when the default relationship of an ontology does not belong to the ontology itself. (#666)",
          "timestamp": "2021-07-05T17:04:08+02:00",
          "tree_id": "887b992157ad5c79cfd1d56cc0c27a2962c31fe1",
          "url": "https://github.com/simphony/osp-core/commit/b0386e2b1a8159887a1260535ce4f16b927615ee"
        },
        "date": 1625497646700,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 158.18894263214082,
            "unit": "iter/sec",
            "range": "stddev: 0.005919205639568304",
            "extra": "mean: 6.321554360000002 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 125.09148703504852,
            "unit": "iter/sec",
            "range": "stddev: 0.0035351455615890994",
            "extra": "mean: 7.994149112000059 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 118.09425336281993,
            "unit": "iter/sec",
            "range": "stddev: 0.004478495921309633",
            "extra": "mean: 8.467812543999994 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 194.0114568964794,
            "unit": "iter/sec",
            "range": "stddev: 0.0017433982194765643",
            "extra": "mean: 5.154334780000028 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 188.76355456579367,
            "unit": "iter/sec",
            "range": "stddev: 0.0019051628874344197",
            "extra": "mean: 5.297632810000138 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 346.93955298049565,
            "unit": "iter/sec",
            "range": "stddev: 0.0007411301897974653",
            "extra": "mean: 2.8823464820000453 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 10.554712626511307,
            "unit": "iter/sec",
            "range": "stddev: 0.009999292065161378",
            "extra": "mean: 94.74440805599973 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 415.0970804851223,
            "unit": "iter/sec",
            "range": "stddev: 0.051937710220105314",
            "extra": "mean: 2.4090750020002645 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 671.2886348105852,
            "unit": "iter/sec",
            "range": "stddev: 0.03174491770690052",
            "extra": "mean: 1.489672174000333 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 377.65141524497,
            "unit": "iter/sec",
            "range": "stddev: 0.0002675663687070008",
            "extra": "mean: 2.6479445320000536 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 11.231547862168853,
            "unit": "iter/sec",
            "range": "stddev: 0.003396944718138928",
            "extra": "mean: 89.03492308199952 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4859.73379507872,
            "unit": "iter/sec",
            "range": "stddev: 0.00011385010053399216",
            "extra": "mean: 205.7725879990926 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7706.267774254743,
            "unit": "iter/sec",
            "range": "stddev: 0.00002624242043807123",
            "extra": "mean: 129.76450199937517 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 16512.963452611904,
            "unit": "iter/sec",
            "range": "stddev: 0.000016446173085670675",
            "extra": "mean: 60.558481999294145 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10478.016105910869,
            "unit": "iter/sec",
            "range": "stddev: 0.000017632327867855092",
            "extra": "mean: 95.43791399937618 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 275.429167710993,
            "unit": "iter/sec",
            "range": "stddev: 0.0008668556544457871",
            "extra": "mean: 3.6306975340000918 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46421269+MBueschelberger@users.noreply.github.com",
            "name": "MBueschelberger",
            "username": "MBueschelberger"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea9ce17d588ce57ce017ae33689b8dd207b44172",
          "message": "Fetch datatypes from Sparql-Result (#663)\n\nCloses #655. Makes SparqlResult callable, as in `result(specimen='cuds', cycles=float)`, so that for example `next(result(specimen='cuds', cycles=float))['specimen']` returns a CUDS object instead of an rdflib URIRef.\r\n\r\nCo-authored-by: José Manuel Domínguez <jose.manuel.dominguez@iwm.fraunhofer.de>",
          "timestamp": "2021-07-07T17:25:19+02:00",
          "tree_id": "7981ad62a9e2fd62b588168170cfb63763d95153",
          "url": "https://github.com/simphony/osp-core/commit/ea9ce17d588ce57ce017ae33689b8dd207b44172"
        },
        "date": 1625671713022,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 156.84849336416025,
            "unit": "iter/sec",
            "range": "stddev: 0.005071514817528836",
            "extra": "mean: 6.375579252000001 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 121.88287226465093,
            "unit": "iter/sec",
            "range": "stddev: 0.004577347912139084",
            "extra": "mean: 8.204598246000025 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 126.29119026826135,
            "unit": "iter/sec",
            "range": "stddev: 0.003948388620953865",
            "extra": "mean: 7.918208687999936 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 220.89414448071759,
            "unit": "iter/sec",
            "range": "stddev: 0.001483439698932049",
            "extra": "mean: 4.527055266000012 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 276.10540732559815,
            "unit": "iter/sec",
            "range": "stddev: 0.0007526696270558311",
            "extra": "mean: 3.621805200000111 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 388.06854389493134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002821336864100692",
            "extra": "mean: 2.576864360000144 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.072815535962313,
            "unit": "iter/sec",
            "range": "stddev: 0.0068930848915675245",
            "extra": "mean: 90.31126697199984 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 479.3349031116214,
            "unit": "iter/sec",
            "range": "stddev: 0.045131895237755945",
            "extra": "mean: 2.086224044000261 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 705.9631838984319,
            "unit": "iter/sec",
            "range": "stddev: 0.030151727115392078",
            "extra": "mean: 1.416504462000205 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 358.7565945309776,
            "unit": "iter/sec",
            "range": "stddev: 0.0006410500183927101",
            "extra": "mean: 2.787405208000024 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.944394980876831,
            "unit": "iter/sec",
            "range": "stddev: 0.007957629194357174",
            "extra": "mean: 91.37097132799963 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4631.920886496501,
            "unit": "iter/sec",
            "range": "stddev: 0.00011867847168072168",
            "extra": "mean: 215.89315199992143 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7905.783926800219,
            "unit": "iter/sec",
            "range": "stddev: 0.000022826402891281993",
            "extra": "mean: 126.48967000097855 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 15911.061493770649,
            "unit": "iter/sec",
            "range": "stddev: 0.00001977715373329665",
            "extra": "mean: 62.84935800113089 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10559.596079452198,
            "unit": "iter/sec",
            "range": "stddev: 0.00001885439011341449",
            "extra": "mean: 94.7005919995263 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 283.314176233105,
            "unit": "iter/sec",
            "range": "stddev: 0.00038962972769273886",
            "extra": "mean: 3.529650416000436 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6eb231ef61c9de50c094b9fd7ad4daed8bec91c7",
          "message": "662 Strange behaviour of CUDS remove (DataspaceSession) (#668)\n\nAllow the CUDS objects to be initialized with extra triples, instead of having to add them after already having created the object.\r\n\r\nThis solves #668 because previously, the class of the `Wrapper` CUDS objects was not defined on the server until after having spawned the CUDS object, because it is created empty and then filled with triples. This caused it to go to the added buffer, ignoring the changes introduced in #638, which solved the issue for local sessions, for which the CUDS objects are not created first empty and then filled with triples.",
          "timestamp": "2021-07-15T14:58:04+02:00",
          "tree_id": "1c4198451ddd9d450ec5a1e2cc9d7c7f3b3d3946",
          "url": "https://github.com/simphony/osp-core/commit/6eb231ef61c9de50c094b9fd7ad4daed8bec91c7"
        },
        "date": 1626354074505,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 152.74569695545281,
            "unit": "iter/sec",
            "range": "stddev: 0.00521975919250445",
            "extra": "mean: 6.546829272000001 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 120.86411638535168,
            "unit": "iter/sec",
            "range": "stddev: 0.003698239908356882",
            "extra": "mean: 8.273754278000055 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 130.3488595534917,
            "unit": "iter/sec",
            "range": "stddev: 0.0034935096084990802",
            "extra": "mean: 7.671720361999995 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 220.2021016474438,
            "unit": "iter/sec",
            "range": "stddev: 0.0014887780620558655",
            "extra": "mean: 4.5412827239998705 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 281.7731038953337,
            "unit": "iter/sec",
            "range": "stddev: 0.0008026803073201144",
            "extra": "mean: 3.5489547660001506 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 374.1490672576385,
            "unit": "iter/sec",
            "range": "stddev: 0.00048530942532117353",
            "extra": "mean: 2.672731505999991 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.181844808289318,
            "unit": "iter/sec",
            "range": "stddev: 0.007394761622979929",
            "extra": "mean: 89.43068135399989 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 305.637595851815,
            "unit": "iter/sec",
            "range": "stddev: 0.07126502080951806",
            "extra": "mean: 3.271848795999688 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 696.0941246781791,
            "unit": "iter/sec",
            "range": "stddev: 0.03066398286326945",
            "extra": "mean: 1.4365873299998384 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 377.0951608884476,
            "unit": "iter/sec",
            "range": "stddev: 0.0004459884140597834",
            "extra": "mean: 2.651850524000281 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 11.102575243029392,
            "unit": "iter/sec",
            "range": "stddev: 0.006905213809008388",
            "extra": "mean: 90.06919368799927 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4885.948429571923,
            "unit": "iter/sec",
            "range": "stddev: 0.00011967020477803859",
            "extra": "mean: 204.66855400019313 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7789.782923882269,
            "unit": "iter/sec",
            "range": "stddev: 0.000023759625923353347",
            "extra": "mean: 128.3732819991883 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 16065.908784126033,
            "unit": "iter/sec",
            "range": "stddev: 0.00002058089102349749",
            "extra": "mean: 62.24360000027218 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 9492.109494171611,
            "unit": "iter/sec",
            "range": "stddev: 0.00002353572516163188",
            "extra": "mean: 105.35065999965809 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 278.44003905742096,
            "unit": "iter/sec",
            "range": "stddev: 0.0004300808503080159",
            "extra": "mean: 3.591437508000695 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62147380+yoavnash@users.noreply.github.com",
            "name": "nash",
            "username": "yoavnash"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c165f73d678eeacedd0ed041672ab31b4a9d287",
          "message": "Merge pull request #671 from simphony/670-Error_when_installing_ontologies\n\n670 Error when installing ontologies",
          "timestamp": "2021-07-15T16:03:14+02:00",
          "tree_id": "46d9b69a428f710b9de909b34a87973869dd6907",
          "url": "https://github.com/simphony/osp-core/commit/3c165f73d678eeacedd0ed041672ab31b4a9d287"
        },
        "date": 1626357987932,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 162.5683568117639,
            "unit": "iter/sec",
            "range": "stddev: 0.004957349179862163",
            "extra": "mean: 6.151258581999995 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 130.08136609481758,
            "unit": "iter/sec",
            "range": "stddev: 0.003464523641155606",
            "extra": "mean: 7.687496142000002 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 128.35850002479063,
            "unit": "iter/sec",
            "range": "stddev: 0.0037438684762916823",
            "extra": "mean: 7.7906800079999705 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 226.1658246433117,
            "unit": "iter/sec",
            "range": "stddev: 0.0013723848495728384",
            "extra": "mean: 4.421534515999973 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 271.8477738066104,
            "unit": "iter/sec",
            "range": "stddev: 0.000760541865451263",
            "extra": "mean: 3.6785292960000078 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 386.6089733394814,
            "unit": "iter/sec",
            "range": "stddev: 0.00012459215058924913",
            "extra": "mean: 2.586592834000001 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 10.83120109557604,
            "unit": "iter/sec",
            "range": "stddev: 0.010262838511000585",
            "extra": "mean: 92.32586406399987 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 463.9420619948249,
            "unit": "iter/sec",
            "range": "stddev: 0.04668834154613376",
            "extra": "mean: 2.1554415560000564 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 664.344277629031,
            "unit": "iter/sec",
            "range": "stddev: 0.03206498163677857",
            "extra": "mean: 1.5052436419997264 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 375.74924587500107,
            "unit": "iter/sec",
            "range": "stddev: 0.0005309880196445563",
            "extra": "mean: 2.6613493200001415 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.813410023748625,
            "unit": "iter/sec",
            "range": "stddev: 0.008700777938797208",
            "extra": "mean: 92.47776582999998 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 5038.60904724687,
            "unit": "iter/sec",
            "range": "stddev: 0.00011042719162299997",
            "extra": "mean: 198.46747199932224 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7422.145479212839,
            "unit": "iter/sec",
            "range": "stddev: 0.00003167187990054204",
            "extra": "mean: 134.73193200007927 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 14317.800066591708,
            "unit": "iter/sec",
            "range": "stddev: 0.000033797668601327476",
            "extra": "mean: 69.84313199995995 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 9977.79820164692,
            "unit": "iter/sec",
            "range": "stddev: 0.000021918134310753623",
            "extra": "mean: 100.22251200018673 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 285.26366887827487,
            "unit": "iter/sec",
            "range": "stddev: 0.0003895028259267339",
            "extra": "mean: 3.505528775999551 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13626de492eb65e94084a1b867b8df42d4f1e697",
          "message": "649 Name change of files at the client side – prepended with a hash (#664)\n\n* Do not prepend the CUDS uid to files received from the transport session. Only append the CUDS uid when there is a filename conflict.\r\n\r\n* Adjust tests to the new behaviour for filenames.",
          "timestamp": "2021-07-16T08:37:25+02:00",
          "tree_id": "1da556fabcc1a18886f536991b20ab5e14594c91",
          "url": "https://github.com/simphony/osp-core/commit/13626de492eb65e94084a1b867b8df42d4f1e697"
        },
        "date": 1626417636923,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 153.48988215218458,
            "unit": "iter/sec",
            "range": "stddev: 0.0054868273707691425",
            "extra": "mean: 6.515087417999997 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 123.11838656135907,
            "unit": "iter/sec",
            "range": "stddev: 0.0037209376681951395",
            "extra": "mean: 8.122263683999996 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 113.550646653253,
            "unit": "iter/sec",
            "range": "stddev: 0.00466101060393588",
            "extra": "mean: 8.806642933999989 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 216.5092265554157,
            "unit": "iter/sec",
            "range": "stddev: 0.0013222443970320747",
            "extra": "mean: 4.618740807999927 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 278.99677155704586,
            "unit": "iter/sec",
            "range": "stddev: 0.0007683677195800242",
            "extra": "mean: 3.5842708660000824 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 361.5652534403093,
            "unit": "iter/sec",
            "range": "stddev: 0.0005697096907479363",
            "extra": "mean: 2.7657524899999544 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.041699733212553,
            "unit": "iter/sec",
            "range": "stddev: 0.006807932825036957",
            "extra": "mean: 90.56576651800081 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 453.2261765970517,
            "unit": "iter/sec",
            "range": "stddev: 0.04782028900412806",
            "extra": "mean: 2.206403891999969 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 643.7158939766905,
            "unit": "iter/sec",
            "range": "stddev: 0.032926777980397746",
            "extra": "mean: 1.5534803619999025 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 385.650347630262,
            "unit": "iter/sec",
            "range": "stddev: 0.0002181487944718469",
            "extra": "mean: 2.59302242600009 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.750452425189668,
            "unit": "iter/sec",
            "range": "stddev: 0.0094252328828375",
            "extra": "mean: 93.01934099600066 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4588.110163961093,
            "unit": "iter/sec",
            "range": "stddev: 0.00012566949161413023",
            "extra": "mean: 217.954661998931 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7588.713579463814,
            "unit": "iter/sec",
            "range": "stddev: 0.000029559312451473114",
            "extra": "mean: 131.77464000040118 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 14600.281948905897,
            "unit": "iter/sec",
            "range": "stddev: 0.00002280294677336343",
            "extra": "mean: 68.4918280002762 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 9964.283821748151,
            "unit": "iter/sec",
            "range": "stddev: 0.00002606216416436846",
            "extra": "mean: 100.35844200035626 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 269.03797411434044,
            "unit": "iter/sec",
            "range": "stddev: 0.0007903614418217648",
            "extra": "mean: 3.71694740600077 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "118f08a0b8937a52bec186a62ff83679a5b43b60",
          "message": "652 cuba.file in dataspace session shows wrong file path on second load (#667)\n\n* Transport session: set `cuds.path` for CUDS of type `cuba.File` even when the file which the CUDS references is not moved.\r\n\r\n* Add tests for issue #652.",
          "timestamp": "2021-07-16T09:02:02+02:00",
          "tree_id": "c3c52e3442efdfbba502c5bc765cce6b826dedb7",
          "url": "https://github.com/simphony/osp-core/commit/118f08a0b8937a52bec186a62ff83679a5b43b60"
        },
        "date": 1626419116801,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 162.33921410026073,
            "unit": "iter/sec",
            "range": "stddev: 0.005509330778809066",
            "extra": "mean: 6.159941117999991 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 125.54342690105373,
            "unit": "iter/sec",
            "range": "stddev: 0.003651905026838891",
            "extra": "mean: 7.965371223999993 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 117.86515573117128,
            "unit": "iter/sec",
            "range": "stddev: 0.004247257285525154",
            "extra": "mean: 8.48427165599998 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 210.19754647082428,
            "unit": "iter/sec",
            "range": "stddev: 0.0014685602510897324",
            "extra": "mean: 4.757429459999912 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 251.87967207731455,
            "unit": "iter/sec",
            "range": "stddev: 0.0011820467971340057",
            "extra": "mean: 3.970149681999942 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 389.81324254931167,
            "unit": "iter/sec",
            "range": "stddev: 0.00015314521835198635",
            "extra": "mean: 2.5653310119999304 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.091219191633371,
            "unit": "iter/sec",
            "range": "stddev: 0.006489555208925544",
            "extra": "mean: 90.16141352200009 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 459.70527261563564,
            "unit": "iter/sec",
            "range": "stddev: 0.04694137339673279",
            "extra": "mean: 2.1753067879996024 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 696.1411986980119,
            "unit": "iter/sec",
            "range": "stddev: 0.030523233180933775",
            "extra": "mean: 1.436490186000043 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 383.1771183956797,
            "unit": "iter/sec",
            "range": "stddev: 0.00044223775035675785",
            "extra": "mean: 2.6097591739999757 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.81054120362656,
            "unit": "iter/sec",
            "range": "stddev: 0.013251270022467766",
            "extra": "mean: 92.50230688400086 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4715.961816976391,
            "unit": "iter/sec",
            "range": "stddev: 0.00010731813661303256",
            "extra": "mean: 212.045821999709 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7510.941789823366,
            "unit": "iter/sec",
            "range": "stddev: 0.000027404047556753315",
            "extra": "mean: 133.13909599924045 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 16261.732718251087,
            "unit": "iter/sec",
            "range": "stddev: 0.00001556795461030675",
            "extra": "mean: 61.49406199978102 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 8931.453417155286,
            "unit": "iter/sec",
            "range": "stddev: 0.00004026639131158392",
            "extra": "mean: 111.96386000057146 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 281.27892072944735,
            "unit": "iter/sec",
            "range": "stddev: 0.00041209552109768466",
            "extra": "mean: 3.555189978000044 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4306657f3a5b3e1748dedd59743825de3ca9489a",
          "message": "xsd:double support, enforce rdflib >= 5.0.0. (#672)\n\n* Support xsd:double RDF datatype.\r\n\r\n* Enforce rdflib >= 5.0.0.",
          "timestamp": "2021-07-16T09:15:59+02:00",
          "tree_id": "0b50f1ea73fea5c9bb8da1540baf5eff2522afe9",
          "url": "https://github.com/simphony/osp-core/commit/4306657f3a5b3e1748dedd59743825de3ca9489a"
        },
        "date": 1626419952983,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 160.2438787228523,
            "unit": "iter/sec",
            "range": "stddev: 0.005292744541421917",
            "extra": "mean: 6.240487985999995 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 125.08575776356578,
            "unit": "iter/sec",
            "range": "stddev: 0.004260001507049641",
            "extra": "mean: 7.994515265999964 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 121.68474970636873,
            "unit": "iter/sec",
            "range": "stddev: 0.00433726791899278",
            "extra": "mean: 8.217956666000045 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 227.3914047073184,
            "unit": "iter/sec",
            "range": "stddev: 0.001258817631907385",
            "extra": "mean: 4.397703604000014 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 268.4422917348306,
            "unit": "iter/sec",
            "range": "stddev: 0.0009895036640985742",
            "extra": "mean: 3.7251954360001065 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 387.2676115788574,
            "unit": "iter/sec",
            "range": "stddev: 0.0002814292585756592",
            "extra": "mean: 2.5821937339998158 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.008266456354226,
            "unit": "iter/sec",
            "range": "stddev: 0.008079679367988596",
            "extra": "mean: 90.84082438999982 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 406.7120853765672,
            "unit": "iter/sec",
            "range": "stddev: 0.05263475395607304",
            "extra": "mean: 2.458741788000026 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 649.6688647540776,
            "unit": "iter/sec",
            "range": "stddev: 0.03295665650667457",
            "extra": "mean: 1.5392456900001434 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 381.47676312539454,
            "unit": "iter/sec",
            "range": "stddev: 0.000428125651392429",
            "extra": "mean: 2.621391645999921 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 11.064102442669482,
            "unit": "iter/sec",
            "range": "stddev: 0.008488986927705435",
            "extra": "mean: 90.38238801400016 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4403.502711626847,
            "unit": "iter/sec",
            "range": "stddev: 0.00013308298502061311",
            "extra": "mean: 227.09194600008686 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7372.799921476937,
            "unit": "iter/sec",
            "range": "stddev: 0.00004051810200888004",
            "extra": "mean: 135.63368200010473 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 16153.097246366733,
            "unit": "iter/sec",
            "range": "stddev: 0.000017989216370314206",
            "extra": "mean: 61.90763200072525 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10500.790909078432,
            "unit": "iter/sec",
            "range": "stddev: 0.00001897743982117862",
            "extra": "mean: 95.23092199992789 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 278.06534043983714,
            "unit": "iter/sec",
            "range": "stddev: 0.0008244805268324559",
            "extra": "mean: 3.596277042001077 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c39b2991ac78c972e92d1b1f2cddf256f26a9b4",
          "message": "Bump package version to 3.5.4 (#673)",
          "timestamp": "2021-07-16T09:32:45+02:00",
          "tree_id": "45a6fd99afdb0d8abcfff697529960ca63d0b56d",
          "url": "https://github.com/simphony/osp-core/commit/3c39b2991ac78c972e92d1b1f2cddf256f26a9b4"
        },
        "date": 1626420952193,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 151.11869464213189,
            "unit": "iter/sec",
            "range": "stddev: 0.005450376118842454",
            "extra": "mean: 6.617314967999995 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 122.84885433760289,
            "unit": "iter/sec",
            "range": "stddev: 0.004116303172412003",
            "extra": "mean: 8.140084052000063 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 123.59225040362689,
            "unit": "iter/sec",
            "range": "stddev: 0.0037404346577319465",
            "extra": "mean: 8.091122191999947 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 223.64927386714933,
            "unit": "iter/sec",
            "range": "stddev: 0.0012784205531511609",
            "extra": "mean: 4.471286593999913 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 275.3590921987065,
            "unit": "iter/sec",
            "range": "stddev: 0.0008376837193723415",
            "extra": "mean: 3.6316215019999163 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 383.95133664377545,
            "unit": "iter/sec",
            "range": "stddev: 0.0002917564626098997",
            "extra": "mean: 2.604496728000157 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.498430496018909,
            "unit": "iter/sec",
            "range": "stddev: 0.003695665993463327",
            "extra": "mean: 86.96839106400036 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 441.94260578165944,
            "unit": "iter/sec",
            "range": "stddev: 0.049142782331735024",
            "extra": "mean: 2.262737258000527 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 686.7588687146332,
            "unit": "iter/sec",
            "range": "stddev: 0.030986490573097027",
            "extra": "mean: 1.4561151600002518 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 374.280607968956,
            "unit": "iter/sec",
            "range": "stddev: 0.00040841185789279523",
            "extra": "mean: 2.6717921760000536 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 11.356012529659454,
            "unit": "iter/sec",
            "range": "stddev: 0.005783626072067402",
            "extra": "mean: 88.05907860599976 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 5086.875646158473,
            "unit": "iter/sec",
            "range": "stddev: 0.00010046185312027355",
            "extra": "mean: 196.5843220003194 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7876.928226711322,
            "unit": "iter/sec",
            "range": "stddev: 0.000022142894621005026",
            "extra": "mean: 126.95304200042301 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 16768.623249537606,
            "unit": "iter/sec",
            "range": "stddev: 0.000015927191341929177",
            "extra": "mean: 59.635188000754624 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10250.259049612221,
            "unit": "iter/sec",
            "range": "stddev: 0.000024632471207764672",
            "extra": "mean: 97.55851000056737 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 282.58796467967363,
            "unit": "iter/sec",
            "range": "stddev: 0.0005389700199927683",
            "extra": "mean: 3.538721123999551 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce16cb8be7a39d5289a79fa5c8148192d049f169",
          "message": "Merge branch 'master' into dev",
          "timestamp": "2021-07-16T09:37:44+02:00",
          "tree_id": "45a6fd99afdb0d8abcfff697529960ca63d0b56d",
          "url": "https://github.com/simphony/osp-core/commit/ce16cb8be7a39d5289a79fa5c8148192d049f169"
        },
        "date": 1626421373614,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 153.4810940109784,
            "unit": "iter/sec",
            "range": "stddev: 0.005499067083623204",
            "extra": "mean: 6.51546046400002 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 118.71690549155915,
            "unit": "iter/sec",
            "range": "stddev: 0.0038032919827539666",
            "extra": "mean: 8.423400153999976 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 123.10874358858862,
            "unit": "iter/sec",
            "range": "stddev: 0.0036321469130540366",
            "extra": "mean: 8.122899891999982 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 219.55290425732719,
            "unit": "iter/sec",
            "range": "stddev: 0.0012968601180570187",
            "extra": "mean: 4.5547108719998946 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 265.81640066735133,
            "unit": "iter/sec",
            "range": "stddev: 0.0008783664351788409",
            "extra": "mean: 3.7619951119999655 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 377.6005219562938,
            "unit": "iter/sec",
            "range": "stddev: 0.0002681232361132372",
            "extra": "mean: 2.6483014240000102 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 10.48206325983641,
            "unit": "iter/sec",
            "range": "stddev: 0.010154817205381274",
            "extra": "mean: 95.40106515399971 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 416.29830303171286,
            "unit": "iter/sec",
            "range": "stddev: 0.05204530109428509",
            "extra": "mean: 2.4021236520001423 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 648.5359635267524,
            "unit": "iter/sec",
            "range": "stddev: 0.03283501469380578",
            "extra": "mean: 1.5419345360000989 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 362.2708756532968,
            "unit": "iter/sec",
            "range": "stddev: 0.0004731433903029255",
            "extra": "mean: 2.7603654259997086 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.667842636157427,
            "unit": "iter/sec",
            "range": "stddev: 0.005516108621118718",
            "extra": "mean: 93.73966546999998 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4481.535464399201,
            "unit": "iter/sec",
            "range": "stddev: 0.00012698044484805835",
            "extra": "mean: 223.1378079999331 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 6537.000383085306,
            "unit": "iter/sec",
            "range": "stddev: 0.00005041085213666513",
            "extra": "mean: 152.9753620005181 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 15373.117711736999,
            "unit": "iter/sec",
            "range": "stddev: 0.000017072077495943997",
            "extra": "mean: 65.04861399952233 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 9710.707912129763,
            "unit": "iter/sec",
            "range": "stddev: 0.00002810567284275061",
            "extra": "mean: 102.97910400032606 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 264.9987308760291,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740070430639183",
            "extra": "mean: 3.7736029779999853 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8239dfbf66477cdac06efec239bf68adcca115",
          "message": "Merge pull request #674 from simphony/dev\n\nMerge sprint 4.",
          "timestamp": "2021-07-16T12:01:38+02:00",
          "tree_id": "45a6fd99afdb0d8abcfff697529960ca63d0b56d",
          "url": "https://github.com/simphony/osp-core/commit/5e8239dfbf66477cdac06efec239bf68adcca115"
        },
        "date": 1626429891606,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 160.15366844423082,
            "unit": "iter/sec",
            "range": "stddev: 0.005602310860625093",
            "extra": "mean: 6.244003086000012 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 131.0498503925347,
            "unit": "iter/sec",
            "range": "stddev: 0.0032424538010184406",
            "extra": "mean: 7.630684025999967 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 124.63163599475774,
            "unit": "iter/sec",
            "range": "stddev: 0.0038104358953398067",
            "extra": "mean: 8.02364497600001 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 233.8979668143711,
            "unit": "iter/sec",
            "range": "stddev: 0.0011238342604571274",
            "extra": "mean: 4.275368501999985 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 287.7971012937707,
            "unit": "iter/sec",
            "range": "stddev: 0.0007020632271803908",
            "extra": "mean: 3.47467016000013 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 367.90937144232,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526189866373446",
            "extra": "mean: 2.7180606900000583 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 10.69473338194705,
            "unit": "iter/sec",
            "range": "stddev: 0.009392184707566642",
            "extra": "mean: 93.50396725999944 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 469.86315706354884,
            "unit": "iter/sec",
            "range": "stddev: 0.046070933698467556",
            "extra": "mean: 2.1282792339999332 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 674.4851137459704,
            "unit": "iter/sec",
            "range": "stddev: 0.031555962577962324",
            "extra": "mean: 1.4826124099999447 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 389.3045340704626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002645475192114304",
            "extra": "mean: 2.5686831580004252 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 11.080297429135687,
            "unit": "iter/sec",
            "range": "stddev: 0.00597619964717066",
            "extra": "mean: 90.25028492200002 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4707.310362613071,
            "unit": "iter/sec",
            "range": "stddev: 0.00011768728232864519",
            "extra": "mean: 212.43553599998677 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7076.050532413564,
            "unit": "iter/sec",
            "range": "stddev: 0.000029348611088309462",
            "extra": "mean: 141.3217719996851 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 15206.956489275886,
            "unit": "iter/sec",
            "range": "stddev: 0.000011884720274734438",
            "extra": "mean: 65.75937799948406 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 9423.987240332774,
            "unit": "iter/sec",
            "range": "stddev: 0.000022755662670716672",
            "extra": "mean: 106.11219800046001 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 265.0140929167836,
            "unit": "iter/sec",
            "range": "stddev: 0.000860835119441595",
            "extra": "mean: 3.773384233999991 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "53036503+create-issue-branch[bot]@users.noreply.github.com",
            "name": "create-issue-branch[bot]",
            "username": "create-issue-branch[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3251c7101c0c9390227aaaea0457c453f394f30f",
          "message": "Regression: Ontology2dot broken (#676)\n\n* Fix ontology2dot not working.\r\n\r\nAuthored-by: kysrpex <kysrpex@users.noreply.github.com>\r\nAuthored-by: José Manuel Domínguez <jose.manuel.dominguez@iwm.fraunhofer.de>",
          "timestamp": "2021-07-19T18:01:02+02:00",
          "tree_id": "2423445321b15bb2220d7cc9406ceea810400d30",
          "url": "https://github.com/simphony/osp-core/commit/3251c7101c0c9390227aaaea0457c453f394f30f"
        },
        "date": 1626710661850,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 156.2939188842576,
            "unit": "iter/sec",
            "range": "stddev: 0.005278377284528918",
            "extra": "mean: 6.398201587999998 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 125.32342944312212,
            "unit": "iter/sec",
            "range": "stddev: 0.00380589241006783",
            "extra": "mean: 7.979353936000041 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 115.47061962528923,
            "unit": "iter/sec",
            "range": "stddev: 0.004509515490793039",
            "extra": "mean: 8.660211604 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 203.02685197249113,
            "unit": "iter/sec",
            "range": "stddev: 0.0017869831841988016",
            "extra": "mean: 4.9254568559999825 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 273.01130197118397,
            "unit": "iter/sec",
            "range": "stddev: 0.0008862334334838569",
            "extra": "mean: 3.6628520239999034 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 357.54202472089526,
            "unit": "iter/sec",
            "range": "stddev: 0.0006116032109101097",
            "extra": "mean: 2.7968740199998052 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 10.55255955365623,
            "unit": "iter/sec",
            "range": "stddev: 0.011177333964260577",
            "extra": "mean: 94.76373906400006 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 462.6078750099229,
            "unit": "iter/sec",
            "range": "stddev: 0.04680724488258578",
            "extra": "mean: 2.1616579700000784 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 666.8511532609849,
            "unit": "iter/sec",
            "range": "stddev: 0.031899644255102715",
            "extra": "mean: 1.4995850200001541 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 386.2302232803469,
            "unit": "iter/sec",
            "range": "stddev: 0.000292819322537033",
            "extra": "mean: 2.5891293319998567 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.933781326701048,
            "unit": "iter/sec",
            "range": "stddev: 0.0061196229701508415",
            "extra": "mean: 91.45966707400038 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4886.910775984781,
            "unit": "iter/sec",
            "range": "stddev: 0.0001090727556325959",
            "extra": "mean: 204.6282500008374 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 6935.221659191052,
            "unit": "iter/sec",
            "range": "stddev: 0.000046987321814664715",
            "extra": "mean: 144.19149799988418 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 16247.989026825095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000152410890749878",
            "extra": "mean: 61.546078000731086 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10490.203429781002,
            "unit": "iter/sec",
            "range": "stddev: 0.000016841462121873957",
            "extra": "mean: 95.32703600018522 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 273.2798954064695,
            "unit": "iter/sec",
            "range": "stddev: 0.00047639451760281135",
            "extra": "mean: 3.6592519860000152 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "53036503+create-issue-branch[bot]@users.noreply.github.com",
            "name": "create-issue-branch[bot]",
            "username": "create-issue-branch[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa6ebcd8b7f7b38b557d44cbeef40c98a11c722c",
          "message": "OSP-core incompatible with RDFLib 6.0.0 (#678)\n\n* Enforce `rdflib` < 6.0.0.\r\n\r\nAuthored-by: kysrpex <kysrpex@users.noreply.github.com>\r\nAuthored-by: José Manuel Domínguez <jose.manuel.dominguez@iwm.fraunhofer.de>",
          "timestamp": "2021-07-21T15:21:48+02:00",
          "tree_id": "45c9a63b49c6592373287458baf78cbaeea58f9f",
          "url": "https://github.com/simphony/osp-core/commit/fa6ebcd8b7f7b38b557d44cbeef40c98a11c722c"
        },
        "date": 1626873902037,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 156.24354523736375,
            "unit": "iter/sec",
            "range": "stddev: 0.005269342076216083",
            "extra": "mean: 6.400264397999989 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 124.26803227332425,
            "unit": "iter/sec",
            "range": "stddev: 0.0035345768519101273",
            "extra": "mean: 8.047121868000021 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 128.22427471958602,
            "unit": "iter/sec",
            "range": "stddev: 0.0035303184051666465",
            "extra": "mean: 7.798835299999961 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 223.42319727567445,
            "unit": "iter/sec",
            "range": "stddev: 0.0013519868665882384",
            "extra": "mean: 4.475810981999928 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 280.4841441973788,
            "unit": "iter/sec",
            "range": "stddev: 0.0007789872579310362",
            "extra": "mean: 3.565263922000142 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 345.695279212015,
            "unit": "iter/sec",
            "range": "stddev: 0.0007136685316580123",
            "extra": "mean: 2.892721018000074 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.10455353072455,
            "unit": "iter/sec",
            "range": "stddev: 0.006041814326220446",
            "extra": "mean: 90.05314776799963 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 416.88834774046336,
            "unit": "iter/sec",
            "range": "stddev: 0.05206233168991246",
            "extra": "mean: 2.3987237959995866 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 705.4166557866728,
            "unit": "iter/sec",
            "range": "stddev: 0.030150293742193662",
            "extra": "mean: 1.4176019120002366 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 381.62971335976243,
            "unit": "iter/sec",
            "range": "stddev: 0.00031740527735648493",
            "extra": "mean: 2.6203410399999427 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 10.737839159496556,
            "unit": "iter/sec",
            "range": "stddev: 0.010235971386528531",
            "extra": "mean: 93.12860671000078 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4647.938072879726,
            "unit": "iter/sec",
            "range": "stddev: 0.00011269351811479643",
            "extra": "mean: 215.14916600006018 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7568.67089161526,
            "unit": "iter/sec",
            "range": "stddev: 0.000021146083464503304",
            "extra": "mean: 132.12359399955176 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 15743.51224046129,
            "unit": "iter/sec",
            "range": "stddev: 0.000019695394561980616",
            "extra": "mean: 63.51822799933871 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10117.004164909999,
            "unit": "iter/sec",
            "range": "stddev: 0.000019897327470944356",
            "extra": "mean: 98.84348999958092 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 282.26569188149045,
            "unit": "iter/sec",
            "range": "stddev: 0.00040665380381009545",
            "extra": "mean: 3.5427614079994214 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43052541+kysrpex@users.noreply.github.com",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c15fdba15574256eea4a7eaa06faa0c8e447af2",
          "message": "Merge hotfix PRs #676, #678 (#681)\n\n* Regression: Ontology2dot broken (#676)\r\nAuthored-by: kysrpex <kysrpex@users.noreply.github.com>\r\nAuthored-by: José Manuel Domínguez <jose.manuel.dominguez@iwm.fraunhofer.de>\r\n(cherry picked from commit 3251c7101c0c9390227aaaea0457c453f394f30f)\r\n\r\n* OSP-core incompatible with RDFLib 6.0.0 (#678)\r\nAuthored-by: kysrpex <kysrpex@users.noreply.github.com>\r\nAuthored-by: José Manuel Domínguez <jose.manuel.dominguez@iwm.fraunhofer.de>\r\n(cherry picked from commit fa6ebcd8b7f7b38b557d44cbeef40c98a11c722c)\r\n\r\n* Bump OSP-core version to 3.5.5 in hotfix branch for bugfix release.\r\n\r\nAuthored-by: kysrpex <kysrpex@users.noreply.github.com>\r\nAuthored-by: José Manuel Domínguez <jose.manuel.dominguez@iwm.fraunhofer.de>",
          "timestamp": "2021-07-27T09:52:29+02:00",
          "tree_id": "21e4adb4a817183500a60a1197e08afe63f1e44c",
          "url": "https://github.com/simphony/osp-core/commit/1c15fdba15574256eea4a7eaa06faa0c8e447af2"
        },
        "date": 1627372537783,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 157.98621773041413,
            "unit": "iter/sec",
            "range": "stddev: 0.0055213398480286535",
            "extra": "mean: 6.329666057999998 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 129.00605318977657,
            "unit": "iter/sec",
            "range": "stddev: 0.0034422878001060604",
            "extra": "mean: 7.751574249999981 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 126.77488827485709,
            "unit": "iter/sec",
            "range": "stddev: 0.003715060375724768",
            "extra": "mean: 7.887997485999972 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 228.9071534822306,
            "unit": "iter/sec",
            "range": "stddev: 0.001220915527117433",
            "extra": "mean: 4.368583439999952 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 281.073843608885,
            "unit": "iter/sec",
            "range": "stddev: 0.0007278534428520906",
            "extra": "mean: 3.5577839160000337 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 397.0283864107852,
            "unit": "iter/sec",
            "range": "stddev: 0.00009330615358266413",
            "extra": "mean: 2.5187115940001092 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.10968225488144,
            "unit": "iter/sec",
            "range": "stddev: 0.007626917595635051",
            "extra": "mean: 90.01157522400013 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 461.76875712636934,
            "unit": "iter/sec",
            "range": "stddev: 0.047008171503374795",
            "extra": "mean: 2.1655860959998563 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 636.6035163235924,
            "unit": "iter/sec",
            "range": "stddev: 0.03366531247634316",
            "extra": "mean: 1.570836437999958 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 399.4790837489851,
            "unit": "iter/sec",
            "range": "stddev: 0.00026190649890868635",
            "extra": "mean: 2.5032599719998245 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 11.545245883733722,
            "unit": "iter/sec",
            "range": "stddev: 0.004110488813229428",
            "extra": "mean: 86.61573863999863 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 5065.925831097823,
            "unit": "iter/sec",
            "range": "stddev: 0.00010507966705936245",
            "extra": "mean: 197.39728399918022 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 8011.198886939597,
            "unit": "iter/sec",
            "range": "stddev: 0.00002066648645543596",
            "extra": "mean: 124.82526200045642 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 15963.206978916169,
            "unit": "iter/sec",
            "range": "stddev: 0.00002546970670443302",
            "extra": "mean: 62.64405399997485 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 10344.706731432208,
            "unit": "iter/sec",
            "range": "stddev: 0.000020166755921326365",
            "extra": "mean: 96.66779600058817 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 294.67709064864954,
            "unit": "iter/sec",
            "range": "stddev: 0.00035136927352268484",
            "extra": "mean: 3.3935451100008436 msec\nrounds: 500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jose.manuel.dominguez@iwm.fraunhofer.de",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "committer": {
            "email": "jose.manuel.dominguez@iwm.fraunhofer.de",
            "name": "José Manuel Domínguez",
            "username": "kysrpex"
          },
          "distinct": true,
          "id": "26eec531126eba9d881a5f1d8e30da7ec5632a92",
          "message": "* Regression: Ontology2dot broken (#676)\nAuthored-by: kysrpex <kysrpex@users.noreply.github.com>\nAuthored-by: José Manuel Domínguez <jose.manuel.dominguez@iwm.fraunhofer.de>\n(cherry picked from commit 3251c71)\n\n* OSP-core incompatible with RDFLib 6.0.0 (#678)\nAuthored-by: kysrpex <kysrpex@users.noreply.github.com>\nAuthored-by: José Manuel Domínguez <jose.manuel.dominguez@iwm.fraunhofer.de>\n(cherry picked from commit fa6ebcd)\n\n* Bump OSP-core version to 3.5.5 in hotfix branch for bugfix release.\n\nAuthored-by: kysrpex <kysrpex@users.noreply.github.com>\nAuthored-by: José Manuel Domínguez <jose.manuel.dominguez@iwm.fraunhofer.de>",
          "timestamp": "2021-07-27T10:12:15+02:00",
          "tree_id": "21e4adb4a817183500a60a1197e08afe63f1e44c",
          "url": "https://github.com/simphony/osp-core/commit/26eec531126eba9d881a5f1d8e30da7ec5632a92"
        },
        "date": 1627373797223,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_create",
            "value": 161.88244784314256,
            "unit": "iter/sec",
            "range": "stddev: 0.0050717160420705246",
            "extra": "mean: 6.177321960000005 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_add_default",
            "value": 129.07523005658496,
            "unit": "iter/sec",
            "range": "stddev: 0.003418446569156634",
            "extra": "mean: 7.74741985399997 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_add_rel",
            "value": 128.85726809874933,
            "unit": "iter/sec",
            "range": "stddev: 0.003710178190671015",
            "extra": "mean: 7.7605246080000185 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_get_byuiduuid",
            "value": 222.5218249149982,
            "unit": "iter/sec",
            "range": "stddev: 0.00142819045615538",
            "extra": "mean: 4.493941213999989 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byuiduriref",
            "value": 279.1756600942015,
            "unit": "iter/sec",
            "range": "stddev: 0.0008010725265271548",
            "extra": "mean: 3.581974157999923 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byrel",
            "value": 384.90508787095854,
            "unit": "iter/sec",
            "range": "stddev: 0.0003028410808545624",
            "extra": "mean: 2.598043080000167 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_get_byoclass",
            "value": 11.052066572756944,
            "unit": "iter/sec",
            "range": "stddev: 0.007975829490631513",
            "extra": "mean: 90.48081582000003 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduuid",
            "value": 462.7308370377746,
            "unit": "iter/sec",
            "range": "stddev: 0.04682773856381262",
            "extra": "mean: 2.1610835499998586 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byuiduriref",
            "value": 646.7064639908809,
            "unit": "iter/sec",
            "range": "stddev: 0.03288793549274114",
            "extra": "mean: 1.546296589999912 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iter_byrel",
            "value": 382.7865851926917,
            "unit": "iter/sec",
            "range": "stddev: 0.0005048686223529013",
            "extra": "mean: 2.612421747999889 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_iter_byoclass",
            "value": 11.151375683635743,
            "unit": "iter/sec",
            "range": "stddev: 0.008703356931409832",
            "extra": "mean: 89.67503457599992 msec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_is_a",
            "value": 4993.187694163713,
            "unit": "iter/sec",
            "range": "stddev: 0.00010848208197533271",
            "extra": "mean: 200.2728640000555 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_oclass",
            "value": 7695.913997609079,
            "unit": "iter/sec",
            "range": "stddev: 0.00002243748532642724",
            "extra": "mean: 129.9390819999644 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_uid",
            "value": 15605.056250508464,
            "unit": "iter/sec",
            "range": "stddev: 0.00001780974643665101",
            "extra": "mean: 64.08179399977598 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_iri",
            "value": 8445.49071683324,
            "unit": "iter/sec",
            "range": "stddev: 0.00005418454614469012",
            "extra": "mean: 118.40638200061449 usec\nrounds: 500"
          },
          {
            "name": "benchmark_cuds_api.py::benchmark_cuds_attributes",
            "value": 293.9532372841078,
            "unit": "iter/sec",
            "range": "stddev: 0.00026835642555208205",
            "extra": "mean: 3.4019016399996076 msec\nrounds: 500"
          }
        ]
      }
    ]
  }
}