// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Waffle = require("reason-waffle/src/Waffle.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");

function CreateConsumer(C) {
  var listners = [/* [] */0];
  var listen = function (listner) {
    listners[0] = /* :: */[
      listner,
      listners[0]
    ];
    return (function () {
        listners[0] = Belt_List.keep(listners[0], (function (l) {
                return Caml_obj.caml_equal(l, listner);
              }));
        return /* () */0;
      });
  };
  var notifyListners = function (value) {
    return Belt_List.forEach(listners[0], (function (fn) {
                  return Curry._1(fn, value);
                }));
  };
  Waffle.on(notifyListners, C[/* stream */1]);
  var component = ReasonReact.reducerComponent(C[/* name */0] + "Consumer");
  var make = function (children) {
    return /* record */[
            /* debugName */component[/* debugName */0],
            /* reactClassInternal */component[/* reactClassInternal */1],
            /* handedOffState */component[/* handedOffState */2],
            /* willReceiveProps */component[/* willReceiveProps */3],
            /* didMount */(function (param) {
                var send = param[/* send */3];
                return Curry._1(param[/* onUnmount */4], listen((function (v) {
                                  return Curry._1(send, /* SetValue */[v]);
                                })));
              }),
            /* didUpdate */component[/* didUpdate */5],
            /* willUnmount */component[/* willUnmount */6],
            /* willUpdate */component[/* willUpdate */7],
            /* shouldUpdate */component[/* shouldUpdate */8],
            /* render */(function (param) {
                var value = param[/* state */1][/* value */0];
                if (value) {
                  var tmp = C[/* stream */1];
                  return Curry._2(children, value[0], Caml_oo_curry.js1(-899906020, 2, tmp));
                } else {
                  return null;
                }
              }),
            /* initialState */(function () {
                var tmp = C[/* stream */1];
                return /* record */[/* value */Caml_oo_curry.js2(-900406885, 3, tmp, /* () */0)];
              }),
            /* retainedProps */component[/* retainedProps */11],
            /* reducer */(function (action, _) {
                return /* Update */Block.__(0, [/* record */[/* value : Some */[action[0]]]]);
              }),
            /* subscriptions */component[/* subscriptions */13],
            /* jsElementWrapped */component[/* jsElementWrapped */14]
          ];
  };
  var Consumer = /* module */[
    /* component */component,
    /* make */make
  ];
  return /* module */[
          /* listners */listners,
          /* listen */listen,
          /* notifyListners */notifyListners,
          /* Consumer */Consumer
        ];
}

exports.CreateConsumer = CreateConsumer;
/* ReasonReact Not a pure module */
