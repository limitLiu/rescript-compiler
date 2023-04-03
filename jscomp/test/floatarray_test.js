'use strict';

let Mt = require("./mt.js");
let Caml_array = require("../../lib/js/caml_array.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

let v = Caml_array.make_float(5);

for(let i = 0; i <= 4; ++i){
  v[i] = 0;
}

Caml_array.set(v, 2, 15.5);

eq("File \"floatarray_test.ml\", line 17, characters 5-12", [
      v.length,
      v[2],
      Caml_array.get(v, 1)
    ], [
      5,
      15.5,
      0
    ]);

Mt.from_pair_suites("Floatarray_test", suites.contents);

let K;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.K = K;
/* v Not a pure module */
