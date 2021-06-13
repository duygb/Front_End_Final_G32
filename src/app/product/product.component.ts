import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private productURL = 'http://localhost:3000/product';
  constructor() { }

  ngOnInit(): void {
  }

}
