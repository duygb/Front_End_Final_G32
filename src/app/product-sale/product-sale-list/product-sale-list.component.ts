import { Pagination } from 'src/common-module/pagination';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { SaleProduct } from 'src/common-module/sale-product';
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
  visiblePagesNumber: number[] = [];
  constructor(
    private myServerHttpService: MyServerHttpService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.myServerHttpService.getSaleProductList(this.pagination.indexPagination,this.pagination.limitPagination).subscribe((data) => {
      this.saleProducts = data as SaleProduct[];
      console.log(this.saleProducts.length);
    });
    this.myServerHttpService.getAllSaleProducts().subscribe((data) => {
      this.allSaleProducts = data as SaleProduct[];

      if((this.allSaleProducts.length % this.pagination.limitPagination) != 0 ){
        this.pagination.totalPagination = (Math.round(this.allSaleProducts.length / this.pagination.limitPagination))  + 1;
        this.visiblePagesNumber = this.createVisiblePage(this.pagination.indexPagination);
        console.log(this.pagination.totalPagination);
      }else {
        this.pagination.totalPagination = (Math.round(this.allSaleProducts.length / this.pagination.limitPagination));
        this.visiblePagesNumber = this.createVisiblePage(this.pagination.indexPagination);
        console.log(this.pagination.totalPagination);
      }
    });
  }

  addToCart(item: SaleProduct) {
    this.myServerHttpService.addToCart(item);
    this.router.navigate(['shopping-cart']);
  }
  indexPaginationChange(valueChange: number){
    this.pagination.indexPagination = valueChange;
    this.myServerHttpService.getSaleProductList(this.pagination.indexPagination,this.pagination.limitPagination).subscribe((data) => {
      this.saleProducts = data;
      this.visiblePagesNumber = this.createVisiblePage(valueChange);
      this.router.navigate(['sale-product']);
    })
  }
  createVisiblePage(valueChange: number): number[]{
    let result = [];
    if(this.pagination.visiblePage / 2 == 0){
      this.pagination.visiblePage++;
    }
    let middleIndex = this.pagination.visiblePage / 2;
    if (middleIndex % 2 != 0) {
      middleIndex = Math.round(middleIndex) - 1;
    }

    if(this.pagination.indexPagination < this.pagination.totalPagination){
      for (let index = 0; index < this.pagination.visiblePage; index++) {
        if(this.pagination.indexPagination == 1 ){
          result[index] = index + 1;
        }else{
          if(index <= middleIndex){
            // 3 4 5 6 7
            result[index] = valueChange - (Math.round(this.pagination.visiblePage / 2) - 1) + index;
          }else {
            let temp = 1;
            result[index] = temp++ + valueChange;
          }
        }
      }
    }else{
      for (let index = 0; index < this.pagination.visiblePage; index++) {
        result[index] = this.pagination.indexPagination - (this.pagination.visiblePage - index) + 1;
        console.log(result[index]);
      }
    }
    console.log(result);
    return result;
  }
  previousPage(){
    if(this.pagination.indexPagination != 1 ){
      this.pagination.indexPagination = this.pagination.indexPagination - 1;
      this.myServerHttpService.getSaleProductList(this.pagination.indexPagination,this.pagination.limitPagination).subscribe((data) => {
        this.saleProducts = data;
        console.log(data);
        this.visiblePagesNumber = this.createVisiblePage(this.pagination.indexPagination);
        this.router.navigate(['sale-product']);
      })
    }
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
    if(this.pagination.indexPagination <= this.pagination.visiblePage)
    this.pagination.indexPagination = this.pagination.indexPagination + 1;
    if (this.pagination.indexPagination > this.pagination.totalPagination) {
      this.pagination.indexPagination = this.pagination.indexPagination - 1;
    }
    this.myServerHttpService.getSaleProductList(this.pagination.indexPagination,this.pagination.limitPagination).subscribe((data) => {
      this.saleProducts = data;
      this.visiblePagesNumber = this.createVisiblePage(this.pagination.indexPagination);
      this.router.navigate(['sale-product']);
    })
  }

}
