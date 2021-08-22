import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoriteProduct } from '../core/models/common-models/favorite';
import { PendingOrderItem } from '../core/models/common-models/pendingOrderItem';
import { Products } from '../core/models/common-models/product';
import { addProductIntoFavorite, removeFavorite } from '../core/store/favorite/favorite.actions';
import { favoriteReducer } from '../core/store/favorite/favorite.reducers';
import { pendingFavoriteSelection } from '../core/store/favorite/favorite.selector';
import { FavoriteState } from '../core/store/favorite/favorite.state';
import { removeOrderProcess } from '../core/store/order-process/order-process.actions';
import { addProductIntoOrder, removeOrder } from '../core/store/orders/orders.actions';
import { pendingOrdersSelection } from '../core/store/orders/orders.selector';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.scss']
})
export class FavoriteProductComponent implements OnInit {
  title: string = 'SẢN PHẨM YÊU THÍCH';
  backgroundImage: string = "favorite-product.jpg";
  favoriteProduct!: FavoriteProduct[];
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.select(pendingFavoriteSelection).subscribe((favorite) => {
      this.updateTotalPrice(favorite);
    });
  }
  updateTotalPrice(favorite: FavoriteProduct[]){
    this.favoriteProduct = favorite.map((item) => ({
      ...item,
      totalPrice:
        Math.round(
          ((100-item.discountPercent) * item.priceUnit * item.quantity) / 100 / 1000
        ) * 1000,
    }));
  }


  changeQuantity(pendingFavoriteItem: FavoriteProduct, value: string){
    let favoriteProduct = JSON.parse(
      localStorage.getItem('favoriteProduct') || ''
    ) as FavoriteProduct[];
    const foundFavorite = favoriteProduct.find((order) => order.id === pendingFavoriteItem.id);
    if (foundFavorite) {
      foundFavorite.quantity = Number.parseInt(value);
      console.log(favoriteProduct)
    }
    localStorage.setItem('favoriteProduct', JSON.stringify(favoriteProduct));
    this.store.dispatch(addProductIntoFavorite());
  }

  removePendingFavorite(id: number){
    // let favoriteProduct = JSON.parse(localStorage.getItem('favoriteProduct') || '') as FavoriteProduct[];
    // favoriteProduct = favoriteProduct.filter(item => item.id !== id)
    // console.log(favoriteProduct);
    // localStorage.setItem('favoriteProduct', JSON.stringify(favoriteProduct));
    // this.store.dispatch(removeFavorite());

   const index =  this.favoriteProduct.findIndex(e => e.id === id);
    this.favoriteProduct.splice(index,1);

  }

  addToCart(product:FavoriteProduct) {
    // deconstructing object: TODO <= need to read :))
    /* --> SET pendingOrder INTO LOCAL STORAGE */
    const { id, productName, priceToBuy,priceUnit, discountPercent, thumbnail,brand} = product;
    const value: PendingOrderItem = {
      id: id,
      productName: productName,
      thumbnail: thumbnail,
      discountPercent: discountPercent,
      priceUnit: priceUnit,
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



}
