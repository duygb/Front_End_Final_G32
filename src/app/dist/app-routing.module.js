"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var home_component_1 = require("./home/home.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_sale_component_1 = require("./product-sale/product-sale.component");
var age_component_1 = require("./age/age.component");
var gender_component_1 = require("./gender/gender.component");
var product_new_component_1 = require("./product-new/product-new.component");
var member_card_component_1 = require("./member-card/member-card.component");
var login_component_1 = require("./login/login.component");
var forget_pass_component_1 = require("./forget-pass/forget-pass.component");
var reset_pass_component_1 = require("./reset-pass/reset-pass.component");
var detail_product_component_1 = require("./detail-product/detail-product.component");
var order_history_component_1 = require("./order-history/order-history.component");
var shopping_cart_component_1 = require("./shoping-cart/shopping-cart.component");
var payment_component_1 = require("./payment/payment.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    /* { path: 'product', component:ProductComponent }, */
    { path: 'age', component: age_component_1.AgeComponent },
    { path: 'gender', component: gender_component_1.GenderComponent },
    { path: 'sale-product', component: product_sale_component_1.ProductSaleComponent },
    { path: 'product-new', component: product_new_component_1.ProductNewComponent },
    { path: 'shopping-cart', component: shopping_cart_component_1.ShoppingCartComponent },
    { path: 'member-cart', component: member_card_component_1.MemberCardComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'forget-pass', component: forget_pass_component_1.ForgetPassComponent },
    { path: 'reset-pass', component: reset_pass_component_1.ResetPassComponent },
    { path: 'detail-product', component: detail_product_component_1.DetailProductComponent },
    { path: 'order-history', component: order_history_component_1.OrderHistoryComponent },
    { path: 'payment', component: payment_component_1.PaymentComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
