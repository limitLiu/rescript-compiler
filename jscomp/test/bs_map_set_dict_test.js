// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let Caml = require("../../lib/js/caml.js");
let Belt_Map = require("../../lib/js/belt_Map.js");
let Belt_List = require("../../lib/js/belt_List.js");
let Belt_Array = require("../../lib/js/belt_Array.js");
let Belt_MapDict = require("../../lib/js/belt_MapDict.js");
let Belt_SetDict = require("../../lib/js/belt_SetDict.js");
let Array_data_util = require("./array_data_util.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, v) {
  Mt.bool_suites(test_id, suites, loc, v);
}

let Icmp = {
  cmp: Caml.int_compare
};

let Icmp2 = {
  cmp: Caml.int_compare
};

let Ic3 = {
  cmp: Caml.int_compare
};

let m0_cmp = Icmp.cmp;

let m0 = {
  cmp: m0_cmp,
  data: undefined
};

let m00_cmp = Ic3.cmp;

let m00 = {
  cmp: m00_cmp,
  data: undefined
};

let I2 = {
  cmp: (x, y) => Caml.int_compare(y, x)
};

let m_cmp = Icmp2.cmp;

let m = {
  cmp: m_cmp,
  data: undefined
};

let m2_cmp = I2.cmp;

let m2 = {
  cmp: m2_cmp,
  data: undefined
};

let data;

Belt_Map.getId(m2);

let m_dict = Belt_Map.getId(m);

for (let i = 0; i <= 100000; ++i) {
  data = Belt_MapDict.set(data, i, i, m_dict.cmp);
}

let data$1 = data;

let newm_cmp = m_dict.cmp;

let newm = {
  cmp: newm_cmp,
  data: data$1
};

console.log(newm);

let m11 = Belt_MapDict.set(undefined, 1, 1, Icmp.cmp);

console.log(m11);

let m_dict$1 = Belt_Map.getId(m);

let cmp = m_dict$1.cmp;

let data$2;

for (let i$1 = 0; i$1 <= 100000; ++i$1) {
  data$2 = Belt_SetDict.add(data$2, i$1, cmp);
}

console.log(data$2);

function f(none) {
  return Belt_Map.fromArray(none, Icmp);
}

function $eq$tilde(a, b) {
  return extra => Belt_Map.eq(a, b, extra);
}

let u0 = Belt_Map.fromArray(Belt_Array.map(Array_data_util.randomRange(0, 39), x => [
  x,
  x
]), Icmp);

let u1 = Belt_Map.set(u0, 39, 120);

b("File \"bs_map_set_dict_test.res\", line 72, characters 4-11", Belt_Array.every2(Belt_MapDict.toArray(u0.data), Belt_Array.map(Array_data_util.range(0, 39), x => [
  x,
  x
]), (param, param$1) => {
  if (param[0] === param$1[0]) {
    return param[1] === param$1[1];
  } else {
    return false;
  }
}));

b("File \"bs_map_set_dict_test.res\", line 79, characters 4-11", Belt_List.every2(Belt_MapDict.toList(u0.data), Belt_List.fromArray(Belt_Array.map(Array_data_util.range(0, 39), x => [
  x,
  x
])), (param, param$1) => {
  if (param[0] === param$1[0]) {
    return param[1] === param$1[1];
  } else {
    return false;
  }
}));

eq("File \"bs_map_set_dict_test.res\", line 84, characters 5-12", Belt_Map.get(u0, 39), 39);

eq("File \"bs_map_set_dict_test.res\", line 85, characters 5-12", Belt_Map.get(u1, 39), 120);

let u = Belt_Map.fromArray(Belt_Array.makeByAndShuffle(10000, x => [
  x,
  x
]), Icmp);

eq("File \"bs_map_set_dict_test.res\", line 90, characters 5-12", Belt_Array.makeBy(10000, x => [
  x,
  x
]), Belt_MapDict.toArray(u.data));

Mt.from_pair_suites("Bs_map_set_dict_test", suites.contents);

let M;

let MI;

let I;

let A;

let L;

let vv;

let vv2;

let Md0;

let ISet;

let S0;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.Icmp = Icmp;
exports.Icmp2 = Icmp2;
exports.Ic3 = Ic3;
exports.M = M;
exports.MI = MI;
exports.I = I;
exports.A = A;
exports.L = L;
exports.m0 = m0;
exports.m00 = m00;
exports.I2 = I2;
exports.m = m;
exports.m2 = m2;
exports.vv = vv;
exports.vv2 = vv2;
exports.Md0 = Md0;
exports.ISet = ISet;
exports.S0 = S0;
exports.f = f;
exports.$eq$tilde = $eq$tilde;
/*  Not a pure module */
