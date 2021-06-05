import { Component, Input, OnInit } from '@angular/core';
import { Brand } from '../common/brand';

@Component({
  selector: 'app-member-card-list',
  templateUrl: './member-card-list.component.html',
  styleUrls: ['./member-card-list.component.scss']
})
export class MemberCardListComponent implements OnInit {
  @Input() allBrands!: Brand[];
   constructor() { }

  ngOnInit(): void {
  }

}
