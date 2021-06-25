import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from './models/User';
import * as userLogins from './action/user.action';
import {UserState, getLogin} from './../../app/login/reducers'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

    if (this.isCheckLogin) {
      alert("Đăng nhập thành công")
      this.router.navigate(['/product']);
    } else {
      alert("Đăng nhập thất bại")
      console.log('Fail login');
    }


    
  }

}
