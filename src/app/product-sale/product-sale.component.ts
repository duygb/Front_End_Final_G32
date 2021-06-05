import { Sorter } from './product-sale-list/common-saleProduct/sorter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from 'src/common-module/pagination';
import { SaleProduct } from 'src/common-module/sale-product';
import { MyServerHttpService } from '../Services/my-server-http-service.service';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss'],
})
export class ProductSaleComponent {
  public sorter: Sorter = {
    sortBy: '',
    orderBy: '',
  };
  saleProductSorted!: SaleProduct[];
  constructor(private myHttp: MyServerHttpService) {}
  public getSaleProductSorted(hightToLow: HTMLButtonElement) {
    let value = hightToLow.value;
    this.myHttp
      .getProductsSortBy(value[0],value[1],1,6)
      .subscribe((data) => {
        this.saleProductSorted = data;
        console.log(this.saleProductSorted);
      });
  }
}
