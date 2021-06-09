import { Product } from './../../../common-module/product';
import { Pagination } from './../../../common-module/pagination';
import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
// import { SaleProduct } from 'src/common-module/sale-product';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { Router } from '@angular/router';
import { Sorter } from './common-saleProduct/sorter';

@Component({
  selector: 'app-product-sale-list',
  templateUrl: './product-sale-list.component.html',
  styleUrls: ['./product-sale-list.component.scss'],
})
export class ProductSaleListComponent implements OnInit {
  // @Input() public allSaleProducts!: SaleProduct[];
  // @Input() public saleProducts!: SaleProduct[];
  @Input() public product!: Product[];
  @Input() public pagination!: Pagination;
  @Input() public sorters!: Sorter[];
  @Input() public sortCheck!: any;
  @Input() public visiblePagesNumber!: any;

  @Output() onChanged = new EventEmitter();
  @Output() onFirstPage = new EventEmitter();
  @Output() onLastPage = new EventEmitter();
  @Output() onPreviousPage = new EventEmitter();
  @Output() onNextPage = new EventEmitter();
  @Output() onIndexPaginationChange = new EventEmitter();
  constructor(
    private myServerHttpService: MyServerHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  indexPaginationChange(valueChange: number) {
    this.onIndexPaginationChange.emit(valueChange);
  }
  changed(selectElement: HTMLSelectElement){
    this.onChanged.emit(selectElement);
  }
  previousPage() {
    this.onPreviousPage.emit();
  }
  nextPage() {
    this.onNextPage.emit();
  }
  firstPage() {
    this.onFirstPage.emit();
  }
  lastPage() {
    this.onLastPage.emit();
  }
}
