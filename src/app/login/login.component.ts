import { forkJoin } from 'rxjs';
import { Store} from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/models/user/user.model';
import { MyServerHttpService } from '../Services/my-server-http-service.service';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { checkUserInfoAC } from '../core/store/auth/login.action';
import { AuthServiceService } from '../Services/UserServices/auth-service.service';
import { Role } from '../core/models/user/role.model';
import { messSelection, userSelection } from '../core/store/auth/login.selector';
/* import { getLogin } from './../core/store/login/login.selector' */
interface UserLoginVm{
  user: User | null;
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
    mess: '',
  };
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private httpService: MyServerHttpService,
    private authService: AuthServiceService
  ) {}
  ngOnInit(): void {
    this.store.select(userSelection).subscribe((data) => {
      this.vm.user = data;
      this.authorize(this.vm.user, this.authService.isAdmin);
    });
    this.store.select(messSelection).subscribe((data) => {
      this.vm.mess = data;
    });

  }

  authorize(user: User | null, isAdmin: boolean) {
    console.log(user,isAdmin);
    if (isAdmin === false && user !== null) {
      this.router.navigate(['/home']);
    } else if(isAdmin === true && user !== null){
      this.router.navigate(['/sale-product']);
    }
  }

  //Login
  checkUser() {
    let userId = localStorage.getItem("userId");
    if(userId === null){
      this.checkUserInfo(
        this.profileForm.value['username'],
        this.profileForm.value['password']
      );
    }
  }

  /* Kiểm tra username & password => dispatch action tương ứng */
  checkUserInfo(username: string, password: string) {
    forkJoin([
      this.httpService.checkUsername(username),
      this.httpService.checkUserInfo(username, password),
    ]).subscribe(([data1, data2]) => {
      if (data1.length === 1 && data2.length === 1) {
        let user: User = data2[0];
        localStorage.setItem('userId', user.id);
        return this.store.dispatch(
          checkUserInfoAC({ user: data2[0], mess: 'Đăng nhập thành công' })
        );
      }
      if (data1.length === 0) {
        return this.store.dispatch(
          checkUserInfoAC({ user: null, mess: 'Username is not exist' })
        );
      }
      if (data2.length === 0) {
        return this.store.dispatch(
          checkUserInfoAC({ user: null, mess: 'Password is incorrect' })
        );
      }
    });
  }
}
