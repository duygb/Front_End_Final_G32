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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppingCartComponent = void 0;
var core_1 = require("@angular/core");
var orders_selector_1 = require("../core/store/orders/orders.selector");
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(store) {
        this.store = store;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orders$ = this.store.select(orders_selector_1.pendingOrdersSelection);
        /* Lấy pendingOrders từ state (initital state này lấy từ storage)*/
        this.store.select(orders_selector_1.pendingOrdersSelection).subscribe(function (data) {
            _this.pendingOrders = data.map(function (item) { return (__assign(__assign({}, item), { totalPrice: Math.round((item.discountPercent * item.priceUnit * item.quantity) / 100 / 1000) * 1000 })); });
            /* this.pendingOrders = data;
            this.setTotalPrice(this.pendingOrders); */
        });
    };
    ShoppingCartComponent.prototype.change = function (pendingOrderItem, value) {
        var pendingOrders = JSON.parse(localStorage.getItem("pendingOrders") || "");
        var foundOrder = this.pendingOrders.find(function (item) { return item.id === pendingOrderItem.id; });
        if (foundOrder) {
            foundOrder.quantity = Number.parseInt(value);
            console.log(foundOrder.quantity);
            console.log(pendingOrders);
        }
        /*  console.log(JSON.stringify(pendingOrders));
         localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
         this.store.dispatch(addProductIntoOrder()); */
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-cart',
            templateUrl: './shopping-cart.component.html',
            styleUrls: [
                './template/css/style.css',
                './template/css/custom.css',
                './template/css/responsive.css',
                './template/css/bootstrap.min.css',
            ]
        })
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
