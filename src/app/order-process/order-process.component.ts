import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderProcess } from '../core/models/common-models/order-process';
import { PendingOrderItem } from '../core/models/common-models/pendingOrderItem';
import { addProductIntoOrderProcess, removeOrderProcess } from '../core/store/order-process/order-process.actions';
import { pendingOrderProcessSelection } from '../core/store/order-process/order-process.selector';
import { pendingOrdersSelection } from '../core/store/orders/orders.selector';

@Component({
  selector: 'app-order-process',
  templateUrl: './order-process.component.html',
  styleUrls: ['./order-process.component.scss']
})
export class OrderProcessComponent implements OnInit {
  title: string = 'TIẾN TRÌNH MUA HÀNG';
  backgroundImage: string = "order-process.jpg";
  orderProcess$!: Observable<PendingOrderItem[]>;
  constructor(private store: Store,
    private router: Router) { }

  ngOnInit(): void {
      this.orderProcess$ = this.store.select(pendingOrdersSelection);
    }
  }



