// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Base = require("./Base.js");

function create(l, v, r) {
  var hl = Base.height(l);
  var hr = Base.height(r);
  return /* Node */{
          _0: l,
          _1: v,
          _2: r,
          _3: hl > hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function bal(l, v, r) {
  var hl = Base.height(l);
  var hr = Base.height(r);
  if (hl > (hr + 2 | 0)) {
    if (l) {
      var lr = l._2;
      var lv = l._1;
      var ll = l._0;
      if (Base.height(ll) >= Base.height(lr)) {
        return create(ll, lv, create(lr, v, r));
      }
      if (lr) {
        return create(create(ll, lv, lr._0), lr._1, create(lr._2, v, r));
      }
      throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "avl.res",
              23,
              11
            ],
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "avl.res",
            23,
            11
          ],
          Error: new Error()
        };
  }
  if (hr <= (hl + 2 | 0)) {
    return create(l, v, r);
  }
  if (r) {
    var rl = r._0;
    var rr = r._2;
    if (Base.height(rr) >= Base.height(rl)) {
      return create(create(l, v, rl), r._1, rr);
    }
    if (rl) {
      return create(create(l, v, rl._0), rl._1, create(rl._2, r._1, r._2));
    }
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "avl.res",
            29,
            11
          ],
          Error: new Error()
        };
  }
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "avl.res",
          29,
          11
        ],
        Error: new Error()
      };
}

function add(x, tree) {
  if (!tree) {
    return /* Node */{
            _0: /* Empty */0,
            _1: x,
            _2: /* Empty */0,
            _3: 1
          };
  }
  var v = tree._1;
  if (x === v) {
    return tree;
  }
  var r = tree._2;
  var l = tree._0;
  if (x < v) {
    return bal(add(x, l), v, r);
  } else {
    return bal(l, v, add(x, r));
  }
}

exports.create = create;
exports.bal = bal;
exports.add = add;
/* No side effect */
