import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleProduct } from 'src/common-module/sale-product';
import { MyServerHttpService } from '../Services/my-server-http-service.service';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss']
})
export class ProductSaleComponent implements OnInit {
  saleProducts!: SaleProduct[];
  constructor(private myServerHttpService: MyServerHttpService, private router: Router) {
    this.myServerHttpService.getSaleProductList().subscribe((data) => {
      console.log(data);
      this.saleProducts = data;
    })
   }
  addToCart(item: SaleProduct){
      this.myServerHttpService.addToCart(item);
      this.router.navigate(['shopping-cart']);
  }
  ngOnInit(): void {
  }

}
