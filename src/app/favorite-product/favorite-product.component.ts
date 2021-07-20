import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoriteProduct } from '../core/models/common-models/favorite';
import { PendingOrderItem } from '../core/models/common-models/pendingOrderItem';
import { Products } from '../core/models/common-models/product';
import { addProductIntoFavorite, removeFavorite } from '../core/store/favorite/favorite.actions';
import { pendingFavoriteSelection } from '../core/store/favorite/favorite.selector';
import { FavoriteState } from '../core/store/favorite/favorite.state';
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
    ) as PendingOrderItem[];
    const foundFavorite = favoriteProduct.find((order) => order.id === pendingFavoriteItem.id);
    if (foundFavorite) {
      foundFavorite.quantity = Number.parseInt(value);
      console.log(favoriteProduct)
    }
    localStorage.setItem('favoriteProduct', JSON.stringify(favoriteProduct));
    this.store.dispatch(addProductIntoFavorite());
  }
  removePendingFavorite(id: number){
    let favoriteProduct = JSON.parse(
      localStorage.getItem('favoriteProduct') || ''
    ) as FavoriteProduct[];
    /* lọc ra sản phẩm có Id được xoá */
    favoriteProduct = favoriteProduct.filter(item => item.id !== id)
    console.log(favoriteProduct);
    localStorage.setItem('favoriteProduct', JSON.stringify(favoriteProduct));
    this.store.dispatch(removeFavorite());
  }
  
}
