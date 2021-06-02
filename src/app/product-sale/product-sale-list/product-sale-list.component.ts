import { Product } from './../../../common-module/product';
import { Pagination } from './../../../common-module/pagination';
import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { SaleProduct } from 'src/common-module/sale-product';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-sale-list',
  templateUrl: './product-sale-list.component.html',
  styleUrls: ['./product-sale-list.component.scss']
})
export class ProductSaleListComponent implements OnInit{
  allSaleProducts!: SaleProduct[];
  saleProducts!: SaleProduct[];
  pagination: Pagination = {
    indexPagination: 1,
    totalPagination: 0,
    limitPagination: 6,
    visiblePage: 3
  };
  constructor(
    private myServerHttpService: MyServerHttpService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.myServerHttpService.getSaleProductList(this.pagination.indexPagination,this.pagination.limitPagination).subscribe((data) => {
      this.saleProducts = data as SaleProduct[];
      console.log(this.saleProducts.length);
    });
    this.myServerHttpService.getAllSaleProducts().subscribe((data) => {
      this.allSaleProducts = data as SaleProduct[];

      if((this.allSaleProducts.length % this.pagination.limitPagination) != 0 ){
        this.pagination.totalPagination = (Math.round(this.allSaleProducts.length / this.pagination.limitPagination))  + 1;
        console.log(this.pagination.totalPagination);
      }else {
        this.pagination.totalPagination = (Math.round(this.allSaleProducts.length / this.pagination.limitPagination));
        console.log(this.pagination.totalPagination);
      }
    });
    
  }
  /* ngAfterContentInit(){
    this.saleProducts as SaleProduct[];
    this.allSaleProducts as SaleProduct[];
    let saleProductsLength = this.saleProducts.length;
    let allSaleProductsLength = this.saleProducts.length;
    console.log(saleProductsLength);
    console.log(allSaleProductsLength);
  } */
  addToCart(item: SaleProduct) {
    this.myServerHttpService.addToCart(item);
    this.router.navigate(['shopping-cart']);
  }
  indexPaginationChange(value: number){
    this.pagination.indexPagination = value;
  }
  firstPage(){
    this.pagination.indexPagination = 1;
    this.ngOnInit();
  }
  lastPage(){
    this.pagination.indexPagination = this.pagination.totalPagination;
    this.myServerHttpService.getSaleProductList(this.pagination.indexPagination,this.pagination.limitPagination).subscribe((data) => {
      this.saleProducts = data;
    })
  }
  nextPage(){
    this.pagination.indexPagination = this.pagination.indexPagination + 1;
    if (this.pagination.indexPagination > this.pagination.totalPagination) {
      this.pagination.indexPagination = this.pagination.indexPagination - 1;
    }
    this.myServerHttpService.getSaleProductList(this.pagination.indexPagination,this.pagination.limitPagination).subscribe((data) => {
      this.saleProducts = data;
    })
  }
  previousPage(){
    this.pagination.indexPagination = this.pagination.indexPagination - 1;
    if(this.pagination.indexPagination = 0){
      this.pagination.indexPagination = 1;
      this.ngOnInit();
    }else {
      this.myServerHttpService.getSaleProductList(this.pagination.indexPagination, this.pagination.limitPagination).subscribe((data)=>{
        this.saleProducts = data;
      })
    }
  }

}
