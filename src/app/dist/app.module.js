"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var store_devtools_1 = require("@ngrx/store-devtools");
var environment_1 = require("../environments/environment");
var store_1 = require("@ngrx/store");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var home_component_1 = require("./home/home.component");
var product_sale_component_1 = require("./product-sale/product-sale.component");
var member_card_component_1 = require("./member-card/member-card.component");
var product_sale_list_component_1 = require("./product-sale/product-sale-list/product-sale-list.component");
var app_bootstrap_module_1 = require("./app-bootstrap.module");
var sidebar_component_1 = require("./product-sale/sidebar/sidebar.component");
var pagination_component_1 = require("./pagination/pagination.component");
var tooltip_1 = require("ngx-bootstrap/tooltip");
var modal_1 = require("ngx-bootstrap/modal");
var age_component_1 = require("./age/age.component");
var gender_component_1 = require("./gender/gender.component");
var product_new_component_1 = require("./product-new/product-new.component");
var member_card_list_component_1 = require("./member-card/member-card-list/member-card-list.component");
var forget_pass_component_1 = require("./forget-pass/forget-pass.component");
var reset_pass_component_1 = require("./reset-pass/reset-pass.component");
var detail_product_component_1 = require("./detail-product/detail-product.component");
var login_component_1 = require("./login/login.component");
var core_module_1 = require("./core/core.module");
var effects_1 = require("@ngrx/effects");
var login_effect_1 = require("./core/store/auth/login.effect");
var order_history_component_1 = require("./order-history/order-history.component");
var list_order_history_component_1 = require("./order-history/list-order-history/list-order-history.component");
var shopping_cart_component_1 = require("./shoping-cart/shopping-cart.component");
var summary_box_component_1 = require("./shoping-cart/summary-box/summary-box.component");
var title_box_component_1 = require("./tittle-box/title-box.component");
var payment_component_1 = require("./payment/payment.component");
var product_component_1 = require("./product/product.component");
var product_list_component_1 = require("./product/product-list/product-list.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                product_sale_component_1.ProductSaleComponent,
                member_card_component_1.MemberCardComponent,
                product_sale_list_component_1.ProductSaleListComponent,
                sidebar_component_1.SidebarComponent,
                pagination_component_1.PaginationComponent,
                age_component_1.AgeComponent,
                gender_component_1.GenderComponent,
                product_new_component_1.ProductNewComponent,
                member_card_list_component_1.MemberCardListComponent,
                forget_pass_component_1.ForgetPassComponent,
                reset_pass_component_1.ResetPassComponent,
                detail_product_component_1.DetailProductComponent,
                login_component_1.LoginComponent,
                order_history_component_1.OrderHistoryComponent,
                list_order_history_component_1.ListOrderHistoryComponent,
                shopping_cart_component_1.ShoppingCartComponent,
                summary_box_component_1.SummaryBoxComponent,
                title_box_component_1.TitleBoxComponent,
                payment_component_1.PaymentComponent,
                product_component_1.ProductComponent,
                product_list_component_1.ProductListComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_bootstrap_module_1.AppBootstrapModule,
                tooltip_1.TooltipModule,
                modal_1.ModalModule,
                common_1.CommonModule,
                forms_2.ReactiveFormsModule,
                core_module_1.CoreModule,
                store_1.StoreModule.forRoot({}, {}),
                store_devtools_1.StoreDevtoolsModule.instrument({
                    maxAge: 25,
                    logOnly: environment_1.environment.production
                }),
                effects_1.EffectsModule.forRoot([login_effect_1.LoginEffects]),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
