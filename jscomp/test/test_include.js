'use strict';

let List = require("../../lib/js/list.js");
let $$String = require("../../lib/js/string.js");
let Test_order = require("./test_order.js");

function Make(U) {
  let compare = U.compare;
  return {
          compare: compare,
          v: compare
        };
}

let X = {
  compare: $$String.compare,
  v: $$String.compare
};

let U = {
  compare: Test_order.compare,
  v: Test_order.compare
};

let N;

let v = List.length;

let N0;

let N1;

let N2;

let N3;

let N4;

let N5;

let N6;

let length = List.length;

let compare_lengths = List.compare_lengths;

let compare_length_with = List.compare_length_with;

let cons = List.cons;

let hd = List.hd;

let tl = List.tl;

let nth = List.nth;

let nth_opt = List.nth_opt;

let rev = List.rev;

let init = List.init;

let append = List.append;

let rev_append = List.rev_append;

let concat = List.concat;

let flatten = List.flatten;

let iter = List.iter;

let iteri = List.iteri;

let map = List.map;

let mapi = List.mapi;

let rev_map = List.rev_map;

let fold_left = List.fold_left;

let fold_right = List.fold_right;

let iter2 = List.iter2;

let map2 = List.map2;

let rev_map2 = List.rev_map2;

let fold_left2 = List.fold_left2;

let fold_right2 = List.fold_right2;

let for_all = List.for_all;

let exists = List.exists;

let for_all2 = List.for_all2;

let exists2 = List.exists2;

let mem = List.mem;

let memq = List.memq;

let find = List.find;

let find_opt = List.find_opt;

let filter = List.filter;

let find_all = List.find_all;

let partition = List.partition;

let assoc = List.assoc;

let assoc_opt = List.assoc_opt;

let assq = List.assq;

let assq_opt = List.assq_opt;

let mem_assoc = List.mem_assoc;

let mem_assq = List.mem_assq;

let remove_assoc = List.remove_assoc;

let remove_assq = List.remove_assq;

let split = List.split;

let combine = List.combine;

let sort = List.sort;

let stable_sort = List.stable_sort;

let fast_sort = List.fast_sort;

let sort_uniq = List.sort_uniq;

let merge = List.merge;

exports.N = N;
exports.v = v;
exports.Make = Make;
exports.X = X;
exports.U = U;
exports.N0 = N0;
exports.N1 = N1;
exports.N2 = N2;
exports.N3 = N3;
exports.N4 = N4;
exports.N5 = N5;
exports.N6 = N6;
exports.length = length;
exports.compare_lengths = compare_lengths;
exports.compare_length_with = compare_length_with;
exports.cons = cons;
exports.hd = hd;
exports.tl = tl;
exports.nth = nth;
exports.nth_opt = nth_opt;
exports.rev = rev;
exports.init = init;
exports.append = append;
exports.rev_append = rev_append;
exports.concat = concat;
exports.flatten = flatten;
exports.iter = iter;
exports.iteri = iteri;
exports.map = map;
exports.mapi = mapi;
exports.rev_map = rev_map;
exports.fold_left = fold_left;
exports.fold_right = fold_right;
exports.iter2 = iter2;
exports.map2 = map2;
exports.rev_map2 = rev_map2;
exports.fold_left2 = fold_left2;
exports.fold_right2 = fold_right2;
exports.for_all = for_all;
exports.exists = exists;
exports.for_all2 = for_all2;
exports.exists2 = exists2;
exports.mem = mem;
exports.memq = memq;
exports.find = find;
exports.find_opt = find_opt;
exports.filter = filter;
exports.find_all = find_all;
exports.partition = partition;
exports.assoc = assoc;
exports.assoc_opt = assoc_opt;
exports.assq = assq;
exports.assq_opt = assq_opt;
exports.mem_assoc = mem_assoc;
exports.mem_assq = mem_assq;
exports.remove_assoc = remove_assoc;
exports.remove_assq = remove_assq;
exports.split = split;
exports.combine = combine;
exports.sort = sort;
exports.stable_sort = stable_sort;
exports.fast_sort = fast_sort;
exports.sort_uniq = sort_uniq;
exports.merge = merge;
/* No side effect */
