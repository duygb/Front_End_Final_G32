import { pendingOrdersSelection } from './../core/store/orders/orders.selector';
import { AppState } from 'src/app/core/store/app.state';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from '../core/models/user/user.model';
import { logoutAC } from '../core/store/auth/login.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  user!: User | null;
  /* @Output()
  onClickLogout = new EventEmitter(); */
  totalProduct: number = 0;
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit(): void {
    this.store.select(pendingOrdersSelection).subscribe(orders => {
      this.totalProduct = orders.length;
    })
  }

  clickLogout() {
    this.store.dispatch(logoutAC());
    localStorage.removeItem('userId');
    this.user = null;
    this.router.navigate(['/home']);
  }
}
