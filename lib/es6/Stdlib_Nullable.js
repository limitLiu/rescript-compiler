

import * as Stdlib_Option from "./Stdlib_Option.js";
import * as Primitive_option from "./Primitive_option.js";

function fromOption(option) {
  if (option !== undefined) {
    return Primitive_option.valFromOption(option);
  }
  
}

function equal(a, b, eq) {
  return Stdlib_Option.equal((a == null) ? undefined : Primitive_option.some(a), (b == null) ? undefined : Primitive_option.some(b), eq);
}

function compare(a, b, cmp) {
  return Stdlib_Option.compare((a == null) ? undefined : Primitive_option.some(a), (b == null) ? undefined : Primitive_option.some(b), cmp);
}

function getOr(value, $$default) {
  if (value == null) {
    return $$default;
  } else {
    return value;
  }
}

function getOrThrow(value) {
  if (!(value == null)) {
    return value;
  }
  throw {
    RE_EXN_ID: "Invalid_argument",
    _1: "Nullable.getOrThrow: value is null or undefined",
    Error: new Error()
  };
}

function forEach(value, f) {
  if (!(value == null)) {
    return f(value);
  }
  
}

function map(value, f) {
  if (value == null) {
    return value;
  } else {
    return f(value);
  }
}

function mapOr(value, $$default, f) {
  if (value == null) {
    return $$default;
  } else {
    return f(value);
  }
}

function flatMap(value, f) {
  if (value == null) {
    return value;
  } else {
    return f(value);
  }
}

let getWithDefault = getOr;

let getExn = getOrThrow;

let mapWithDefault = mapOr;

export {
  equal,
  compare,
  fromOption,
  getOr,
  getWithDefault,
  getExn,
  getOrThrow,
  forEach,
  map,
  mapOr,
  mapWithDefault,
  flatMap,
}
/* No side effect */
