import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pagination } from 'src/app/core/models/common-models/pagination';
import { PendingOrderItem } from 'src/app/core/models/common-models/pendingOrderItem';
import { Product } from 'src/app/core/models/common-models/product';
import { addProductIntoOrder } from 'src/app/core/store/orders/orders.actions';
import { Sorter } from './common-saleProduct/sorter';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() public allProducts!: Product[];
  @Input() public products!: Product[];
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
  addToCart(product: Product) {
    // deconstructing object: TODO <= need to read :))
    /* --> SET pendingOrder INTO LOCAL STORAGE */
    const { id, name, priceUnit, discountPercent, thumbnail } = product;
    const value: PendingOrderItem = {
      id: id,
      productName: name,
      thumbnail: thumbnail,
      discountPercent: discountPercent,
      priceUnit: priceUnit,
      totalPrice: 0,
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
