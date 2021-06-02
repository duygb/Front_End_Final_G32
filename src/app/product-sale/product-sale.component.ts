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
export class ProductSaleComponent implements OnInit {
  allSaleProducts!: SaleProduct[];
  saleProducts!: SaleProduct[];
  pagination: Pagination = {
    indexPagination: 1,
    totalPagination: 0,
    limitPagination: 6,
  };
  constructor(
    private myServerHttpService: MyServerHttpService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.myServerHttpService.getSaleProductList(this.pagination.indexPagination,this.pagination.limitPagination).subscribe((data) => {
      this.saleProducts = data;
    });
    this.myServerHttpService.getAllSaleProducts().subscribe((data) => {
      this.allSaleProducts = data;
    });
    if((this.allSaleProducts.length % this.pagination.limitPagination) != 0 ){
      this.pagination.totalPagination = (Math.round(this.allSaleProducts.length) / this.pagination.limitPagination) + 1;
    }
  }
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
