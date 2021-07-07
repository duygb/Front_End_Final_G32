import { Products } from '../core/models/common-models/product';
import { Pagination } from 'src/app/core/models/common-models/pagination';
import { SaleProduct } from '../core/models/common-models/sale-product';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
 /*  @Output() onFirstPage = new EventEmitter();
  @Output() onNextPage = new EventEmitter();
  @Output() onIndexPaginationChange = new EventEmitter(); */
/*   @Input() allSaleProducts!: SaleProduct[];
  @Input() saleProducts!: SaleProduct[]; */
  @Input() pagination!: Pagination;
  constructor() {
    for (let index = 1; index <= this.pagination.visiblePage; index++) {
    console.log(index);
  }
  console.log(this.pagination.totalPagination);
}
  ngOnInit(): void {
   /*  for (let index = 1; index <= this.pagination.visiblePage; index++) {
      console.log(index);
    }
    console.log(this.pagination.totalPagination); */
  }
 /*  firstPage(){
    this.onFirstPage.emit();
  }
  nextPage(){
    this.onNextPage.emit();
  }
  public indexPaginationChange(index: number){
    this.onIndexPaginationChange.emit(index); */
}
