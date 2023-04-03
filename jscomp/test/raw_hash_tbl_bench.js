'use strict';

let Hashtbl = require("../../lib/js/hashtbl.js");

function bench(param) {
  let table = Hashtbl.create(undefined, 1000000);
  for(let i = 0; i <= 1000000; ++i){
    Hashtbl.add(table, i, i);
  }
  for(let i$1 = 0; i$1 <= 1000000; ++i$1){
    if (!Hashtbl.mem(table, i$1)) {
      throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "raw_hash_tbl_bench.ml",
              9,
              4
            ],
            Error: new Error()
          };
    }
    
  }
  for(let i$2 = 0; i$2 <= 1000000; ++i$2){
    Hashtbl.remove(table, i$2);
  }
}

bench(undefined);

let count = 1000000;

exports.count = count;
exports.bench = bench;
/*  Not a pure module */
