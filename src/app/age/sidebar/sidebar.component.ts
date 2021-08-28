import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { Age } from './common/age';
import { Brand } from './common/brand';
import { Sex } from './common/sex';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
