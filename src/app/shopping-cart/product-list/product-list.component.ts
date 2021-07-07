import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cart } from 'src/common-module/cart';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input()
  cart!: Cart;
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();
  public removeProduct(productID: number): void {
   this.onRemoveProduct.emit(productID);
  }
  public inputQuantity(item: any, inputElement: HTMLInputElement) {
    const value = inputElement.value; //String
    const parseIntValue = parseInt(value);
    if (parseIntValue < 1) {
      inputElement.value = -parseIntValue + '';
    }else if(value.length > 2){
      inputElement.value = value.slice(0,2);
    }
    this.onUpdateQuantity.emit({
      item,
      quantity: parseInt(inputElement.value) || ''
    });
  }
  ngOnInit(): void {
    
  }
}
