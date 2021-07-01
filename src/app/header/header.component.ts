import { AppState } from 'src/app/core/store/app.state';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { userSelector } from '../core/store/login/login.selector';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  user!: User | null;
  ngOnInit(): void {
  }
  constructor() {}


}
