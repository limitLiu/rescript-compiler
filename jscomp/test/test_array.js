'use strict';

let $$Array = require("../../lib/js/array.js");
let Caml_array = require("../../lib/js/caml_array.js");

let v = Caml_array.make(6, 5);

Caml_array.make_float(30);

let h = $$Array.sub(v, 0, 2);

let hhh = $$Array.append([
      1,
      2,
      3,
      4
    ], [
      1,
      2,
      3,
      5
    ]);

let u = Caml_array.concat({
      hd: [
        1,
        2
      ],
      tl: {
        hd: [
          2,
          3
        ],
        tl: {
          hd: [
            3,
            4
          ],
          tl: /* [] */0
        }
      }
    });

let hh = $$Array.blit;

exports.v = v;
exports.h = h;
exports.hh = hh;
exports.hhh = hhh;
exports.u = u;
/*  Not a pure module */
