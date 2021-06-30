import { checkLoginFailed } from './../core/store/login/login.action';
import { checkUserInf } from './../core/store/user-login/user-login.action';
import { forkJoin } from 'rxjs';
import { Store} from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  messSelection, userSelection } from '../core/store/user-login/user-login.selector';
import { User } from '../core/models/user.model';
import { MyServerHttpService } from '../Services/my-server-http-service.service';
import { checkLoginSuccess } from '../core/store/login/login.action';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { statusSelector } from '../core/store/login/login.selector';
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
    this.store.select(userSelection).subscribe(data => {
      this.vm.user = data;
      this.checkLoginState(data);
    });
    this.store.select(messSelection).subscribe(data => {
      this.vm.mess = data;
    });
    this.store.select(statusSelector).subscribe(data => {
      this.vm.status = data
    })
    console.log("ngOnInit run")
  }
  onSubmit() {
    this.checkUserInfo(this.profileForm.value['username'],this.profileForm.value['password'])
  }

  /* Kiểm tra username & password => dispatch action tương ứng */
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
        console.log(data1);
        return this.store.dispatch(
          checkUserInf({ user: null, mess: 'Username is not exist' })
        );
      }
      if (data2.length === 0) {
        return this.store.dispatch(
          checkUserInf({ user: null, mess: 'Password is incorrect' })
        );
      }
    });
   }
  /* Kiểm tra trạng thái đăng nhập login hay logout */
  checkLoginState(user: any){
    if(user !== null){
      this.store.dispatch(checkLoginSuccess({user: user}));

      this.router.navigate(['/home'])
    }else {
      this.store.dispatch(checkLoginFailed());
      this.router.navigate(['/login'])
    }
  }
}
