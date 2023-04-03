'use strict';

let Caml_array = require("../../lib/js/caml_array.js");

function next(n) {
  return n + 1 | 0;
}

async function useNext(param) {
  return 4;
}

function Make(I) {
  let get = async function (key) {
    return await I.get(key);
  };
  return {
          get: get
        };
}

async function topFoo(param) {
  return 1;
}

let arr = [
  1,
  2,
  3
];

let toplevelAwait = await topFoo(undefined);

let toplevelAwait2 = Caml_array.get(arr, await topFoo(undefined));

exports.next = next;
exports.useNext = useNext;
exports.Make = Make;
exports.topFoo = topFoo;
exports.arr = arr;
exports.toplevelAwait = toplevelAwait;
exports.toplevelAwait2 = toplevelAwait2;
/* toplevelAwait Not a pure module */
