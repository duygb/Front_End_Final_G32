import { addProductIntoOrder, removeOrder, updateQuantity } from './../core/store/orders/orders.actions';
import { PendingOrderItem } from './../core/models/common-models/pendingOrderItem';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from "@angular/core";
import { MyServerHttpService } from "../Services/my-server-http-service.service";
import { pendingOrdersSelection } from '../core/store/orders/orders.selector';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [
    './template/css/style.css',
    './template/css/custom.css',
    './template/css/responsive.css',
    './template/css/bootstrap.min.css',
  ],
})
export class ShoppingCartComponent implements OnInit {
  title: string = 'GIỎ HÀNG';
  backgroundImage: string = "cart-bg-title.jpeg";
  pendingOrders!: PendingOrderItem[];
  constructor(private store: Store) {}
  ngOnInit(): void {
    /* this.orders$ = this.store.select(pendingOrdersSelection); */
    /* Lấy pendingOrders từ state (initital state này lấy từ storage)*/
    /* Tính lại totalPrice khi có sự thay đổi quantity */
    this.store.select(pendingOrdersSelection).subscribe((orders) => {
      this.updateTotalPrice(orders);
    });
    /* end */
  }

  updateTotalPrice(orders: PendingOrderItem[]){
    this.pendingOrders = orders.map((item) => ({
      ...item,
      totalPrice:
        Math.round(
          ((100-item.discountPercent) * item.priceUnit * item.quantity) / 100 / 1000
        ) * 1000,
    }));
  }


  changeQuantity(pendingOrderItem: PendingOrderItem, value: string){
    let pendingOrders = JSON.parse(
      localStorage.getItem('pendingOrders') || ''
    ) as PendingOrderItem[];
    const foundOrder = pendingOrders.find((order) => order.id === pendingOrderItem.id);
    if (foundOrder) {
      foundOrder.quantity = Number.parseInt(value);
      console.log(pendingOrders)
    }
    localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
    this.store.dispatch(addProductIntoOrder());
  }
  removePendingOrder(id: string){
    let pendingOrders = JSON.parse(
      localStorage.getItem('pendingOrders') || ''
    ) as PendingOrderItem[];
    /* lọc ra sản phẩm có Id được xoá */
    pendingOrders = pendingOrders.filter(item => item.id !== id)
    console.log(pendingOrders);
    localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
    this.store.dispatch(removeOrder());
  }
}
