import { data } from 'jquery';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/core/store/app.state';
import { Role } from 'src/app/core/models/role.model';
import { userSelection } from 'src/app/core/store/auth/login.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  user$!: Observable<User | null>;
  isAdmin: boolean = false;
  constructor(store: Store) {
    this.user$ = store.select(userSelection);
    this.user$.subscribe((data) => {
      this.isAdmin = !!data?.role.find((item) => item.code === 'ADMIN');
    });
  }
}
