import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSaleComponent } from './product-sale/product-sale.component';

const routes: Routes = [{
  path: "sale-product", component: ProductSaleComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
