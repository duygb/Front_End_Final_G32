import { HttpClient } from '@angular/common/http';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { Component, OnInit } from '@angular/core';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { User } from './core/models/user.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { userSelector } from './core/store/login/login.selector';
import { AppState } from './core/store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user: User | null = {
    id: '',
    username: '',
    password: '',
    fullName: '',
  };
  ngOnInit(): void {
    this.store.select(userSelector).subscribe((data) => {
      this.user = data;
    });
  }
  constructor(
    private store: Store<AppState>,
    private router: Router 
  ) {}
}
