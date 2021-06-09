import { Component, OnInit } from '@angular/core';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { Age } from './common/age';
import { Brand } from './common/brand';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  brands!: Brand[];
  ages!: Age[];
  sexs: string[] = ["Con trai","Con gái", "Unisex"];
  constructor(private myHttp: MyServerHttpService) { }

  ngOnInit(): void {
    this.myHttp.getBrands().subscribe((data) => {
      this.brands = data;
    })
    this.myHttp.getAges().subscribe((data) => {
      this.ages = data;
    })
  }

}
