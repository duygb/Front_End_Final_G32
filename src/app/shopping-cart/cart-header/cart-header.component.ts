import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {
  @Input() numberItems!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
