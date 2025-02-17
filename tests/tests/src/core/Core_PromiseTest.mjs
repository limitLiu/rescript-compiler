// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";
import * as Stdlib_Exn from "rescript/lib/es6/Stdlib_Exn.js";
import * as Stdlib_Promise from "rescript/lib/es6/Stdlib_Promise.js";
import * as Primitive_object from "rescript/lib/es6/Primitive_object.js";
import * as Primitive_exceptions from "rescript/lib/es6/Primitive_exceptions.js";

let TestError = /* @__PURE__ */Primitive_exceptions.create("Core_PromiseTest.TestError");

let fail = Stdlib_Exn.raiseError;

let equal = Primitive_object.equal;

function resolveTest() {
  Promise.resolve("test").then(str => {
    Test.run([
      [
        "Core_PromiseTest.res",
        17,
        26,
        47
      ],
      "Should resolve test"
    ], str, equal, "test");
    return Promise.resolve();
  });
}

function runTests() {
  resolveTest();
}

let Creation = {
  resolveTest: resolveTest,
  runTests: runTests
};

function testThen() {
  return Promise.resolve(1).then(first => Promise.resolve(first + 1 | 0)).then(value => {
    Test.run([
      [
        "Core_PromiseTest.res",
        39,
        26,
        39
      ],
      "Should be 2"
    ], value, equal, 2);
    return Promise.resolve();
  });
}

function testInvalidThen() {
  return Promise.resolve(1).then(first => Promise.resolve(Promise.resolve(first + 1 | 0))).then(p => {
    let isPromise = typeof p === "object";
    Test.run([
      [
        "Core_PromiseTest.res",
        54,
        26,
        51
      ],
      "Should not be a promise"
    ], isPromise, equal, false);
    return Promise.resolve();
  });
}

function testThenResolve() {
  return Promise.resolve(1).then(num => num + 1 | 0).then(ret => Test.run([
    [
      "Core_PromiseTest.res",
      67,
      26,
      39
    ],
    "Should be 2"
  ], ret, equal, 2));
}

function testInvalidThenResolve() {
  return Promise.resolve(1).then(num => Promise.resolve(num)).then(p => {
    let isPromise = typeof p === "object";
    Test.run([
      [
        "Core_PromiseTest.res",
        81,
        26,
        51
      ],
      "Should not be a promise"
    ], isPromise, equal, false);
    return Promise.resolve();
  });
}

function runTests$1() {
  testThen();
  testInvalidThen();
  testThenResolve();
  testInvalidThenResolve();
}

let ThenChaining = {
  testThen: testThen,
  testInvalidThen: testInvalidThen,
  testThenResolve: testThenResolve,
  testInvalidThenResolve: testInvalidThenResolve,
  runTests: runTests$1
};

function testExnRejection() {
  Stdlib_Promise.$$catch(Promise.reject({
    RE_EXN_ID: TestError,
    _1: "oops"
  }), e => {
    Test.run([
      [
        "Core_PromiseTest.res",
        103,
        26,
        30
      ],
      "Expect rejection to contain a TestError"
    ], e, equal, {
      RE_EXN_ID: TestError,
      _1: "oops"
    });
    return Promise.resolve();
  });
}

function runTests$2() {
  testExnRejection();
}

let Rejection = {
  testExnRejection: testExnRejection,
  runTests: runTests$2
};

let asyncParseFail = (function() {
    return new Promise((resolve) => {
      var result = JSON.parse("{..");
      return resolve(result);
    })
  });

function testExternalPromiseThrow() {
  return Stdlib_Promise.$$catch(asyncParseFail().then(param => Promise.resolve()), e => {
    let success = e.RE_EXN_ID === Stdlib_Exn.$$Error ? Primitive_object.equal(e._1.name, "SyntaxError") : false;
    Test.run([
      [
        "Core_PromiseTest.res",
        137,
        26,
        76
      ],
      "Should be a parser error with Unexpected token ."
    ], success, equal, true);
    return Promise.resolve();
  });
}

function testExnThrow() {
  return Stdlib_Promise.$$catch(Promise.resolve().then(() => {
    throw {
      RE_EXN_ID: TestError,
      _1: "Thrown exn",
      Error: new Error()
    };
  }), e => {
    let isTestErr = e.RE_EXN_ID === TestError ? e._1 === "Thrown exn" : false;
    Test.run([
      [
        "Core_PromiseTest.res",
        156,
        26,
        49
      ],
      "Should be a TestError"
    ], isTestErr, equal, true);
    return Promise.resolve();
  });
}

function testRaiseErrorThrow() {
  return Stdlib_Promise.$$catch(Promise.resolve().then(() => Stdlib_Exn.raiseError("Some JS error")), e => {
    let isTestErr = e.RE_EXN_ID === Stdlib_Exn.$$Error ? Primitive_object.equal(e._1.message, "Some JS error") : false;
    Test.run([
      [
        "Core_PromiseTest.res",
        179,
        26,
        51
      ],
      "Should be some JS error"
    ], isTestErr, equal, true);
    return Promise.resolve();
  });
}

function thenAfterCatch() {
  return Stdlib_Promise.$$catch(Promise.resolve().then(() => Promise.reject({
    RE_EXN_ID: TestError,
    _1: "some rejected value"
  })), e => {
    let tmp;
    tmp = e.RE_EXN_ID === TestError && e._1 === "some rejected value" ? "success" : "not a test error";
    return Promise.resolve(tmp);
  }).then(msg => {
    Test.run([
      [
        "Core_PromiseTest.res",
        202,
        26,
        45
      ],
      "Should be success"
    ], msg, equal, "success");
    return Promise.resolve();
  });
}

function testCatchFinally() {
  let wasCalled = {
    contents: false
  };
  Stdlib_Promise.$$catch(Promise.resolve(5).then(param => Promise.reject({
    RE_EXN_ID: TestError,
    _1: "test"
  })).then(v => Promise.resolve(v)), param => Promise.resolve()).finally(() => {
    wasCalled.contents = true;
  }).then(v => {
    Test.run([
      [
        "Core_PromiseTest.res",
        224,
        26,
        48
      ],
      "value should be unit"
    ], v, equal, undefined);
    Test.run([
      [
        "Core_PromiseTest.res",
        225,
        26,
        59
      ],
      "finally should have been called"
    ], wasCalled.contents, equal, true);
    return Promise.resolve();
  });
}

function testResolveFinally() {
  let wasCalled = {
    contents: false
  };
  Promise.resolve(5).then(v => Promise.resolve(v + 5 | 0)).finally(() => {
    wasCalled.contents = true;
  }).then(v => {
    Test.run([
      [
        "Core_PromiseTest.res",
        242,
        26,
        45
      ],
      "value should be 5"
    ], v, equal, 10);
    Test.run([
      [
        "Core_PromiseTest.res",
        243,
        26,
        59
      ],
      "finally should have been called"
    ], wasCalled.contents, equal, true);
    return Promise.resolve();
  });
}

function runTests$3() {
  testExternalPromiseThrow();
  testExnThrow();
  testRaiseErrorThrow();
  thenAfterCatch();
  testCatchFinally();
  testResolveFinally();
}

let Catching = {
  asyncParseFail: asyncParseFail,
  testExternalPromiseThrow: testExternalPromiseThrow,
  testExnThrow: testExnThrow,
  testRaiseErrorThrow: testRaiseErrorThrow,
  thenAfterCatch: thenAfterCatch,
  testCatchFinally: testCatchFinally,
  testResolveFinally: testResolveFinally,
  runTests: runTests$3
};

function testParallel() {
  let place = {
    contents: 0
  };
  let delayedMsg = (ms, msg) => new Promise((resolve, param) => {
    setTimeout(() => {
      place.contents = place.contents + 1 | 0;
      resolve([
        place.contents,
        msg
      ]);
    }, ms);
  });
  let p1 = delayedMsg(1000, "is Anna");
  let p2 = delayedMsg(500, "myName");
  let p3 = delayedMsg(100, "Hi");
  return Promise.all([
    p1,
    p2,
    p3
  ]).then(arr => {
    let exp = [
      [
        3,
        "is Anna"
      ],
      [
        2,
        "myName"
      ],
      [
        1,
        "Hi"
      ]
    ];
    Test.run([
      [
        "Core_PromiseTest.res",
        280,
        26,
        55
      ],
      "Should have correct placing"
    ], arr, equal, exp);
    return Promise.resolve();
  });
}

function testRace() {
  let racer = (ms, name) => new Promise((resolve, param) => {
    setTimeout(() => resolve(name), ms);
  });
  let promises = [
    racer(1000, "Turtle"),
    racer(500, "Hare"),
    racer(100, "Eagle")
  ];
  return Promise.race(promises).then(winner => {
    Test.run([
      [
        "Core_PromiseTest.res",
        299,
        26,
        44
      ],
      "Eagle should win"
    ], winner, equal, "Eagle");
    return Promise.resolve();
  });
}

function testParallel2() {
  let place = {
    contents: 0
  };
  let delayedMsg = (ms, msg) => new Promise((resolve, param) => {
    setTimeout(() => {
      place.contents = place.contents + 1 | 0;
      resolve([
        place.contents,
        msg
      ]);
    }, ms);
  });
  let p1 = delayedMsg(1000, "is Anna");
  let p2 = delayedMsg(500, "myName");
  return Promise.all([
    p1,
    p2
  ]).then(arr => {
    Test.run([
      [
        "Core_PromiseTest.res",
        323,
        26,
        55
      ],
      "Should have correct placing"
    ], arr, equal, [
      [
        2,
        "is Anna"
      ],
      [
        1,
        "myName"
      ]
    ]);
    return Promise.resolve();
  });
}

function testParallel3() {
  let place = {
    contents: 0
  };
  let delayedMsg = (ms, msg) => new Promise((resolve, param) => {
    setTimeout(() => {
      place.contents = place.contents + 1 | 0;
      resolve([
        place.contents,
        msg
      ]);
    }, ms);
  });
  let p1 = delayedMsg(1000, "is Anna");
  let p2 = delayedMsg(500, "myName");
  let p3 = delayedMsg(100, "Hi");
  return Promise.all([
    p1,
    p2,
    p3
  ]).then(arr => {
    Test.run([
      [
        "Core_PromiseTest.res",
        348,
        26,
        55
      ],
      "Should have correct placing"
    ], arr, equal, [
      [
        3,
        "is Anna"
      ],
      [
        2,
        "myName"
      ],
      [
        1,
        "Hi"
      ]
    ]);
    return Promise.resolve();
  });
}

function testParallel4() {
  let place = {
    contents: 0
  };
  let delayedMsg = (ms, msg) => new Promise((resolve, param) => {
    setTimeout(() => {
      place.contents = place.contents + 1 | 0;
      resolve([
        place.contents,
        msg
      ]);
    }, ms);
  });
  let p1 = delayedMsg(1500, "Anna");
  let p2 = delayedMsg(1000, "is");
  let p3 = delayedMsg(500, "my name");
  let p4 = delayedMsg(100, "Hi");
  return Promise.all([
    p1,
    p2,
    p3,
    p4
  ]).then(arr => {
    Test.run([
      [
        "Core_PromiseTest.res",
        374,
        26,
        55
      ],
      "Should have correct placing"
    ], arr, equal, [
      [
        4,
        "Anna"
      ],
      [
        3,
        "is"
      ],
      [
        2,
        "my name"
      ],
      [
        1,
        "Hi"
      ]
    ]);
    return Promise.resolve();
  });
}

function testParallel5() {
  let place = {
    contents: 0
  };
  let delayedMsg = (ms, msg) => new Promise((resolve, param) => {
    setTimeout(() => {
      place.contents = place.contents + 1 | 0;
      resolve([
        place.contents,
        msg
      ]);
    }, ms);
  });
  let p1 = delayedMsg(1500, "Anna");
  let p2 = delayedMsg(1000, "is");
  let p3 = delayedMsg(500, "name");
  let p4 = delayedMsg(100, "my");
  let p5 = delayedMsg(50, "Hi");
  return Promise.all([
    p1,
    p2,
    p3,
    p4,
    p5
  ]).then(arr => {
    Test.run([
      [
        "Core_PromiseTest.res",
        401,
        26,
        55
      ],
      "Should have correct placing"
    ], arr, equal, [
      [
        5,
        "Anna"
      ],
      [
        4,
        "is"
      ],
      [
        3,
        "name"
      ],
      [
        2,
        "my"
      ],
      [
        1,
        "Hi"
      ]
    ]);
    return Promise.resolve();
  });
}

function testParallel6() {
  let place = {
    contents: 0
  };
  let delayedMsg = (ms, msg) => new Promise((resolve, param) => {
    setTimeout(() => {
      place.contents = place.contents + 1 | 0;
      resolve([
        place.contents,
        msg
      ]);
    }, ms);
  });
  let p1 = delayedMsg(1500, "Anna");
  let p2 = delayedMsg(1000, "is");
  let p3 = delayedMsg(500, "name");
  let p4 = delayedMsg(100, "my");
  let p5 = delayedMsg(50, ", ");
  let p6 = delayedMsg(10, "Hi");
  return Promise.all([
    p1,
    p2,
    p3,
    p4,
    p5,
    p6
  ]).then(arr => {
    Test.run([
      [
        "Core_PromiseTest.res",
        429,
        26,
        55
      ],
      "Should have correct placing"
    ], arr, equal, [
      [
        6,
        "Anna"
      ],
      [
        5,
        "is"
      ],
      [
        4,
        "name"
      ],
      [
        3,
        "my"
      ],
      [
        2,
        ", "
      ],
      [
        1,
        "Hi"
      ]
    ]);
    return Promise.resolve();
  });
}

function runTests$4() {
  testParallel();
  testRace();
  testParallel2();
  testParallel3();
  testParallel4();
  testParallel5();
  testParallel6();
}

let Concurrently = {
  testParallel: testParallel,
  testRace: testRace,
  testParallel2: testParallel2,
  testParallel3: testParallel3,
  testParallel4: testParallel4,
  testParallel5: testParallel5,
  testParallel6: testParallel6,
  runTests: runTests$4
};

resolveTest();

runTests$1();

testExnRejection();

runTests$3();

runTests$4();

export {
  TestError,
  fail,
  equal,
  Creation,
  ThenChaining,
  Rejection,
  Catching,
  Concurrently,
}
/*  Not a pure module */
