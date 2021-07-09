import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as jQuery from 'jquery';
import { DetailProduct } from '../core/models/common-models/detail-product';
import { pendingDetailSelection } from '../core/store/add-detail/add-detail.selector';
import { MyServerHttpService } from '../Services/my-server-http-service.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  @Input() public detailProduct!: DetailProduct[];


  constructor(private store: Store) {}

  ngOnInit(): void {
   
  }



}
