'use strict';

let Stdlib_Option = require("./Stdlib_Option.js");
let Primitive_option = require("./Primitive_option.js");

function fromOption(option) {
  if (option !== undefined) {
    return Primitive_option.valFromOption(option);
  } else {
    return null;
  }
}

function equal(a, b, eq) {
  return Stdlib_Option.equal(a === null ? undefined : Primitive_option.some(a), b === null ? undefined : Primitive_option.some(b), eq);
}

function compare(a, b, cmp) {
  return Stdlib_Option.compare(a === null ? undefined : Primitive_option.some(a), b === null ? undefined : Primitive_option.some(b), cmp);
}

function getOr(value, $$default) {
  if (value !== null) {
    return value;
  } else {
    return $$default;
  }
}

function getOrThrow(value) {
  if (value !== null) {
    return value;
  }
  throw {
    RE_EXN_ID: "Invalid_argument",
    _1: "Null.getOrThrow: value is null",
    Error: new Error()
  };
}

function forEach(value, f) {
  if (value !== null) {
    return f(value);
  }
  
}

function map(value, f) {
  if (value !== null) {
    return f(value);
  } else {
    return null;
  }
}

function mapOr(value, $$default, f) {
  if (value !== null) {
    return f(value);
  } else {
    return $$default;
  }
}

function flatMap(value, f) {
  if (value !== null) {
    return f(value);
  } else {
    return null;
  }
}

let getWithDefault = getOr;

let getExn = getOrThrow;

let mapWithDefault = mapOr;

exports.equal = equal;
exports.compare = compare;
exports.fromOption = fromOption;
exports.getOr = getOr;
exports.getWithDefault = getWithDefault;
exports.getExn = getExn;
exports.getOrThrow = getOrThrow;
exports.forEach = forEach;
exports.map = map;
exports.mapOr = mapOr;
exports.mapWithDefault = mapWithDefault;
exports.flatMap = flatMap;
/* No side effect */
