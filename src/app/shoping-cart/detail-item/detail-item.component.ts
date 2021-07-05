import { PendingOrderItem } from './../../core/models/common-models/pendingOrderItem';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: [
    '../template/css/style.css',
    '../template/css/custom.css',
    '../template/css/responsive.css',
    '../template/css/bootstrap.min.css',
  ],
})
export class DetailItemComponent implements OnInit {
  @Input()
  pendingOrder: PendingOrderItem | null = null;
  totalPrice!: number;
  constructor() {}
  ngOnInit(): void {
    if(this.pendingOrder !== null){
      const {priceUnit, discountPercent, quantity} = this.pendingOrder;
      this.totalPrice = Math.round((discountPercent * priceUnit * quantity) / 100 / 1000) * 1000;
    }
  }
}
