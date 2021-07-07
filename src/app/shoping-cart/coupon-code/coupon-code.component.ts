import { MyServerHttpService } from './../../Services/my-server-http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-code',
  templateUrl: './coupon-code.component.html',
  styleUrls: [
    '../template/css/style.css',
    '../template/css/custom.css',
    '../template/css/responsive.css',
    '../template/css/bootstrap.min.css',
  ],
})
export class CouponCodeComponent implements OnInit {
  couponCode: string = "";
  couponValue: string = "";
  constructor(private httpService: MyServerHttpService) {}
  ngOnInit(): void {
    
  }

  applyCoupon(){
  }
  checkCoupon(couponCode: string){
    this.httpService.getCouponByCode(couponCode).subscribe((data) => {
      if (data.length !== 0) {
        this.couponValue = data.value;
      }
    });
  }
}
