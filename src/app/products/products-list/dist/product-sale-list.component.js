"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductSaleListComponent = void 0;
var core_1 = require("@angular/core");
var orders_actions_1 = require("src/app/core/store/orders/orders.actions");
var ProductSaleListComponent = /** @class */ (function () {
    function ProductSaleListComponent(store) {
        this.store = store;
        this.onChanged = new core_1.EventEmitter();
        this.onFirstPage = new core_1.EventEmitter();
        this.onLastPage = new core_1.EventEmitter();
        this.onPreviousPage = new core_1.EventEmitter();
        this.onNextPage = new core_1.EventEmitter();
        this.onIndexPaginationChange = new core_1.EventEmitter();
    }
    ProductSaleListComponent.prototype.ngOnInit = function () { };
    ProductSaleListComponent.prototype.indexPaginationChange = function (valueChange) {
        this.onIndexPaginationChange.emit(valueChange);
    };
    ProductSaleListComponent.prototype.changed = function (selectElement) {
        this.onChanged.emit(selectElement);
    };
    ProductSaleListComponent.prototype.previousPage = function () {
        this.onPreviousPage.emit();
    };
    ProductSaleListComponent.prototype.nextPage = function () {
        this.onNextPage.emit();
    };
    ProductSaleListComponent.prototype.firstPage = function () {
        this.onFirstPage.emit();
    };
    ProductSaleListComponent.prototype.lastPage = function () {
        this.onLastPage.emit();
    };
    ProductSaleListComponent.prototype.addToCart = function (product) {
        // deconstructing object: TODO <= need to read :))
        /* --> SET pendingOrder INTO LOCAL STORAGE */
        var id = product.id, name = product.name, priceUnit = product.priceUnit, discountPercent = product.discountPercent, thumbnail = product.thumbnail;
        var value = {
            id: id,
            productName: name,
            thumbnail: thumbnail,
            discountPercent: discountPercent,
            priceUnit: priceUnit,
            totalPrice: 0,
            quantity: 1
        };
        if (localStorage.getItem('pendingOrders') !== null) {
            var pendingOrders = JSON.parse(localStorage.getItem('pendingOrders') || '');
            var foundOrder = pendingOrders.find(function (order) { return order.id === id; });
            if (foundOrder) {
                foundOrder.quantity = foundOrder.quantity + 1;
            }
            else {
                pendingOrders.push(value);
            }
            localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
            /*  end <-- */
        }
        else {
            var pendingOrders = [];
            pendingOrders.push(value);
            localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
        }
        /* CHANGE STATE */
        this.store.dispatch(orders_actions_1.addProductIntoOrder());
        alert("Đã thêm vào giỏ hàng");
    };
    __decorate([
        core_1.Input()
    ], ProductSaleListComponent.prototype, "allSaleProducts");
    __decorate([
        core_1.Input()
    ], ProductSaleListComponent.prototype, "saleProducts");
    __decorate([
        core_1.Input()
    ], ProductSaleListComponent.prototype, "pagination");
    __decorate([
        core_1.Input()
    ], ProductSaleListComponent.prototype, "sorters");
    __decorate([
        core_1.Input()
    ], ProductSaleListComponent.prototype, "sortCheck");
    __decorate([
        core_1.Input()
    ], ProductSaleListComponent.prototype, "visiblePagesNumber");
    __decorate([
        core_1.Output()
    ], ProductSaleListComponent.prototype, "onChanged");
    __decorate([
        core_1.Output()
    ], ProductSaleListComponent.prototype, "onFirstPage");
    __decorate([
        core_1.Output()
    ], ProductSaleListComponent.prototype, "onLastPage");
    __decorate([
        core_1.Output()
    ], ProductSaleListComponent.prototype, "onPreviousPage");
    __decorate([
        core_1.Output()
    ], ProductSaleListComponent.prototype, "onNextPage");
    __decorate([
        core_1.Output()
    ], ProductSaleListComponent.prototype, "onIndexPaginationChange");
    ProductSaleListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-sale-list',
            templateUrl: './product-sale-list.component.html',
            styleUrls: ['./product-sale-list.component.scss']
        })
    ], ProductSaleListComponent);
    return ProductSaleListComponent;
}());
exports.ProductSaleListComponent = ProductSaleListComponent;
