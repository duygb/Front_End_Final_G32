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
  brands: Brand[] = [];
  ages: Age[] = [];
  sexs: Sex[] = [];
  allElement: string[] = ['brands', 'ages', 'sexs'];
  checkAge: number[] = [];
  searchValue: string = '';

  @Output() onClickAge = new EventEmitter();
  @Output() onClickSex = new EventEmitter();
  @Output() onClickBrand = new EventEmitter();
  @Output() onClickSearch = new EventEmitter();

  constructor(private myHttp: MyServerHttpService) {}
  ngOnInit(): void {
    /*  this.setData(this.allElement); */
    this.brands = this.setData(this.allElement);
  }
  public clickChooseAge(id: number) {
    if (this.checkAge.includes(id)) {
      this.checkAge.splice(id);
      alert('Đã xoá');
      alert(this.checkAge);
    } else {
      this.checkAge.push(id);
      alert('Đã thêm');
      alert(this.checkAge);
    }
  }
  public setData(serverPaths: string[]): any {
    serverPaths.forEach((element) => {
      if (element === 'brands') {
        this.myHttp.getAll(element).subscribe((data) => {
          this.brands = data as Brand[];
        });
      } else if (element === 'ages') {
        this.myHttp.getAll(element).subscribe((data) => {
          this.ages = data as Age[];
        });
      } else if (element === 'sexs') {
        this.myHttp.getAll(element).subscribe((data) => {
          this.sexs = data as Sex[];
        });
      }
    });
  }
  /* -----Sidebar Event----- */
  public clickAge(ageObject: Age){
    this.onClickAge.emit(ageObject);
  }
  public clickSex(sexObject: Sex){
    this.onClickSex.emit(sexObject);
  }
  public clickBrand(brandObject: Brand){
    this.onClickBrand.emit(brandObject);
  }
  public clickSearch(){
    alert(this.searchValue);
    this.onClickSearch.emit(this.searchValue);
  }
}
