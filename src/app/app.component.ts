import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { User } from './core/models/user.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from './core/store/app.state';
import { userSelection } from './core/store/auth/login.selector';
import { checkUserInfoAC } from './core/store/auth/login.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  user: User | null = null;
  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    /* Kiểm tra user đã từng đăng nhập vào ứng dụng chưa */
    if (userId !== null) {
      this.httpService.getById('users', userId).subscribe((data) => {
        this.user = data[0];
        this.store.dispatch(
          checkUserInfoAC({ user: this.user, mess: 'Đăng nhập thành công' })
        );
      });
    } else {
      this.store.select(userSelection).subscribe((data) => {
        this.user = data;
      });
    }
  }

  constructor(private store: Store<AppState>, private router: Router,private httpService: MyServerHttpService,) {}
}
