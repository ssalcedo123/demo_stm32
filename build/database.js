"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
_mongoose["default"].set("strictQuery", false);
_mongoose["default"].connect('mongodb+srv://sevastian:sev123456789@cluster0.8caypnu.mongodb.net/?retryWrites=true&w=majority').then(function (db) {
  return console.log('Db is connected');
})["catch"](function (error) {
  return console.log(error);
});