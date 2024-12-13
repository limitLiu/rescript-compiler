// Generated by ReScript, PLEASE EDIT WITH CARE


function withOpt($staropt$star, y) {
  return ($staropt$star$1, w) => {
    let x = $staropt$star !== undefined ? $staropt$star : 1;
    let z = $staropt$star$1 !== undefined ? $staropt$star$1 : 1;
    return ((x + y | 0) + z | 0) + w | 0;
  };
}

let testWithOpt = withOpt(undefined, 3)(undefined, 4);

let partial = withOpt(10, 3)(4, 11);

let total = withOpt(10, 3)(4, 11);

function foo1(xOpt, y) {
  let x = xOpt !== undefined ? xOpt : 3;
  return x + y | 0;
}

let x = 3;

let r1 = x + 11 | 0;

function foo2(y, xOpt, zOpt) {
  let x = xOpt !== undefined ? xOpt : 3;
  let z = zOpt !== undefined ? zOpt : 4;
  return (x + y | 0) + z | 0;
}

let r2 = foo2(11, undefined, undefined);

function foo3(xOpt, yOpt) {
  let x = xOpt !== undefined ? xOpt : 3;
  let y = yOpt !== undefined ? yOpt : 4;
  return x + y | 0;
}

let r3 = foo3(undefined, undefined);

let StandardNotation = {
  withOpt: withOpt,
  testWithOpt: testWithOpt,
  partial: partial,
  total: total,
  foo1: foo1,
  r1: r1,
  foo2: foo2,
  r2: r2,
  foo3: foo3,
  r3: r3
};

function withOpt$1($staropt$star, y) {
  return ($staropt$star$1, w) => {
    let x = $staropt$star !== undefined ? $staropt$star : 1;
    let z = $staropt$star$1 !== undefined ? $staropt$star$1 : 1;
    return ((x + y | 0) + z | 0) + w | 0;
  };
}

let testWithOpt$1 = withOpt$1(undefined, 3)(undefined, 4);

let total$1 = withOpt$1(10, 3)(4, 11);

function foo1$1(xOpt, y) {
  let x = xOpt !== undefined ? xOpt : 3;
  return x + y | 0;
}

let x$1 = 3;

let r1$1 = x$1 + 11 | 0;

function foo2$1(y, xOpt, zOpt, param) {
  let x = xOpt !== undefined ? xOpt : 3;
  let z = zOpt !== undefined ? zOpt : 4;
  return (x + y | 0) + z | 0;
}

function r2$1(extra, extra$1, extra$2) {
  return foo2$1(11, extra, extra$1, extra$2);
}

function foo3$1(xOpt, yOpt, param) {
  let x = xOpt !== undefined ? xOpt : 3;
  let y = yOpt !== undefined ? yOpt : 4;
  return x + y | 0;
}

function foo(func) {
  return func() + 1 | 0;
}

let M = {
  foo: foo
};

export {
  StandardNotation,
  withOpt$1 as withOpt,
  testWithOpt$1 as testWithOpt,
  total$1 as total,
  foo1$1 as foo1,
  r1$1 as r1,
  foo2$1 as foo2,
  r2$1 as r2,
  foo3$1 as foo3,
  M,
}
/* testWithOpt Not a pure module */
