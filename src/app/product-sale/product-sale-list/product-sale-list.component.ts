import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SaleProduct } from 'src/common-module/sale-product';

@Component({
  selector: 'app-product-sale-list',
  templateUrl: './product-sale-list.component.html',
  styleUrls: ['./product-sale-list.component.scss']
})
export class ProductSaleListComponent implements OnInit {
  @Input() saleProducts!: SaleProduct[];
  @Output() onAddToCart = new EventEmitter();
  constructor() { }
  public addToCart(item: any){
    this.onAddToCart.emit(item);
  }
  ngOnInit(): void {
  }

}
