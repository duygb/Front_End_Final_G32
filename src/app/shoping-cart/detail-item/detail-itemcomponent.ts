import { Order } from './../../core/models/order/order.model';
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
  order: Order | null = null;

  constructor() {}
  ngOnInit(): void {}
}
