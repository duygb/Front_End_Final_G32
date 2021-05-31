import { Component, Input, OnInit } from '@angular/core';
import { SummaryCart } from 'src/common-module/summary-cart';

@Component({
  selector: 'app-summary-cart',
  templateUrl: './summary-cart.component.html',
  styleUrls: ['./summary-cart.component.scss']
})
export class SummaryCartComponent implements OnInit {
  @Input()
  summaryCart!: SummaryCart;
 
  constructor() { }

  ngOnInit(): void {
  }
  public total(){
    
  }
}
