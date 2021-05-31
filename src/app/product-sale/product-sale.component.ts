import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleProduct } from 'src/common-module/sale-product';
import { MyServiceHttpService } from '../Services/my-service-http.service';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss']
})
export class ProductSaleComponent implements OnInit {
  saleProducts!: SaleProduct[];
  private router!: Router;
  constructor(private MyServerHttpService: MyServiceHttpService) {
    this.MyServerHttpService.getSaleProductList().subscribe((data: SaleProduct[]) => {
      this.saleProducts = data;
    })
   }
  addToCart(item: any){
      this.MyServerHttpService.addToCart(item);
      this.router.navigate(['shopping-cart']);
  }
  ngOnInit(): void {
  }

}
