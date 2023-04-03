'use strict';

let CamlinternalLazy = require("../../lib/js/camlinternalLazy.js");

function fix(param) {
  return {
          TAG: "Fix",
          _0: {
            LAZY_DONE: false,
            VAL: (function () {
                return fix(undefined);
              })
          }
        };
}

function unfixLeak(_f) {
  while(true) {
    let f = _f;
    _f = CamlinternalLazy.force(f._0);
    continue ;
  };
}

function unfix(p) {
  while(true) {
    let match = p.contents;
    p.contents = CamlinternalLazy.force(match._0);
  };
}

exports.fix = fix;
exports.unfixLeak = unfixLeak;
exports.unfix = unfix;
/* No side effect */
