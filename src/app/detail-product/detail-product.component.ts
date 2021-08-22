import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs';
import { DetailProduct } from '../core/models/common-models/detail-product';
import { Products } from '../core/models/common-models/product';
import { MyServerHttpService } from '../Services/my-server-http-service.service';
import { Store } from '@ngrx/store';
import { pendingDetailSelection } from '../core/store/add-detail/add-detail.selector';
import { PendingOrderItem } from '../core/models/common-models/pendingOrderItem';
import { pendingOrdersSelection } from '../core/store/orders/orders.selector';
import { addProductIntoOrder } from '../core/store/orders/orders.actions';
import { FavoriteProduct } from '../core/models/common-models/favorite';
import { addProductIntoFavorite } from '../core/store/favorite/favorite.actions';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {


  @Input() public productDetail!:Products;
  public getSizeProds!: number;
  constructor(private route : ActivatedRoute,
    private router : Router,
    private myServerHttpService : MyServerHttpService,
    private store: Store) {}

  ngOnInit(): void {
    //get product by id
    let id = +this.route.snapshot.params['id'];
    this.myServerHttpService.getProductById(id).subscribe(result => this.productDetail = result);
    // this.setPrice(this.productDetail);
this.productDetail.priceToBuy = this.productDetail.priceToBuy * 1000;
// this.productDetail.priceUnit = this.productDetail.priceUnit * 1000;
  }
  //*1000
  setPrice(products: Products) {
      products.priceUnit *= 1000;
      products.priceToBuy *= 1000;

  }

  //tăng số lượng
  increase(product: Products){
    product.amount +=1;
  }
  //giảm số lượng
  reduce(product: Products){
    if(product.amount>1){
      product.amount -=1;
    }else{
      product.amount;
    }
  }



  updateTotalPrice(orders: PendingOrderItem){
    this.productDetail = orders.map((item: { discountPercent: number; priceUnit: number; quantity: number; }) => ({
      ...item,
      totalPrice:
        Math.round(
          ((100-item.discountPercent) * item.priceUnit * item.quantity) / 100 / 1000) * 1000,}));
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
