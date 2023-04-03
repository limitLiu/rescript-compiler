

import * as Js_vector from "./js_vector.js";
import * as Caml_option from "./caml_option.js";

function length(l) {
  let _len = 0;
  let _param = l;
  while(true) {
    let param = _param;
    let len = _len;
    if (!param) {
      return len;
    }
    _param = param.tl;
    _len = len + 1 | 0;
    continue ;
  };
}

function cons(x, xs) {
  return {
          hd: x,
          tl: xs
        };
}

function isEmpty(x) {
  return x === /* [] */0;
}

function hd(param) {
  if (param) {
    return Caml_option.some(param.hd);
  }
  
}

function tl(param) {
  if (param) {
    return param.tl;
  }
  
}

function nth(l, n) {
  if (n < 0) {
    return ;
  }
  let _l = l;
  let _n = n;
  while(true) {
    let n$1 = _n;
    let l$1 = _l;
    if (!l$1) {
      return ;
    }
    if (n$1 === 0) {
      return Caml_option.some(l$1.hd);
    }
    _n = n$1 - 1 | 0;
    _l = l$1.tl;
    continue ;
  };
}

function revAppend(_l1, _l2) {
  while(true) {
    let l2 = _l2;
    let l1 = _l1;
    if (!l1) {
      return l2;
    }
    _l2 = {
      hd: l1.hd,
      tl: l2
    };
    _l1 = l1.tl;
    continue ;
  };
}

function rev(l) {
  return revAppend(l, /* [] */0);
}

function mapRevAux(f, _acc, _ls) {
  while(true) {
    let ls = _ls;
    let acc = _acc;
    if (!ls) {
      return acc;
    }
    _ls = ls.tl;
    _acc = {
      hd: f(ls.hd),
      tl: acc
    };
    continue ;
  };
}

function mapRev(f, ls) {
  return mapRevAux(f, /* [] */0, ls);
}

function map(f, ls) {
  return revAppend(mapRevAux(f, /* [] */0, ls), /* [] */0);
}

function iter(f, _param) {
  while(true) {
    let param = _param;
    if (!param) {
      return ;
    }
    f(param.hd);
    _param = param.tl;
    continue ;
  };
}

function iteri(f, l) {
  let _i = 0;
  let _param = l;
  while(true) {
    let param = _param;
    let i = _i;
    if (!param) {
      return ;
    }
    f(i, param.hd);
    _param = param.tl;
    _i = i + 1 | 0;
    continue ;
  };
}

function foldLeft(f, _accu, _l) {
  while(true) {
    let l = _l;
    let accu = _accu;
    if (!l) {
      return accu;
    }
    _l = l.tl;
    _accu = f(accu, l.hd);
    continue ;
  };
}

function tailLoop(f, _acc, _param) {
  while(true) {
    let param = _param;
    let acc = _acc;
    if (!param) {
      return acc;
    }
    _param = param.tl;
    _acc = f(param.hd, acc);
    continue ;
  };
}

function foldRight(f, l, init) {
  let loop = function (n, param) {
    if (!param) {
      return init;
    }
    let t = param.tl;
    let h = param.hd;
    if (n < 1000) {
      return f(h, loop(n + 1 | 0, t));
    } else {
      return f(h, tailLoop(f, init, revAppend(t, /* [] */0)));
    }
  };
  return loop(0, l);
}

function flatten(lx) {
  let _acc = /* [] */0;
  let _lx = lx;
  while(true) {
    let lx$1 = _lx;
    let acc = _acc;
    if (!lx$1) {
      return revAppend(acc, /* [] */0);
    }
    _lx = lx$1.tl;
    _acc = revAppend(lx$1.hd, acc);
    continue ;
  };
}

function filterRevAux(f, _acc, _xs) {
  while(true) {
    let xs = _xs;
    let acc = _acc;
    if (!xs) {
      return acc;
    }
    let ys = xs.tl;
    let y = xs.hd;
    if (f(y)) {
      _xs = ys;
      _acc = {
        hd: y,
        tl: acc
      };
      continue ;
    }
    _xs = ys;
    continue ;
  };
}

function filter(f, xs) {
  return revAppend(filterRevAux(f, /* [] */0, xs), /* [] */0);
}

function filterMapRevAux(f, _acc, _xs) {
  while(true) {
    let xs = _xs;
    let acc = _acc;
    if (!xs) {
      return acc;
    }
    let ys = xs.tl;
    let z = f(xs.hd);
    if (z !== undefined) {
      _xs = ys;
      _acc = {
        hd: Caml_option.valFromOption(z),
        tl: acc
      };
      continue ;
    }
    _xs = ys;
    continue ;
  };
}

function filterMap(f, xs) {
  return revAppend(filterMapRevAux(f, /* [] */0, xs), /* [] */0);
}

function countBy(f, xs) {
  let _acc = 0;
  let _xs = xs;
  while(true) {
    let xs$1 = _xs;
    let acc = _acc;
    if (!xs$1) {
      return acc;
    }
    _xs = xs$1.tl;
    _acc = f(xs$1.hd) ? acc + 1 | 0 : acc;
    continue ;
  };
}

function init(n, f) {
  return Js_vector.toList(Js_vector.init(n, f));
}

function toVector(xs) {
  if (!xs) {
    return [];
  }
  let a = new Array(length(xs));
  let _i = 0;
  let _param = xs;
  while(true) {
    let param = _param;
    let i = _i;
    if (!param) {
      return a;
    }
    a[i] = param.hd;
    _param = param.tl;
    _i = i + 1 | 0;
    continue ;
  };
}

function equal(cmp, _xs, _ys) {
  while(true) {
    let ys = _ys;
    let xs = _xs;
    if (!xs) {
      if (ys) {
        return false;
      } else {
        return true;
      }
    }
    if (!ys) {
      return false;
    }
    if (!cmp(xs.hd, ys.hd)) {
      return false;
    }
    _ys = ys.tl;
    _xs = xs.tl;
    continue ;
  };
}

export {
  length ,
  cons ,
  isEmpty ,
  hd ,
  tl ,
  nth ,
  revAppend ,
  rev ,
  mapRev ,
  map ,
  iter ,
  iteri ,
  foldLeft ,
  foldRight ,
  flatten ,
  filter ,
  filterMap ,
  countBy ,
  init ,
  toVector ,
  equal ,
}
/* No side effect */
