import { Product } from './../../../common-module/product';
import { Pagination } from './../../../common-module/pagination';
import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { SaleProduct } from 'src/common-module/sale-product';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { Router } from '@angular/router';
import { Sorter } from './common-saleProduct/sorter';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-sale-list',
  templateUrl: './product-sale-list.component.html',
  styleUrls: ['./product-sale-list.component.scss'],
})
export class ProductSaleListComponent implements OnInit {
  public allSaleProducts!: SaleProduct[];
  public saleProducts!: SaleProduct[];
  public pagination: Pagination = {
    indexPagination: 1,
    totalPagination: 0,
    limitPagination: 6,
    visiblePage: 3,
  };
  public sorters: Sorter[] = [
    { id: 0, sort: '', order: '', value: 'Chọn cách sắp xếp' },
    { id: 1, sort: 'priceToBuy', order: 'desc', value: 'Giá cao đến giá thấp' },
    { id: 2, sort: 'priceToBuy', order: 'asc', value: 'Giá thấp đến giá cao' },
  ];
  sortCheck = {
    sort: '',
    order: '',
  };

  visiblePagesNumber: number[] = [];

  constructor(
    private myServerHttpService: MyServerHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myServerHttpService.getAllSaleProducts().subscribe((data) => {
      this.allSaleProducts = data as SaleProduct[];
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

    if (this.sortCheck.sort == '' && this.sortCheck.order == '') {
      this.setSaleProductList();
    }
  }

  setSortCheck(newSort: string, newOrder: string) {
    this.sortCheck.sort = newSort;
    this.sortCheck.order = newOrder;
  }
  setPrice(saleProducts: SaleProduct[]) {
    saleProducts.forEach((saleProduct) => {
      saleProduct.basePrice *= 1000;
      saleProduct.priceToBuy *= 1000;
    });
  }

  setSaleProductList() {
    this.myServerHttpService
      .getSaleProductsList(
        this.pagination.indexPagination,
        this.pagination.limitPagination
      )
      .subscribe((data) => {
        this.saleProducts = data as SaleProduct[];
        this.setPrice(this.saleProducts);
        this.router.navigate(['sale-product']);
      });
  }

  setSaleProductSorted(
    sort: string,
    order: string,
    indexPagination: number,
    limit: number
  ) {
    this.myServerHttpService
      .getProductsSortBy(sort, order, indexPagination, limit)
      .subscribe((data) => {
        this.saleProducts = data as SaleProduct[];
        this.setPrice(this.saleProducts);
        this.router.navigate(['sale-product']);
      });
  }

  changed(selected: HTMLSelectElement) {
    alert(selected.selectedIndex);
    let indexSelected: number = selected.selectedIndex;
    this.getSaleProductsSorted(indexSelected);
  }

  checkSorter(){
    if (this.sortCheck.sort == '' && this.sortCheck.order == '') {
      this.setSaleProductList();
    } else {
      this.setSaleProductSorted(
        this.sortCheck.sort,
        this.sortCheck.order,
        this.pagination.indexPagination,
        this.pagination.limitPagination
      );
    }
  }

  getSaleProductsSorted(indexSelected: number) {
    this.pagination.indexPagination = 1;
    if (indexSelected === 0) {
      this.setSortCheck('', '');
      this.setSaleProductList();
    } else {
      this.sorters.forEach((sort) => {
        if (sort.id === indexSelected) {
          this.setSortCheck(sort.sort, sort.order);
          this.setSaleProductSorted(
            this.sortCheck.sort,
            this.sortCheck.order,
            this.pagination.indexPagination,
            this.pagination.limitPagination
          );
        }
      });
    }
  }

  addToCart(item: SaleProduct) {
    this.myServerHttpService.addToCart(item);
    this.router.navigate(['shopping-cart']);
  }

  indexPaginationChange(valueChange: number) {
    this.pagination.indexPagination = valueChange;
    this.checkSorter();
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
      this.checkSorter();
    }
  }
  firstPage() {
    this.pagination.indexPagination = 1;
    this.ngOnInit();
  }
  lastPage() {
    this.pagination.indexPagination = this.pagination.totalPagination;
    this.myServerHttpService
      .getSaleProductsList(
        this.pagination.indexPagination,
        this.pagination.limitPagination
      )
      .subscribe((data) => {
        this.saleProducts = data;
      });
  }
  nextPage() {
    if (this.pagination.indexPagination <= this.pagination.visiblePage)
      this.pagination.indexPagination = this.pagination.indexPagination + 1;
    if (this.pagination.indexPagination > this.pagination.totalPagination) {
      this.pagination.indexPagination = this.pagination.indexPagination - 1;
    }
    this.checkSorter();
  }
}
