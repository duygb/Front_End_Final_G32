"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidebarComponent = void 0;
var core_1 = require("@angular/core");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(myHttp) {
        this.myHttp = myHttp;
        this.brands = [];
        this.ages = [];
        this.sexs = [];
        this.allElement = ['brands', 'ages', 'sexs'];
        this.checkAge = [];
        this.searchValue = '';
        this.onClickAge = new core_1.EventEmitter();
        this.onClickSex = new core_1.EventEmitter();
        this.onClickBrand = new core_1.EventEmitter();
        this.onClickSearch = new core_1.EventEmitter();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        /*  this.setData(this.allElement); */
        this.brands = this.setData(this.allElement);
    };
    SidebarComponent.prototype.clickChooseAge = function (id) {
        if (this.checkAge.includes(id)) {
            this.checkAge.splice(id);
            alert('Đã xoá');
            alert(this.checkAge);
        }
        else {
            this.checkAge.push(id);
            alert('Đã thêm');
            alert(this.checkAge);
        }
    };
    SidebarComponent.prototype.setData = function (serverPaths) {
        var _this = this;
        serverPaths.forEach(function (element) {
            if (element === 'brands') {
                _this.myHttp.getAll(element).subscribe(function (data) {
                    _this.brands = data;
                });
            }
            else if (element === 'ages') {
                _this.myHttp.getAll(element).subscribe(function (data) {
                    _this.ages = data;
                });
            }
            else if (element === 'sexs') {
                _this.myHttp.getAll(element).subscribe(function (data) {
                    _this.sexs = data;
                });
            }
        });
    };
    /* -----Sidebar Event----- */
    SidebarComponent.prototype.clickAge = function (ageObject) {
        this.onClickAge.emit(ageObject);
    };
    SidebarComponent.prototype.clickSex = function (sexObject) {
        this.onClickSex.emit(sexObject);
    };
    SidebarComponent.prototype.clickBrand = function (brandObject) {
        this.onClickBrand.emit(brandObject);
    };
    SidebarComponent.prototype.clickSearch = function () {
        this.onClickSearch.emit(this.searchValue);
    };
    __decorate([
        core_1.Output()
    ], SidebarComponent.prototype, "onClickAge");
    __decorate([
        core_1.Output()
    ], SidebarComponent.prototype, "onClickSex");
    __decorate([
        core_1.Output()
    ], SidebarComponent.prototype, "onClickBrand");
    __decorate([
        core_1.Output()
    ], SidebarComponent.prototype, "onClickSearch");
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
