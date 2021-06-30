import { getUsernameEmpty, checkUserInf } from './../core/store/user-login/user-login.action';
import { forkJoin, Observable } from 'rxjs';
import {  checkPassword, checkUsername } from '../core/store/user-login/user-login.action';
import { checkLogin } from './../core/store/login/login.action';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { LoginState } from './../core/store/login/login.state';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { featureUserLogin, userSelection, userUsernameSelection } from '../core/store/user-login/user-login.selector';
import { User } from '../core/models/user.model';
import { userUsernameSelector } from '../core/store/login/login.selector';
import { MyServerHttpService } from '../Services/my-server-http-service.service';
/* import { getLogin } from './../core/store/login/login.selector' */
interface UserLoginVm{
  user: User | null;
  status: string;
  mess: string
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
  vm: UserLoginVm = {
    user: null,
    status: '',
    mess: '',
  };
  constructor(private store: Store<AppState>, private router: Router, private httpService: MyServerHttpService) {}
  ngOnInit(): void {
  }
  onSubmit() {
    this.checkUserInfo(this.profileForm.value['username'],this.profileForm.value['password'])
  }

  checkLoginState(){
    
  }

  checkUserInfo(username: string, password: string){
    forkJoin([
      this.httpService.checkUsername(username),
      this.httpService.checkUserInfo(username, password),
    ]).subscribe(([data1, data2]) => {
      if (data1.length === 1 && data2.length === 1) {
        return this.store.dispatch(
          checkUserInf({ user: data2[0], mess: 'Đăng nhập thành công' })
        );
      }
      if (data1.length === 0) {
        return this.store.dispatch(
          checkUserInf({ user: data1[0], mess: 'Username is not exist' })
        );
      }
      if (data2.length === 0) {
        return this.store.dispatch(
          checkUserInf({ user: data1[0], mess: 'Password is incorrect' })
        );
      }
    });
   }
}
