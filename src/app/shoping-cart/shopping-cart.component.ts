import { Component, OnInit } from "@angular/core";
import { MyServerHttpService } from "../Services/my-server-http-service.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [
    './template/css/style.css',
    './template/css/custom.css',
    './template/css/responsive.css',
    './template/css/bootstrap.min.css',
  ],
})
export class ShoppingCartComponent implements OnInit {
  orders: [] = [];
  constructor(private httpService: MyServerHttpService) {}

  /* Flow: add cart -> lấy order từ local storage -> đổi state*/
  ngOnInit(): void {
    let ordersId: string[] = [];
    for (let index = 0; index < localStorage.length; index++) {
      let key = localStorage.key(index);
      if (key?.slice(0, 5) == 'order') {
        let orderId = key?.slice(5);
        ordersId.push(orderId);
      }
    }
    // Lấy orders dựa theo ordersId
    this.httpService.getByIds('saleProducts', ordersId).subscribe((data) => {
      this.orders = data;
    });
  }

  /* orders: */
}
