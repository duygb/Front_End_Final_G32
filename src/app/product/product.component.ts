
import { Sorter } from './product-list/common-product/sorter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from 'src/common-module/pagination';
import { SaleProduct } from 'src/common-module/sale-product';
import { MyServerHttpService } from '../Services/my-server-http-service.service';
import { Age } from './sidebar/common/age';
import { Sex } from './sidebar/common/sex';
import { Brand } from './sidebar/common/brand';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public serverPath: string = 'saleProducts';
  public allSaleProducts!: SaleProduct[];
  public saleProducts!: SaleProduct[];
  public paramArray = new Map<Object, Object>();
  public sorters: Sorter[] = [
    { id: 0, sort: '', order: '', value: 'Chọn cách sắp xếp' },
    { id: 1, sort: 'priceToBuy', order: 'desc', value: 'Giá cao đến thấp' },
    { id: 2, sort: 'priceToBuy', order: 'asc', value: 'Giá thấp đến cao' },
    {
      id: 3,
      sort: 'name',
      order: 'asc',
      value: 'Sắp xếp theo tên sản phẩm A-Z',
    },
    {
      id: 4,
      sort: 'name',
      order: 'desc',
      value: 'Sắp xếp theo tên sản phẩm Z-A',
    },
  ];
  public pagination: Pagination = {
    indexPagination: 1,
    totalPagination: 0,
    limitPagination: 6,
    visiblePage: 3,
  };
  sortCheck = {
    sort: '',
    order: '',
  };
  visiblePagesNumber: number[] = [];
  checkAge: Age[] = [];
  checkSex: Sex = {
    id: -1,
    value: '',
  };
  checkBrand: Brand = {
    id: -1,
    name: '',
    sku: '',
  };
  constructor(
    private myServerHttpService: MyServerHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setParamArrayInitial();

    this.myServerHttpService.getAllSaleProducts().subscribe((data) => {
      this.allSaleProducts = data as SaleProduct[];
      console.log(this.pagination);
      this.setPrice(this.allSaleProducts);
      if (this.allSaleProducts.length % this.pagination.limitPagination != 0) {
        this.pagination.totalPagination =
          Math.round(
            this.allSaleProducts.length / this.pagination.limitPagination
          ) + 1;
        this.visiblePagesNumber = this.createVisiblePage(
          this.pagination.indexPagination
        );
      } else {
        this.pagination.totalPagination = Math.round(
          this.allSaleProducts.length / this.pagination.limitPagination
        );
        this.visiblePagesNumber = this.createVisiblePage(
          this.pagination.indexPagination
        );
      }
    });
    this.setSaleProductList(this.serverPath, this.paramArray);
  }

  setPrice(saleProducts: SaleProduct[]) {
    saleProducts.forEach((saleProduct) => {
      saleProduct.basePrice *= 1000;
      saleProduct.priceToBuy *= 1000;
    });
  }
  setSortCheck(newSort: string, newOrder: string) {
    this.sortCheck.sort = newSort;
    this.sortCheck.order = newOrder;
  }
  changed(selected: HTMLSelectElement) {
    alert('Đã sắp xếp!');
    let indexSelected: number = selected.selectedIndex;
    this.sorters.forEach((element) => {
      if (element.id == indexSelected) {
        this.setSortCheck(element.sort, element.order);
      }
    });
    this.pagination.indexPagination = 1;
    this.setParamArray('page', this.pagination.indexPagination);
    this.setParamArray('sort', this.sortCheck.sort);
    this.setParamArray('order', this.sortCheck.order);
    this.setSaleProductList(this.serverPath, this.paramArray);
  }
  indexPaginationChange(valueChange: number) {
    this.pagination.indexPagination = valueChange;
    this.setParamArray('page', this.pagination.indexPagination);
    this.setSaleProductList(this.serverPath, this.paramArray);
  }
  setParamArrayInitial() {
    this.paramArray.set('page', 1);
    this.paramArray.set('limit', this.pagination.limitPagination);
    this.paramArray.set('sort', '');
    this.paramArray.set('order', '');
    this.paramArray.set('checkAgeValue', []);
    this.paramArray.set('checkSex', '');
    this.paramArray.set('checkBrand', '');
    this.paramArray.set('search', '');
  }
  setParamArray(keyParam: Object, valueParam: Object) {
    this.paramArray.set(keyParam, valueParam);
  }
  /* thay đổi danh sách sản phẩm khi có sự thay đổi trên page */
  setSaleProductList(serverPath: string, paramArray: Map<Object, Object>) {
    this.myServerHttpService
      .getItem(serverPath, paramArray)
      .subscribe((data) => {
        this.saleProducts = data as SaleProduct[];
        this.setPrice(this.saleProducts);
        this.router.navigate(['sale-product']);
      });
  }

  addToCart(item: SaleProduct) {
    this.myServerHttpService.addToCart(item);
    this.router.navigate(['shopping-cart']);
  }

  createVisiblePage(valueChange: number): number[] {
    let result = [];
    if (this.pagination.visiblePage / 2 == 0) {
      this.pagination.visiblePage++;
    }
    let middleIndex = this.pagination.visiblePage / 2;
    if (middleIndex % 2 != 0) {
      middleIndex = Math.round(middleIndex) - 1;
    }

    if (this.pagination.indexPagination < this.pagination.totalPagination) {
      for (let index = 0; index < this.pagination.visiblePage; index++) {
        if (this.pagination.indexPagination == 1) {
          result[index] = index + 1;
        } else {
          if (index <= middleIndex) {
            // 3 4 5 6 7
            result[index] =
              valueChange -
              (Math.round(this.pagination.visiblePage / 2) - 1) +
              index;
          } else {
            let temp = 1;
            result[index] = temp++ + valueChange;
          }
        }
      }
    } else {
      for (let index = 0; index < this.pagination.visiblePage; index++) {
        result[index] =
          this.pagination.indexPagination -
          (this.pagination.visiblePage - index) +
          1;
        console.log(result[index]);
      }
    }
    console.log(result);
    return result;
  }
  previousPage() {
    if (this.pagination.indexPagination != 1) {
      this.pagination.indexPagination = this.pagination.indexPagination - 1;
      this.setParamArray('page', this.pagination.indexPagination);
      this.setSaleProductList(this.serverPath, this.paramArray);
    }
  }
  nextPage() {
    if (this.pagination.indexPagination <= this.pagination.visiblePage)
      this.pagination.indexPagination = this.pagination.indexPagination + 1;
    if (this.pagination.indexPagination > this.pagination.totalPagination) {
      this.pagination.indexPagination = this.pagination.indexPagination - 1;
    }
    this.setParamArray('page', this.pagination.indexPagination);
    this.setSaleProductList(this.serverPath, this.paramArray);
  }
  firstPage() {
    this.pagination.indexPagination = 1;
    this.setParamArray('page', this.pagination.indexPagination);
    this.setSaleProductList(this.serverPath, this.paramArray);
  }
  lastPage() {
    this.pagination.indexPagination = this.pagination.totalPagination;
    this.setParamArray('page', this.pagination.indexPagination);
    this.setSaleProductList(this.serverPath, this.paramArray);
  }
  /* SideBar Event */
  public clickAge(ageObject: Age) {
        if (this.checkAge.includes(ageObject)) {
          this.checkAge.splice(ageObject.id);
        } else {
          this.checkAge.push(ageObject);
        }
        this.setParamArray('checkAgeValue', this.checkAge);
        this.setSaleProductList(this.serverPath, this.paramArray);
  }
  public clickSex(sexObject: Sex) {
    this.checkSex = sexObject;
    this.setParamArray('checkSex', this.checkSex.value);
    this.setSaleProductList(this.serverPath, this.paramArray);
  }
  public clickBrand(brandObject: Brand) {
    this.checkBrand = brandObject;
    this.setParamArray('checkBrand', this.checkBrand.name);
    this.setSaleProductList(this.serverPath, this.paramArray);
  }
  public clickSearch(searchValue: string){
    this.setParamArrayInitial();
    this.setParamArray('search',searchValue);
    this.setSaleProductList(this.serverPath, this.paramArray);
  }


}

