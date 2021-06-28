import { Observable } from 'rxjs';
import { checkPassword, checkUsername } from './../core/store/user/user-login.action';
import { checkLogin } from './../core/store/login/login.action';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { LoginState } from './../core/store/login/login.state';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userSelection } from '../core/store/user/user-login.selector';
import { User } from '../core/models/user.model';
/* import { getLogin } from './../core/store/login/login.selector' */
interface UserLoginVm{
  user: User,
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  status: string = '';
  vm$!: Observable<UserLoginVm>;
  user!: User;
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit(): void {
  }
  onSubmit() {
    this.store.dispatch(checkUsername({ username: 'huynhgiahuy' }));

    this.store.select(userSelection).subscribe(data => {
      this.user = data as User
      console.log(typeof this.user);
    })
    
    /* this.store.dispatch(checkPassword({,})); */
  }
  
}
