// Generated by ReScript, PLEASE EDIT WITH CARE


function ff(x) {
  let a;
  switch (x) {
    case "0" :
    case "1" :
    case "2" :
      a = 3;
      break;
    case "3" :
      a = 4;
      break;
    case "4" :
      a = 6;
      break;
    case "7" :
      a = 7;
      break;
    default:
      a = 8;
  }
  return a + 3 | 0;
}

function f(x) {
  let y;
  y = x.TAG === "A" ? 3 : 4;
  return y + 32 | 0;
}

function f2(x) {
  let v = 0;
  let y;
  if (x.TAG === "A") {
    v = 1;
    let z = 33;
    y = z + 3 | 0;
  } else {
    v = 1;
    let z$1 = 33;
    y = z$1 + 4 | 0;
  }
  return y + 32 | 0;
}

function f3(x) {
  let v = 0;
  let y;
  if (x.TAG === "A") {
    v = 1;
    y = 3;
  } else {
    v = 1;
    y = 4;
  }
  return y + 32 | 0;
}

export {
  ff,
  f,
  f2,
  f3,
}
/* No side effect */
