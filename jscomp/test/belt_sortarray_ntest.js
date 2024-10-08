// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Nodetest = require("node:test");
let Belt_Array = require("../../lib/js/belt_Array.js");
let Belt_Range = require("../../lib/js/belt_Range.js");
let Belt_SortArray = require("../../lib/js/belt_SortArray.js");
let Node_test_util = require("./node_test_util.js");
let Array_data_util = require("./array_data_util.js");
let Belt_SortArrayInt = require("../../lib/js/belt_SortArrayInt.js");

function cmp(x, y) {
  return x - y | 0;
}

function unions(xs, ys) {
  let lenX = xs.length;
  let lenY = ys.length;
  let o = new Array(lenX + lenY | 0);
  let v = Belt_SortArray.union(xs, 0, lenX, ys, 0, lenY, o, 0, cmp);
  o.length = v;
  return o;
}

function inters(xs, ys) {
  let lenX = xs.length;
  let lenY = ys.length;
  let o = new Array(lenX);
  let v = Belt_SortArray.intersect(xs, 0, lenX, ys, 0, lenY, o, 0, cmp);
  o.length = v;
  return o;
}

function diffs(xs, ys) {
  let lenX = xs.length;
  let lenY = ys.length;
  let o = new Array(lenX);
  let v = Belt_SortArray.diff(xs, 0, lenX, ys, 0, lenY, o, 0, cmp);
  o.length = v;
  return o;
}

Nodetest.describe("Belt.SortArray", () => {
  Nodetest.test("union", () => {
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 38, characters 7-14", unions(Array_data_util.range(1, 10), Array_data_util.range(3, 13)), Array_data_util.range(1, 13));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 39, characters 7-14", unions(Array_data_util.range(1, 10), Array_data_util.range(9, 13)), Array_data_util.range(1, 13));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 40, characters 7-14", unions(Array_data_util.range(8, 10), Array_data_util.range(9, 13)), Array_data_util.range(8, 13));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 41, characters 7-14", unions(Array_data_util.range(0, 2), Array_data_util.range(4, 7)), [
      0,
      1,
      2,
      4,
      5,
      6,
      7
    ]);
  });
  Nodetest.test("intersect", () => {
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 45, characters 7-14", inters(Array_data_util.range(1, 10), Array_data_util.range(3, 13)), Array_data_util.range(3, 10));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 46, characters 7-14", inters(Array_data_util.range(1, 10), Array_data_util.range(9, 13)), Array_data_util.range(9, 10));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 47, characters 7-14", inters(Array_data_util.range(8, 10), Array_data_util.range(9, 13)), Array_data_util.range(9, 10));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 48, characters 7-14", inters(Array_data_util.range(0, 2), Array_data_util.range(4, 7)), []);
  });
  Nodetest.test("diff", () => {
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 52, characters 7-14", diffs(Array_data_util.range(1, 10), Array_data_util.range(3, 13)), Array_data_util.range(1, 2));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 53, characters 7-14", diffs(Array_data_util.range(1, 10), Array_data_util.range(9, 13)), Array_data_util.range(1, 8));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 54, characters 7-14", diffs(Array_data_util.range(8, 10), Array_data_util.range(9, 13)), Array_data_util.range(8, 8));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 55, characters 7-14", diffs(Array_data_util.range(0, 2), Array_data_util.range(4, 7)), [
      0,
      1,
      2
    ]);
  });
  Nodetest.test("isSorted", () => {
    Node_test_util.ok("File \"belt_sortarray_ntest.res\", line 59, characters 7-14", Belt_SortArray.isSorted([], cmp));
    Node_test_util.ok("File \"belt_sortarray_ntest.res\", line 60, characters 7-14", Belt_SortArray.isSorted([0], cmp));
    Node_test_util.ok("File \"belt_sortarray_ntest.res\", line 61, characters 7-14", Belt_SortArray.isSorted([
      0,
      1
    ], cmp));
    Node_test_util.ok("File \"belt_sortarray_ntest.res\", line 62, characters 7-14", !Belt_SortArray.isSorted([
      1,
      0
    ], cmp));
  });
  Nodetest.test("stableSortInPlaceBy", () => Node_test_util.ok("File \"belt_sortarray_ntest.res\", line 67, characters 6-13", Belt_Range.every(0, 200, i => {
    let v = Array_data_util.randomRange(0, i);
    Belt_SortArray.stableSortInPlaceBy(v, cmp);
    return Belt_SortArray.isSorted(v, cmp);
  })));
  Nodetest.test("stableSortInPlaceBy 2", () => {
    let u = Array_data_util.randomRange(0, 1000000);
    let u1 = u.slice(0);
    Belt_SortArray.stableSortInPlaceBy(u, cmp);
    Node_test_util.ok("File \"belt_sortarray_ntest.res\", line 85, characters 7-14", Belt_SortArray.isSorted(u, cmp));
    Belt_SortArrayInt.stableSortInPlace(u1);
    Node_test_util.ok("File \"belt_sortarray_ntest.res\", line 87, characters 7-14", Belt_SortArray.isSorted(u1, cmp));
  });
  Nodetest.test("stableSortInPlaceBy 3", () => {
    let u = [
      [
        1,
        "a"
      ],
      [
        1,
        "b"
      ],
      [
        2,
        "a"
      ]
    ];
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 92, characters 7-14", Belt_SortArray.stableSortBy(u, (param, param$1) => param[0] - param$1[0] | 0), [
      [
        1,
        "a"
      ],
      [
        1,
        "b"
      ],
      [
        2,
        "a"
      ]
    ]);
    let u$1 = [
      [
        1,
        "b"
      ],
      [
        1,
        "a"
      ],
      [
        1,
        "b"
      ],
      [
        2,
        "a"
      ]
    ];
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 95, characters 6-13", Belt_SortArray.stableSortBy(u$1, (param, param$1) => param[0] - param$1[0] | 0), [
      [
        1,
        "b"
      ],
      [
        1,
        "a"
      ],
      [
        1,
        "b"
      ],
      [
        2,
        "a"
      ]
    ]);
    let u$2 = [
      [
        1,
        "c"
      ],
      [
        1,
        "b"
      ],
      [
        1,
        "a"
      ],
      [
        1,
        "b"
      ],
      [
        1,
        "c"
      ],
      [
        2,
        "a"
      ]
    ];
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 101, characters 6-13", Belt_SortArray.stableSortBy(u$2, (param, param$1) => param[0] - param$1[0] | 0), [
      [
        1,
        "c"
      ],
      [
        1,
        "b"
      ],
      [
        1,
        "a"
      ],
      [
        1,
        "b"
      ],
      [
        1,
        "c"
      ],
      [
        2,
        "a"
      ]
    ]);
  });
  Nodetest.test("binarySearchBy", () => {
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 108, characters 7-14", Belt_SortArray.binarySearchBy([
      1,
      3,
      5,
      7
    ], 4, cmp) ^ -1, 2);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 109, characters 7-14", Belt_SortArray.binarySearchBy([
      1,
      2,
      3,
      4,
      33,
      35,
      36
    ], 33, cmp), 4);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 110, characters 7-14", Belt_SortArray.binarySearchBy([
      1,
      2,
      3,
      4,
      33,
      35,
      36
    ], 1, cmp), 0);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 111, characters 7-14", Belt_SortArray.binarySearchBy([
      1,
      2,
      3,
      4,
      33,
      35,
      36
    ], 2, cmp), 1);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 112, characters 7-14", Belt_SortArray.binarySearchBy([
      1,
      2,
      3,
      4,
      33,
      35,
      36
    ], 3, cmp), 2);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 113, characters 7-14", Belt_SortArray.binarySearchBy([
      1,
      2,
      3,
      4,
      33,
      35,
      36
    ], 4, cmp), 3);
    let aa = Array_data_util.range(0, 1000);
    Node_test_util.ok("File \"belt_sortarray_ntest.res\", line 115, characters 7-14", Belt_Range.every(0, 1000, i => Belt_SortArray.binarySearchBy(aa, i, cmp) === i));
    let cc = Belt_Array.map(Array_data_util.range(0, 2000), x => (x << 1));
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 118, characters 7-14", Belt_SortArray.binarySearchBy(cc, 5000, cmp) ^ -1, 2001);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 119, characters 7-14", Belt_SortArray.binarySearchBy(cc, -1, cmp) ^ -1, 0);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 120, characters 7-14", Belt_SortArray.binarySearchBy(cc, 0, cmp), 0);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 122, characters 7-14", Belt_SortArray.binarySearchBy(cc, 1, cmp) ^ -1, 1);
    Node_test_util.ok("File \"belt_sortarray_ntest.res\", line 124, characters 6-13", Belt_Range.every(0, 1999, i => (Belt_SortArray.binarySearchBy(cc, (i << 1) + 1 | 0, cmp) ^ -1) === (i + 1 | 0)));
  });
  Nodetest.test("strictlySortedLength", () => {
    let lt = (x, y) => x < y;
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 133, characters 7-14", Belt_SortArray.strictlySortedLength([], lt), 0);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 134, characters 7-14", Belt_SortArray.strictlySortedLength([1], lt), 1);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 135, characters 7-14", Belt_SortArray.strictlySortedLength([
      1,
      1
    ], lt), 1);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 136, characters 7-14", Belt_SortArray.strictlySortedLength([
      1,
      1,
      2
    ], lt), 1);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 137, characters 7-14", Belt_SortArray.strictlySortedLength([
      1,
      2
    ], lt), 2);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 138, characters 7-14", Belt_SortArray.strictlySortedLength([
      1,
      2,
      3,
      4,
      3
    ], lt), 4);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 139, characters 7-14", Belt_SortArray.strictlySortedLength([
      4,
      4,
      3,
      2,
      1
    ], lt), 1);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 140, characters 7-14", Belt_SortArray.strictlySortedLength([
      4,
      3,
      2,
      1
    ], lt), -4);
    Node_test_util.eq("File \"belt_sortarray_ntest.res\", line 141, characters 7-14", Belt_SortArray.strictlySortedLength([
      4,
      3,
      2,
      1,
      0
    ], lt), -5);
  });
});

let I;

let R;

let A;

let S;

let SI;

exports.I = I;
exports.R = R;
exports.A = A;
exports.S = S;
exports.SI = SI;
exports.cmp = cmp;
exports.unions = unions;
exports.inters = inters;
exports.diffs = diffs;
/*  Not a pure module */
