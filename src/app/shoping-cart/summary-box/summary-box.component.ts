import { data } from 'jquery';
import { pendingOrdersSelection } from './../../core/store/orders/orders.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { PendingOrderItem } from 'src/app/core/models/common-models/pendingOrderItem';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { Coupon } from 'src/app/core/models/coupon/coupon';
import { SummaryCart } from 'src/app/core/models/common-models/summaryCart';
import { User } from 'src/app/core/models/user/user.model';
import { userSelection } from 'src/app/core/store/auth/login.selector';

@Component({
  selector: 'app-summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: [
    '../template/css/style.css',
    '../template/css/custom.css',
    '../template/css/responsive.css',
    '../template/css/bootstrap.min.css',
  ],
})
export class SummaryBoxComponent implements OnInit {
  /* Refactor
  @Input()
  orders: PendingOrderItem[] | null = []; */
  orders: PendingOrderItem[] | null = [];
  couponInput: string = '';
  summaryCart: SummaryCart = {
    subTotal: 0,
    tax: 0,
    grandTotal: 0,
    coupon: {
      id: '',
      code: '',
      value: 0,
    },
  };

  constructor(private httpService: MyServerHttpService, private store: Store) {}
  ngOnInit(): void {
    /* Refactor */
    this.store.select(pendingOrdersSelection).subscribe((orders) => {
      this.orders = orders;
      this.getSummaryCart(this.orders);
    });
  }

  getSummaryCart(orders: PendingOrderItem[]) {
    this.summaryCart.subTotal = 0;
    orders?.forEach((order) => {
      const { priceUnit, discountPercent, quantity } = order;
      this.summaryCart.subTotal +=
        Math.round(((100-discountPercent) * priceUnit * quantity) / 100 / 1000) *
        1000;
    });
    this.getTax(this.summaryCart.subTotal);
    this.getGrandTotal();
  }

  getTax(subTotal: number) {
    if (subTotal > 2000000) {
      this.summaryCart.tax = 50000;
    }
  }
  getGrandTotal() {
    this.summaryCart.grandTotal =
      this.summaryCart.subTotal +
      this.summaryCart.tax -
      this.getCouponInSubTotal(this.summaryCart.subTotal);
  }

  getCouponInSubTotal(subTotal: number): number {
    return (subTotal * this.summaryCart.coupon.value) / 100;
  }

  applyCoupon() {
    this.checkCoupon(this.couponInput);
  }
  checkCoupon(couponCode: string) {
    this.httpService.getCouponByCode(couponCode).subscribe((data) => {
      if (data.length === 1) {
        this.summaryCart.coupon = data[0];
        this.getGrandTotal();
      }
    });
  }

  
}
