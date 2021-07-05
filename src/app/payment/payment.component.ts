import { User } from './../core/models/user/user.model';
import { userSelection } from 'src/app/core/store/auth/login.selector';
import { Store } from '@ngrx/store';
import { PendingOrderItem } from 'src/app/core/models/common-models/pendingOrderItem';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { pendingOrdersSelection } from '../core/store/orders/orders.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  orders$!: Observable<PendingOrderItem[]>;
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.checkLogin();
    this.orders$ = this.store.select(pendingOrdersSelection);
  }

  checkLogin(){
    this.store.select(userSelection).subscribe(user => {
      if(user !== null){
        this.router.navigate(['/sale-product'])
      }else {
        alert("Vui lòng đăng nhập trước khi thanh toán");
        this.router.navigate(['/login'])
      }
    }).unsubscribe;

  }

}
