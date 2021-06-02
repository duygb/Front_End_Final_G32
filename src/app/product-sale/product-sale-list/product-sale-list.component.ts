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
  public pagination: Pagination = {
    indexPagination: 1,
    totalPagination: 0,
    limitPagination: 6,
    visiblePage: 3
  };
  visiblePagesNumber: number[] = this.createVisiblePage();
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

  addToCart(item: SaleProduct) {
    this.myServerHttpService.addToCart(item);
    this.router.navigate(['shopping-cart']);
  }
  indexPaginationChange(value: number){
    this.pagination.indexPagination = value;
    this.myServerHttpService.getSaleProductList(this.pagination.indexPagination,this.pagination.limitPagination).subscribe((data) => {
      this.saleProducts = data;
      console.log(data);
      this.visiblePagesNumber = this.createVisiblePage();
      this.router.navigate(['sale-product']);
    })
  }
  createVisiblePage(): number[]{
    let result = [];
    for (let index = 0; index < this.pagination.visiblePage; index++) {
      result[index] = index + this.pagination.indexPagination;
    }
    console.log(result);
    return result;
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
