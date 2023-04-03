'use strict';

let Caml_exceptions = require("../../lib/js/caml_exceptions.js");

let A = /* @__PURE__ */Caml_exceptions.create("Test_exception_escape.N.A");

let f;

try {
  throw {
        RE_EXN_ID: A,
        _1: 3,
        Error: new Error()
      };
}
catch (exn){
  f = 3;
}

let N = {
  f: f
};

exports.N = N;
/* f Not a pure module */
