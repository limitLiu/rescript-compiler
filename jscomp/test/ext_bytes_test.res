/* Copyright (C) 2015-2016 Bloomberg Finance L.P.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * In addition to the permissions granted to you by the LGPL, you may combine
 * or link a "work that uses the Library" with a publicly distributed version
 * of this file to produce a combined library or application, then distribute
 * that combined work under the terms of your choosing, with no requirement
 * to comply with the obligations normally placed on you by section 4 of the
 * LGPL version 3 (or the corresponding section of a later version of the LGPL
 * should you choose to use a later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA. */

let suites: ref<Mt.pair_suites> = ref(list{})
let test_id = ref(0)
let eq = (loc, x, y) => Mt.eq_suites(~test_id, ~suites, loc, x, y)

external char_code: char => int = "%identity"
external char_chr: int => char = "%identity"

let escaped = s => {
  let n = ref(0)
  for i in 0 to Bytes.length(s) - 1 {
    n :=
      n.contents +
      switch Bytes.unsafe_get(s, i) {
      | '"' | '\\' | '\n' | '\t' | '\r' | '\b' => 2
      | ' ' .. '~' => 1
      | _ => 4
      }
  }
  if n.contents == Bytes.length(s) {
    Bytes.copy(s)
  } else {
    let s' = Bytes.create(n.contents)
    n := 0
    for i in 0 to Bytes.length(s) - 1 {
      switch Bytes.unsafe_get(s, i) {
      | ('"' | '\\') as c =>
        Bytes.unsafe_set(s', n.contents, '\\')
        incr(n)
        Bytes.unsafe_set(s', n.contents, c)
      | '\n' =>
        Bytes.unsafe_set(s', n.contents, '\\')
        incr(n)
        Bytes.unsafe_set(s', n.contents, 'n')
      | '\t' =>
        Bytes.unsafe_set(s', n.contents, '\\')
        incr(n)
        Bytes.unsafe_set(s', n.contents, 't')
      | '\r' =>
        Bytes.unsafe_set(s', n.contents, '\\')
        incr(n)
        Bytes.unsafe_set(s', n.contents, 'r')
      | '\b' =>
        Bytes.unsafe_set(s', n.contents, '\\')
        incr(n)
        Bytes.unsafe_set(s', n.contents, 'b')
      | ' ' .. '~' as c => Bytes.unsafe_set(s', n.contents, c)
      | c =>
        let a = char_code(c)
        Bytes.unsafe_set(s', n.contents, '\\')
        incr(n)
        Bytes.unsafe_set(s', n.contents, char_chr(48 + a / 100))
        incr(n)
        Bytes.unsafe_set(s', n.contents, char_chr(48 + mod(a / 10, 10)))
        incr(n)
        Bytes.unsafe_set(s', n.contents, char_chr(48 + mod(a, 10)))
      }
      incr(n)
    }
    s'
  }
}

let starts_with = (xs: bytes, prefix, p) => {
  module X = {
    exception H
  }
  module Array = Bytes
  let (len1, len2) = {
    open Array
    (length(xs), length(prefix))
  }
  if len2 > len1 {
    false
  } else {
    try {
      for i in 0 to len2 - 1 {
        if \"@@"(not, p(xs[i], prefix[i])) {
          raise(X.H)
        }
      }
      true
    } catch {
    | X.H => false
    }
  }
}

let () = {
  let a = Bytes.init(100, i => Char.chr(i))
  Bytes.blit(a, 5, a, 10, 10)
  eq(
    __LOC__,
    a,
    Bytes.of_string(
      "\x00\x01\x02\x03\x04\x05\x06\x07\b\t\x05\x06\x07\b\t\n\x0b\x0c\r\x0e\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abc",
    ),
  )
}

let () = {
  let a = Bytes.init(100, i => Char.chr(i))
  Bytes.blit(a, 10, a, 5, 10)
  eq(
    __LOC__,
    a,
    Bytes.of_string(
      "\x00\x01\x02\x03\x04\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abc",
    ),
  )
}

let () = {
  let a = String.init(100, i => Char.chr(i))
  let b = Bytes.init(100, i => ' ')
  Bytes.blit_string(a, 10, b, 5, 10)
  eq(
    __LOC__,
    b,
    Bytes.of_string(
      "\x00\x00\x00\x00\x00\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00",
    ),
  )
}

let () = {
  let s = Bytes.init(50_000, i => Char.chr(mod(i, 137)))
  let s1 = Bytes.to_string(s)
  let s2 = Bytes.of_string(s1)
  eq(__LOC__, s, s2)
}

let f = (a: bytes, b) => (a > b, a >= b, a < b, a <= b, a == b)

let f_0 = (a: int64, b) => (a > b, a >= b, a < b, a <= b, a == b)

let () = Mt.from_pair_suites(__MODULE__, suites.contents)
