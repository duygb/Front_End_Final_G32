import { checkLogin } from './../core/store/login/login.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { LoginState } from './../core/store/login/login.state';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* import { getLogin } from './../core/store/login/login.selector' */
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
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit(): void {
  }
  onSubmit() {
    /* this.store.dispatch(checkLogin({this.profileForm.value['username'], this.profileForm.value['password'] })); */
  }
}
