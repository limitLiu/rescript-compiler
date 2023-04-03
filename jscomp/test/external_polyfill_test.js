'use strict';

let Mt = require("./mt.js");
let Caml_external_polyfill = require("../../lib/js/caml_external_polyfill.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

require('../../lib/js/caml_external_polyfill.js').register("fancy_add", function(x,y){
  return + ((""+x ) + (""+y))
})
;

let h = Caml_external_polyfill.resolve("fancy_add")(1, 2);

eq("File \"external_polyfill_test.ml\", line 19, characters 5-12", h, 12);

Mt.from_pair_suites("External_polyfill_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.h = h;
/*  Not a pure module */
