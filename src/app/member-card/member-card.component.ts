
import { Brand } from './common/brand';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  allBrands!: Brand[];
  constructor(private myServerHttpService: MyServerHttpService) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(){
    this.myServerHttpService.getAllBrands().subscribe((data)=>{
      this.allBrands = data as Brand[];
      return this.allBrands;
    })
  }

}
