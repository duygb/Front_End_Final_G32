import { addProductIntoOrder, updateQuantity } from './../core/store/orders/orders.actions';
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
  orders$!: Observable<PendingOrderItem[]>;
  pendingOrders!: PendingOrderItem[];
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.orders$ = this.store.select(pendingOrdersSelection);
    /* Lấy pendingOrders từ state (initital state này lấy từ storage)*/
    this.store.select(pendingOrdersSelection).subscribe((data) => {
      this.pendingOrders = data.map((item) => ({
        ...item,
        totalPrice:
          Math.round(
            (item.discountPercent * item.priceUnit * item.quantity) / 100 / 1000
          ) * 1000,
      }));

      /* this.pendingOrders = data;
      this.setTotalPrice(this.pendingOrders); */
    });
  }
  change(pendingOrderItem: PendingOrderItem, value: string){
    const pendingOrders = JSON.parse(localStorage.getItem("pendingOrders") || "") as PendingOrderItem[];
    const foundOrder = this.pendingOrders.find(item => item.id === pendingOrderItem.id);
    if(foundOrder){
      foundOrder.quantity = Number.parseInt(value);
      console.log(foundOrder.quantity);
      console.log(pendingOrders);

    }

   /*  console.log(JSON.stringify(pendingOrders));
    localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
    this.store.dispatch(addProductIntoOrder()); */
  }
}
