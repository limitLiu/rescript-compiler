// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let List = require("../../lib/js/list.js");
let List$1 = require("List");
let List$2 = require("reactV");
let List$3 = require("reactX");
let Local = require("./local");
let WebpackConfigJs = require("../../../webpack.config.js");
let WebpackMiddlewareConfigJs = require("../../../webpack.middleware.config.js");

let configx = WebpackConfigJs;

let WebpackConfig = {
  configx: configx
};

let configx$1 = WebpackMiddlewareConfigJs;

let WebpackDevMiddlewareConfig = {
  configx: configx$1
};

function configX(prim) {
  return WebpackMiddlewareConfigJs.configX();
}

function configX$1(prim) {
  return WebpackConfigJs.configX();
}

let U = {
  configX: configX$1
};

let A = {};

let B = {};

function f() {
  return [
    prim => {
      List$3.ff();
    },
    prim => {
      List$3.ff2();
    },
    prim => {
      List$2.ff();
    },
    prim => {
      List$2.ff2();
    }
  ];
}

List$1.xx();

List.length({
  hd: 1,
  tl: {
    hd: 2,
    tl: /* [] */0
  }
});

List.length(/* [] */0);

function ff(prim) {
  return Local.ff();
}

exports.WebpackConfig = WebpackConfig;
exports.WebpackDevMiddlewareConfig = WebpackDevMiddlewareConfig;
exports.configX = configX;
exports.U = U;
exports.A = A;
exports.B = B;
exports.f = f;
exports.ff = ff;
/* configx Not a pure module */
