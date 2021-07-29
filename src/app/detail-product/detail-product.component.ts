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
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  // productDetail$!: Observer<PendingOrderItem[]>;
  @Input() public productDetail!:Products;

  constructor(private route : ActivatedRoute,
    private router : Router,
    private myServerHttpService : MyServerHttpService,
    private store: Store) {}

  ngOnInit(): void {
    //get product by id
    let id = +this.route.snapshot.params['id'];
    this.myServerHttpService.getProductById(id).subscribe(result => this.productDetail = result);

  }
  setPrice(products: Products[]) {
    products.forEach((product) => {
      product.priceUnit *= 1000;
      product.priceToBuy *= 1000;
    });
  }


}
