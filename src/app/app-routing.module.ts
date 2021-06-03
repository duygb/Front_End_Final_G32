import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { AgeComponent } from './age/age.component';
import { GenderComponent } from './gender/gender.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { TrademarkComponent } from './trademark/trademark.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'product', component:ProductComponent },
  { path: 'age', component:AgeComponent },
  { path: 'gender', component:GenderComponent },
  { path: 'sale-product', component: ProductSaleComponent },
  { path: 'product-new', component:ProductNewComponent },
  { path: 'trademark', component:TrademarkComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
