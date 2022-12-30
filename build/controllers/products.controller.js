"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductById = exports.getProducts = exports.getProductById = exports.deletProductById = exports.createProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Product = _interopRequireDefault(require("../models/Product"));
var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, Temperature, Humidity, newProduct, productSave;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, Temperature = _req$body.Temperature, Humidity = _req$body.Humidity;
          newProduct = new _Product["default"]({
            Temperature: Temperature,
            Humidity: Humidity
          });
          _context.next = 4;
          return newProduct.save();
        case 4:
          productSave = _context.sent;
          res.status(201).json(productSave);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createProduct = createProduct;
var getProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _Product["default"].find();
        case 2:
          products = _context2.sent;
          res.json(products);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getProducts = getProducts;
var getProductById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _Product["default"].findById(req.params.productId);
        case 2:
          product = _context3.sent;
          res.status(200).json(product);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getProductById = getProductById;
var updateProductById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updatedProduct;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _Product["default"].findByIdAndUpdate(req.params.productId, req.body, {
            "new": true
          });
        case 2:
          updatedProduct = _context4.sent;
          res.status(200).json(updatedProduct);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateProductById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateProductById = updateProductById;
var deletProductById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var deletedProduct;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _Product["default"].findByIdAndDelete(req.params.productId);
        case 2:
          deletedProduct = _context5.sent;
          res.status(204).json();
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deletProductById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deletProductById = deletProductById;