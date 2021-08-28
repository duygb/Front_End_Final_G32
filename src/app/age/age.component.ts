import { Component, OnInit } from '@angular/core';
import {SaleProduct} from "../core/models/common-models/sale-product";
import {Sorter} from "../product-sale/product-sale-list/common-saleProduct/sorter";
import {Pagination} from "../core/models/common-models/pagination";
import {Age} from "../product-sale/sidebar/common/age";
import {Sex} from "../product-sale/sidebar/common/sex";
import {Brand} from "../product-sale/sidebar/common/brand";
import {MyServerHttpService} from "../Services/my-server-http-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}
