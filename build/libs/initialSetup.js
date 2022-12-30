"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoles = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Rol = _interopRequireDefault(require("../models/Rol"));
var createRoles = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var count, values;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Rol["default"].estimatedDocumentCount();
        case 3:
          count = _context.sent;
          if (!(count > 0)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return");
        case 6:
          _context.next = 8;
          return Promise.all([new _Rol["default"]({
            name: 'user'
          }).save(), new _Rol["default"]({
            name: 'moderator'
          }).save(), new _Rol["default"]({
            name: 'admin'
          }).save()]);
        case 8:
          values = _context.sent;
          console.log(values);
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();
exports.createRoles = createRoles;