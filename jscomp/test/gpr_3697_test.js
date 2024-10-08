// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let CamlinternalLazy = require("../../lib/js/camlinternalLazy.js");

function fix() {
  return {
    TAG: "Fix",
    _0: CamlinternalLazy.from_fun(() => fix())
  };
}

function unfixLeak(_f) {
  while (true) {
    let f = _f;
    _f = CamlinternalLazy.force(f._0);
    continue;
  };
}

function unfix(p) {
  while (true) {
    let h = p.contents;
    p.contents = CamlinternalLazy.force(h._0);
  };
}

exports.fix = fix;
exports.unfixLeak = unfixLeak;
exports.unfix = unfix;
/* No side effect */
