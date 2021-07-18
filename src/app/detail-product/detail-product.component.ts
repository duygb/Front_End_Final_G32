import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailProduct } from '../core/models/common-models/detail-product';
import { Products } from '../core/models/common-models/product';
import { MyServerHttpService } from '../Services/my-server-http-service.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  // param = '';
  // detailProduct?:any;
  // datadetail : any[] = [];
  @Input() public productDetail!: Products;
  // public getid = "";
  // public getname = "";
  constructor(private route : ActivatedRoute,
    private router : Router,
    private myServerHttpService : MyServerHttpService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.myServerHttpService.getProductById(id).subscribe(result => this.productDetail = result);
// this.showDetail();
  }
// public showDetail(){
//   this.route.params.subscribe(data=>{
//     this.param = data['id']
//   })
//   this.myServerHttpService.getId(this.param).subscribe(datadetail => {
//     this.detailProduct = datadetail;
//   })
// }
}
