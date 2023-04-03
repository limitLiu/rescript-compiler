'use strict';

let Mt = require("./mt.js");
let List = require("../../lib/js/list.js");
let Caml_obj = require("../../lib/js/caml_obj.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, x) {
  Mt.bool_suites(test_id, suites, loc, x);
}

let Block = {};

let v0 = {
  TAG: "A",
  _0: 0,
  _1: 1
};

let Block$1 = {};

let v1 = {
  TAG: "A",
  _0: 0,
  _1: 1
};

let N = {
  Block: Block$1,
  v1: v1
};

let Caml_obj$1 = {};

let List$1 = {};

let V = {
  List: List$1
};

let f = Caml_obj.equal;

eq("File \"block_alias_test.ml\", line 32, characters 6-13", List.length({
          hd: 1,
          tl: {
            hd: 2,
            tl: /* [] */0
          }
        }), 2);

b("File \"block_alias_test.ml\", line 33, characters 5-12", Caml_obj.equal(v0, {
          TAG: "A",
          _0: 0,
          _1: 1
        }));

eq("File \"block_alias_test.ml\", line 34, characters 6-13", v0, v1);

Mt.from_pair_suites("Block_alias_test", suites.contents);

let h = List.length;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.Block = Block;
exports.v0 = v0;
exports.N = N;
exports.Caml_obj = Caml_obj$1;
exports.V = V;
exports.f = f;
exports.h = h;
/*  Not a pure module */
