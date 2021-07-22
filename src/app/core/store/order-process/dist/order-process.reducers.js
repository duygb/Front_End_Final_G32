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
var orderProcessActions = require("./order-process.actions");
/* Cơ chế: Khi addToCart() được gọi. Update local storage -> update state (init = những gì có trong storage) */
/* getPendingOrders từ local storage */
function getPendingOrderProcess() {
    if (localStorage.getItem('pendingOrderProcess') == null) {
        return [];
    }
    else {
        return JSON.parse(localStorage.getItem('pendingOrderProcess') || '');
    }
}
exports.initialState = {
    pendingOrderProcess: getPendingOrderProcess(),
    couponValue: '',
    error: ''
};
function orderProcessReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        /* khi action dispatch. Vẫn lấy trong localStorage */
        case orderProcessActions.ADD_PRODUCT_INTO_ORDERPROCESS:
            return __assign(__assign({}, state), { pendingOrderProcess: getPendingOrderProcess() });
        case orderProcessActions.UPDATE_QUANTITY:
            return __assign(__assign({}, state), { pendingOrderProcess: getPendingOrderProcess() });
        case orderProcessActions.REMOVE_ORDERPROCESS:
            return __assign(__assign({}, state), { pendingOrderProcess: getPendingOrderProcess() });
        default:
            return state;
    }
}
exports.orderProcessReducer = orderProcessReducer;
;
