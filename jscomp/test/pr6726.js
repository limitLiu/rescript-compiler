'use strict';


function get_uint8(str, off) {
  return 33;
}

let BigEndian = {
  get_uint8: get_uint8
};

let ExtUnixAll = {
  BigEndian: BigEndian
};

let ExtUnix = {
  All: undefined
};

function test_endian_string(x) {
  return 33;
}

let v = 33;

let Test = {
  test_endian_string: test_endian_string,
  v: v
};

exports.ExtUnixAll = ExtUnixAll;
exports.ExtUnix = ExtUnix;
exports.Test = Test;
/* No side effect */
