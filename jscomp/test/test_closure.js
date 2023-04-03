'use strict';

let $$Array = require("../../lib/js/array.js");
let Curry = require("../../lib/js/curry.js");
let Caml_array = require("../../lib/js/caml_array.js");

let v = {
  contents: 0
};

function f(param) {
  let arr = Caml_array.make(10, (function (param) {
          
        }));
  for(let i = 0; i <= 9; ++i){
    Caml_array.set(arr, i, (function(i){
        return function (param) {
          v.contents = v.contents + i | 0;
        }
        }(i)));
  }
  return arr;
}

let u = f(undefined);

$$Array.iter((function (x) {
        Curry._1(x, undefined);
      }), u);

if (v.contents !== 45) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "test_closure.ml",
          53,
          2
        ],
        Error: new Error()
      };
}

exports.v = v;
exports.f = f;
/* u Not a pure module */
