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
exports.favoriteReducer = exports.initialState = void 0;
var favoriteActions = require("./favorite.actions");
/* Cơ chế: Khi addToCart() được gọi. Update local storage -> update state (init = những gì có trong storage) */
/* getPendingOrders từ local storage */
function get() {
    if (localStorage.getItem('pendingFavorite') == null) {
        return [];
    }
    else {
        return JSON.parse(localStorage.getItem('pendingFavorite') || '');
    }
}
exports.initialState = {
    pendingFavorite: getPendingFavorite(),
    couponValue: '',
    error: ''
};
function favoriteReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        /* khi action dispatch. Vẫn lấy trong localStorage */
        case favoriteActions.ADD_PRODUCT_INTO_FAVORITE:
            return __assign(__assign({}, state), { pendingFavorite: getPendingFavorite() });
        case favoriteActions.UPDATE_QUANTITY:
            return __assign(__assign({}, state), { pendingFavorite: getPendingFavorite() });
        case favoriteActions.REMOVE_FAVORITE:
            return __assign(__assign({}, state), { pendingFavorite: getPendingFavorite() });
        default:
            return state;
    }
}
exports.favoriteReducer = favoriteReducer;
;
