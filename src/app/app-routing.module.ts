import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { ProductComponent } from './product/product.component';
import { AgeComponent } from './age/age.component';
import { GenderComponent } from './gender/gender.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { LoginComponent } from './login/login.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'product', component:ProductComponent },
  { path: 'age', component:AgeComponent },
  { path: 'gender', component:GenderComponent },
  { path: 'sale-product', component: ProductSaleComponent },
  { path: 'product-new', component:ProductNewComponent },
  /* { path: 'shopping-cart', component: ShoppingCartComponent}, */
  { path: 'member-cart', component: MemberCardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forget-pass', component: ForgetPassComponent},
  { path: 'reset-pass', component: ResetPassComponent},
  { path: 'detail-product', component: DetailProductComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
