import { Pagination } from './../../../common-module/pagination';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SaleProduct } from 'src/common-module/sale-product';

@Component({
  selector: 'app-product-sale-list',
  templateUrl: './product-sale-list.component.html',
  styleUrls: ['./product-sale-list.component.scss']
})
export class ProductSaleListComponent implements OnInit {
  @Input() allSaleProducts!: SaleProduct[];
  @Input() saleProducts!: SaleProduct[];
  @Input() pagination!: Pagination;
  @Output() onAddToCart = new EventEmitter();
  
  public addToCart(item: SaleProduct){
    this.onAddToCart.emit(item);
  }
  ngOnInit(): void {
  }

}
