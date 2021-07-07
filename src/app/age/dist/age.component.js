"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AgeComponent = void 0;
var core_1 = require("@angular/core");
var AgeComponent = /** @class */ (function () {
    function AgeComponent(myServerHttpService, router) {
        this.myServerHttpService = myServerHttpService;
        this.router = router;
        this.serverPath = 'saleProducts';
        this.paramArray = new Map();
        this.sorters = [
            { id: 0, sort: '', order: '', value: 'Chọn cách sắp xếp' },
            { id: 1, sort: 'priceToBuy', order: 'desc', value: 'Giá cao đến thấp' },
            { id: 2, sort: 'priceToBuy', order: 'asc', value: 'Giá thấp đến cao' },
            {
                id: 3,
                sort: 'name',
                order: 'asc',
                value: 'Sắp xếp theo tên sản phẩm A-Z'
            },
            {
                id: 4,
                sort: 'name',
                order: 'desc',
                value: 'Sắp xếp theo tên sản phẩm Z-A'
            },
        ];
        this.pagination = {
            indexPagination: 1,
            totalPagination: 0,
            limitPagination: 6,
            visiblePage: 3
        };
        this.sortCheck = {
            sort: '',
            order: ''
        };
        this.visiblePagesNumber = [];
        this.checkAge = [];
        this.checkSex = {
            id: -1,
            value: ''
        };
        this.checkBrand = {
            id: -1,
            name: '',
            sku: ''
        };
    }
    AgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setParamArrayInitial();
        this.myServerHttpService.getAllSaleProducts().subscribe(function (data) {
            _this.allSaleProducts = data;
            console.log(_this.pagination);
            _this.setPrice(_this.allSaleProducts);
            if (_this.allSaleProducts.length % _this.pagination.limitPagination != 0) {
                _this.pagination.totalPagination =
                    Math.round(_this.allSaleProducts.length / _this.pagination.limitPagination) + 1;
                _this.visiblePagesNumber = _this.createVisiblePage(_this.pagination.indexPagination);
            }
            else {
                _this.pagination.totalPagination = Math.round(_this.allSaleProducts.length / _this.pagination.limitPagination);
                _this.visiblePagesNumber = _this.createVisiblePage(_this.pagination.indexPagination);
            }
        });
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    AgeComponent.prototype.setPrice = function (saleProducts) {
        saleProducts.forEach(function (saleProduct) {
            saleProduct.priceUnit *= 1000;
            saleProduct.priceToBuy *= 1000;
        });
    };
    AgeComponent.prototype.setSortCheck = function (newSort, newOrder) {
        this.sortCheck.sort = newSort;
        this.sortCheck.order = newOrder;
    };
    AgeComponent.prototype.changed = function (selected) {
        var _this = this;
        alert('Đã sắp xếp!');
        var indexSelected = selected.selectedIndex;
        this.sorters.forEach(function (element) {
            if (element.id == indexSelected) {
                _this.setSortCheck(element.sort, element.order);
            }
        });
        this.pagination.indexPagination = 1;
        this.setParamArray('page', this.pagination.indexPagination);
        this.setParamArray('sort', this.sortCheck.sort);
        this.setParamArray('order', this.sortCheck.order);
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    AgeComponent.prototype.indexPaginationChange = function (valueChange) {
        this.pagination.indexPagination = valueChange;
        this.setParamArray('page', this.pagination.indexPagination);
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    AgeComponent.prototype.setParamArrayInitial = function () {
        this.paramArray.set('page', 1);
        this.paramArray.set('limit', this.pagination.limitPagination);
        this.paramArray.set('sort', '');
        this.paramArray.set('order', '');
        this.paramArray.set('checkAgeValue', []);
        this.paramArray.set('checkSex', '');
        this.paramArray.set('checkBrand', '');
        this.paramArray.set('search', '');
    };
    AgeComponent.prototype.setParamArray = function (keyParam, valueParam) {
        this.paramArray.set(keyParam, valueParam);
    };
    /* thay đổi danh sách sản phẩm khi có sự thay đổi trên page */
    AgeComponent.prototype.setSaleProductList = function (serverPath, paramArray) {
        var _this = this;
        this.myServerHttpService
            .getItem(serverPath, paramArray)
            .subscribe(function (data) {
            _this.saleProducts = data;
            _this.setPrice(_this.saleProducts);
            _this.router.navigate(['sale-product']);
        });
    };
    AgeComponent.prototype.addToCart = function (item) {
        this.myServerHttpService.addToCart(item);
        this.router.navigate(['shopping-cart']);
    };
    AgeComponent.prototype.createVisiblePage = function (valueChange) {
        var result = [];
        if (this.pagination.visiblePage / 2 == 0) {
            this.pagination.visiblePage++;
        }
        var middleIndex = this.pagination.visiblePage / 2;
        if (middleIndex % 2 != 0) {
            middleIndex = Math.round(middleIndex) - 1;
        }
        if (this.pagination.indexPagination < this.pagination.totalPagination) {
            for (var index = 0; index < this.pagination.visiblePage; index++) {
                if (this.pagination.indexPagination == 1) {
                    result[index] = index + 1;
                }
                else {
                    if (index <= middleIndex) {
                        // 3 4 5 6 7
                        result[index] =
                            valueChange -
                                (Math.round(this.pagination.visiblePage / 2) - 1) +
                                index;
                    }
                    else {
                        var temp = 1;
                        result[index] = temp++ + valueChange;
                    }
                }
            }
        }
        else {
            for (var index = 0; index < this.pagination.visiblePage; index++) {
                result[index] =
                    this.pagination.indexPagination -
                        (this.pagination.visiblePage - index) +
                        1;
                console.log(result[index]);
            }
        }
        console.log(result);
        return result;
    };
    AgeComponent.prototype.previousPage = function () {
        if (this.pagination.indexPagination != 1) {
            this.pagination.indexPagination = this.pagination.indexPagination - 1;
            this.setParamArray('page', this.pagination.indexPagination);
            this.setSaleProductList(this.serverPath, this.paramArray);
        }
    };
    AgeComponent.prototype.nextPage = function () {
        if (this.pagination.indexPagination <= this.pagination.visiblePage)
            this.pagination.indexPagination = this.pagination.indexPagination + 1;
        if (this.pagination.indexPagination > this.pagination.totalPagination) {
            this.pagination.indexPagination = this.pagination.indexPagination - 1;
        }
        this.setParamArray('page', this.pagination.indexPagination);
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    AgeComponent.prototype.firstPage = function () {
        this.pagination.indexPagination = 1;
        this.setParamArray('page', this.pagination.indexPagination);
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    AgeComponent.prototype.lastPage = function () {
        this.pagination.indexPagination = this.pagination.totalPagination;
        this.setParamArray('page', this.pagination.indexPagination);
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    /* SideBar Event */
    AgeComponent.prototype.clickAge = function (ageObject) {
        if (this.checkAge.includes(ageObject)) {
            this.checkAge.splice(ageObject.id);
        }
        else {
            this.checkAge.push(ageObject);
        }
        this.setParamArray('checkAgeValue', this.checkAge);
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    AgeComponent.prototype.clickSex = function (sexObject) {
        this.checkSex = sexObject;
        this.setParamArray('checkSex', this.checkSex.value);
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    AgeComponent.prototype.clickBrand = function (brandObject) {
        this.checkBrand = brandObject;
        this.setParamArray('checkBrand', this.checkBrand.name);
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    AgeComponent.prototype.clickSearch = function (searchValue) {
        this.setParamArrayInitial();
        this.setParamArray('search', searchValue);
        this.setSaleProductList(this.serverPath, this.paramArray);
    };
    AgeComponent = __decorate([
        core_1.Component({
            selector: 'app-age',
            templateUrl: './age.component.html',
            styleUrls: ['./age.component.scss']
        })
    ], AgeComponent);
    return AgeComponent;
}());
exports.AgeComponent = AgeComponent;
