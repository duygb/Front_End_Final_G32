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
  productID: any;
  productData: any;
  // param = '';
  // detailProduct?:any;
  // datadetail : any[] = [];
  @Input() public productDetail! : Products;
  // public getid = "";
  // public getname = "";
  constructor(private route : ActivatedRoute,
    private router : Router,
    private myServerHttpService : MyServerHttpService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.myServerHttpService.getProductById(id).subscribe(result => this.productDetail = result);
    // this. productID = this.route.snapshot.params['id'];
    // this.loadProductDetails(this.productID);
  }                                      

  // loadProductDetails(productID : Products){
  //   this.myServerHttpService.getProductDetails(productID).subscribe(product => {
  //     this.productData = product;
  //   });
  // }

  // navigation(link:any){
  //   this.router.navigate([link]);
  // }


}
