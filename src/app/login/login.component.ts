import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from './models/User';
import * as userLogins from './../../app/login/action/userAction';
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
  isCheckLogin:boolean = false;
  dataLogin = [
    {
      "id":1,
      "name":"NGUYEN THANH HOA",
      "username":"user",
      "password":"123",
      "remember_token":''
  },
  {
      "id":2,
      "name":"ADMIN",
      "username":"admin",
      "password":"123",
      "remember_token":''
  }

  ]
  constructor(private store: Store<User>, private router:Router) {}
  onSubmit() {
    this.dataLogin.filter((item) => {
      if (
        item.username == this.profileForm.value['username'] &&
        item.password == this.profileForm.value['password']
      ) {
        this.isCheckLogin = true;
        this.store.dispatch(
          new userLogins.CheckLoginAction({
            id: item.id,
            name: item.name,
            username: item.username,
            password: item.password,
            remember_token: item.remember_token,
          })
        );
      }
    });

    if (this.isCheckLogin) {
      alert("Đăng nhập thành công")
      this.router.navigate(['/product']);
    } else {
      alert("Đăng nhập thất bại")
      console.log('Fail login');
    }
  }


  ngOnInit(): void {}
}

