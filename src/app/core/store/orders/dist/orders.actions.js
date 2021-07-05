"use strict";
exports.__esModule = true;
exports.updateQuantity = exports.UPDATE_QUANTITY = exports.addProductIntoOrder = exports.ADD_PRODUCT_INTO_ORDER = void 0;
var store_1 = require("@ngrx/store");
exports.ADD_PRODUCT_INTO_ORDER = "[ADD] Product into order";
exports.addProductIntoOrder = store_1.createAction(exports.ADD_PRODUCT_INTO_ORDER);
exports.UPDATE_QUANTITY = '[Update] Quantity';
exports.updateQuantity = store_1.createAction(exports.UPDATE_QUANTITY);
