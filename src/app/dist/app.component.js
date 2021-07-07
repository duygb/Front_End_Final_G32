"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var login_selector_1 = require("./core/store/auth/login.selector");
var login_action_1 = require("./core/store/auth/login.action");
var AppComponent = /** @class */ (function () {
    function AppComponent(store, router, httpService) {
        this.store = store;
        this.router = router;
        this.httpService = httpService;
        this.user = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* Kiểm tra user đã từng đăng nhập vào ứng dụng chưa */
        var userId = localStorage.getItem('userId');
        if (userId !== null) {
            this.httpService.getById('users', userId).subscribe(function (data) {
                _this.user = data[0];
                _this.store.dispatch(login_action_1.checkUserInfoAC({ user: _this.user, mess: 'Đăng nhập thành công' }));
            });
        }
        else {
            this.store.select(login_selector_1.userSelection).subscribe(function (data) {
                _this.user = data;
            });
        }
        /* end */
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
