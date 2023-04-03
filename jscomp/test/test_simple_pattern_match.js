'use strict';

let Sys = require("../../lib/js/sys.js");

let match;

switch (Sys.os_type) {
  case "Cygwin" :
  case "Unix" :
      match = [
        1,
        2
      ];
      break;
  default:
    match = [
      3,
      4
    ];
}

let a = match[0];

let b = match[1];

exports.a = a;
exports.b = b;
/* match Not a pure module */
