'use strict';

let Caml_option = require("../../lib/js/caml_option.js");

function some(x) {
  return Caml_option.some(x);
}

function some2(x) {
  return Caml_option.some(x);
}

let h = [
  3,
  2,
  2
];

exports.some = some;
exports.some2 = some2;
exports.h = h;
/* No side effect */
