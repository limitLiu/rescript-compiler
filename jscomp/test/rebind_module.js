'use strict';

let Caml_exceptions = require("../../lib/js/caml_exceptions.js");

let A = /* @__PURE__ */Caml_exceptions.create("Rebind_module.A");

let AA = /* @__PURE__ */Caml_exceptions.create("Rebind_module.AA");

exports.A = A;
exports.AA = AA;
/* No side effect */
