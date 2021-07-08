import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pagination } from 'src/app/core/models/common-models/pagination';
import { PendingOrderItem } from 'src/app/core/models/common-models/pendingOrderItem';
import { Products } from 'src/app/core/models/common-models/product';
import { addProductIntoOrder } from 'src/app/core/store/orders/orders.actions';

import { Sorter } from './common-products/sorter';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() public allProducts!: Products[];
  @Input() public products!: Products[];
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
  constructor(private store: Store) {}

  ngOnInit(): void {}
  indexPaginationChange(valueChange: number) {
    this.onIndexPaginationChange.emit(valueChange);
  }
  changed(selectElement: HTMLSelectElement) {
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
  addToCart(product: Products) {
    // deconstructing object: TODO <= need to read :))
    /* --> SET pendingOrder INTO LOCAL STORAGE */
    const { id, name, priceToBuy, discountPercent, thumbnail } = product;
    const value: PendingOrderItem = {
      id: id,
      productName: name,
      thumbnail: thumbnail,
      discountPercent: discountPercent,
      priceUnit: priceToBuy,
      totalPrice: priceToBuy,
      quantity: 1,
    };
    if (localStorage.getItem('pendingOrders') !== null) {
      const pendingOrders = JSON.parse(
        localStorage.getItem('pendingOrders') || ''
      ) as PendingOrderItem[];
      const foundOrder = pendingOrders.find((order) => order.id === id);
      if (foundOrder) {
        foundOrder.quantity = foundOrder.quantity + 1;
      } else {
        pendingOrders.push(value);
      }
      localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
      /*  end <-- */
    } else {
      const pendingOrders: PendingOrderItem[] = [];
      pendingOrders.push(value);
      localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
    }
    /* CHANGE STATE */
    this.store.dispatch(addProductIntoOrder());
    alert("Đã thêm vào giỏ hàng")
  }



}
