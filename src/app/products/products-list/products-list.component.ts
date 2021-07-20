import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { DetailProduct } from 'src/app/core/models/common-models/detail-product';
import { Pagination } from 'src/app/core/models/common-models/pagination';
import { PendingOrderItem } from 'src/app/core/models/common-models/pendingOrderItem';
import { Products } from 'src/app/core/models/common-models/product';
import { SaleProduct } from 'src/app/core/models/common-models/sale-product';
import { addProductIntoDetail } from 'src/app/core/store/add-detail/add-detail.action';
import { addProductIntoOrder } from 'src/app/core/store/orders/orders.actions';
import { Router } from '@angular/router';
import { Sorter } from './common-products/sorter';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { Brand } from 'src/app/product-sale/sidebar/common/brand';
import { FavoriteProduct } from 'src/app/core/models/common-models/favorite';
import { addProductIntoFavorite } from 'src/app/core/store/favorite/favorite.actions';


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

   selectedProduct! : Products;
   dataDetail: any[]=[];


  @Output() onChanged = new EventEmitter();
  @Output() onFirstPage = new EventEmitter();
  @Output() onLastPage = new EventEmitter();
  @Output() onPreviousPage = new EventEmitter();
  @Output() onNextPage = new EventEmitter();
  @Output() onIndexPaginationChange = new EventEmitter();

  constructor(private store: Store,
    private router : Router,
    private service : MyServerHttpService) {}

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
  addToCart(product:Products) {
    // deconstructing object: TODO <= need to read :))
    /* --> SET pendingOrder INTO LOCAL STORAGE */
    const { id, name, priceToBuy, discountPercent, thumbnail,brand} = product;
    const value: PendingOrderItem = {
      id: id,
      productName: name,
      thumbnail: thumbnail,
      discountPercent: discountPercent,
      priceUnit: priceToBuy,
      totalPrice: 0,
      brand:brand,
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
  onSelect(product: Products) : void{
    this.selectedProduct = product;
    this.router.navigateByUrl("/product-detail/" + product.id);
  }
  addToFavorite(product:Products) {
    // deconstructing object: TODO <= need to read :))
    /* --> SET pendingOrder INTO LOCAL STORAGE */
    const { id, name, priceToBuy, discountPercent, thumbnail,brand,SKU,quantity} = product;
    const value: FavoriteProduct = {
      id: id,
      productName: name,
      thumbnail: thumbnail,
      discountPercent: discountPercent,
      priceUnit: priceToBuy,
      totalPrice: 0,
      brand:brand,
      quantity: 1,
      SKU:SKU,
      again:quantity,

    };
    if (localStorage.getItem('pendingFavorite') !== null) {
      const pendingFavorite = JSON.parse(
        localStorage.getItem('pendingFavorite') || ''
      ) as FavoriteProduct[];
      const foundFavorite = pendingFavorite.find((order) => order.id === id);
      if (foundFavorite) {
        foundFavorite.quantity = foundFavorite.quantity + 1;
      } else {
        pendingFavorite.push(value);
      }
      localStorage.setItem('pendingFavorite', JSON.stringify(pendingFavorite));
      /*  end <-- */
    } else {
      const pendingFavorite: FavoriteProduct[] = [];
      pendingFavorite.push(value);
      localStorage.setItem('pendingFavorite', JSON.stringify(pendingFavorite));
    }
    /* CHANGE STATE */
    this.store.dispatch(addProductIntoFavorite());
    alert("Đã thêm vào sản phẩm yêu thích")
  }
}
