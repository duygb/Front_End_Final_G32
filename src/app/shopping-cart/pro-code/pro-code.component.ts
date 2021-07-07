import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-pro-code',
  templateUrl: './pro-code.component.html',
  styleUrls: ['./pro-code.component.scss']
})
export class ProCodeComponent implements OnInit {
  public promoCode = '';
  @Output() onApplyPromoCode = new EventEmitter();
  applyPromoCode() {
    const code = this.promoCode;
    if (code && code.trim() !== '') {
      this.onApplyPromoCode.emit(code);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
