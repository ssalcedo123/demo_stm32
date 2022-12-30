"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.isModerator = exports.isAdmin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../config"));
var _User = _interopRequireDefault(require("../models/User"));
var _Rol = _interopRequireDefault(require("../models/Rol"));
var verifyToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decoded, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = req.headers["x-access-token"];
          if (token) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(403).json({
            message: "No token provided"
          }));
        case 4:
          decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
          req.userId = decoded.id;
          _context.next = 8;
          return _User["default"].findById(req.userId, {
            password: 0
          });
        case 8:
          user = _context.sent;
          console.log(user);
          if (user) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: 'No user found'
          }));
        case 12:
          next();
          _context.next = 18;
          break;
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(401).json({
            message: 'Unauthorized'
          }));
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 15]]);
  }));
  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.verifyToken = verifyToken;
var isModerator = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var user, roles, i;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _User["default"].findById(req.userId);
        case 2:
          user = _context2.sent;
          _context2.next = 5;
          return _Rol["default"].find({
            _id: {
              $in: user.roles
            }
          });
        case 5:
          roles = _context2.sent;
          i = 0;
        case 7:
          if (!(i < roles.length)) {
            _context2.next = 15;
            break;
          }
          if (!(roles[i].name === "moderator")) {
            _context2.next = 12;
            break;
          }
          console.log(roles);
          next();
          return _context2.abrupt("return");
        case 12:
          i++;
          _context2.next = 7;
          break;
        case 15:
          console.log(roles);
          return _context2.abrupt("return", res.status(403).json({
            message: "Requires Moderator role"
          }));
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function isModerator(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.isModerator = isModerator;
var isAdmin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var user, roles, i;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _User["default"].findById(req.userId);
        case 2:
          user = _context3.sent;
          _context3.next = 5;
          return _Rol["default"].find({
            _id: {
              $in: user.roles
            }
          });
        case 5:
          roles = _context3.sent;
          i = 0;
        case 7:
          if (!(i < roles.length)) {
            _context3.next = 15;
            break;
          }
          if (!(roles[i].name === "admin")) {
            _context3.next = 12;
            break;
          }
          console.log(roles);
          next();
          return _context3.abrupt("return");
        case 12:
          i++;
          _context3.next = 7;
          break;
        case 15:
          console.log(roles);
          return _context3.abrupt("return", res.status(403).json({
            message: "Requires Admin role"
          }));
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function isAdmin(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.isAdmin = isAdmin;