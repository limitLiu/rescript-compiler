// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      () => ({
        TAG: "Eq",
        _0: x,
        _1: y
      })
    ],
    tl: suites.contents
  };
}

eq("File \"gpr_1749_test.res\", line 15, characters 3-10", 0, 0);

Mt.from_pair_suites("Gpr_1749_test", suites.contents);

let a = 0;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.a = a;
/*  Not a pure module */
