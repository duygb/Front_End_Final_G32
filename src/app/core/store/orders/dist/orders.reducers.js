"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ordersReducer = exports.initialState = void 0;
var ordersActions = require("./orders.actions");
/* Cơ chế: Khi addToCart() được gọi. Update local storage -> update state (init = những gì có trong storage) */
/* getPendingOrders từ local storage */
function getPendingOrders() {
    if (localStorage.getItem('pendingOrders') == null) {
        return [];
    }
    else {
        return JSON.parse(localStorage.getItem('pendingOrders') || '');
    }
}
exports.initialState = {
    pendingOrders: getPendingOrders(),
    couponValue: '',
    error: ''
};
function ordersReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        /* khi action dispatch. Vẫn lấy trong localStorage */
        case ordersActions.ADD_PRODUCT_INTO_ORDER:
            return __assign(__assign({}, state), { pendingOrders: getPendingOrders() });
        case ordersActions.UPDATE_QUANTITY:
            return __assign(__assign({}, state), { pendingOrders: getPendingOrders() });
        case ordersActions.REMOVE_ORDER:
            return __assign(__assign({}, state), { pendingOrders: getPendingOrders() });
        default:
            return state;
    }
}
exports.ordersReducer = ordersReducer;
;
