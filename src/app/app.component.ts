import { HttpClient } from '@angular/common/http';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { Component } from '@angular/core';
import { ProductSaleComponent } from './product-sale/product-sale.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToyStore';
}
