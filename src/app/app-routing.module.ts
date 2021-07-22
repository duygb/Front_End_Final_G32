import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { AgeComponent } from './age/age.component';
import { GenderComponent } from './gender/gender.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { LoginComponent } from './login/login.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ShoppingCartComponent } from './shoping-cart/shopping-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';
import { OrderProcessComponent } from './order-process/order-process.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'age', component:AgeComponent },
  { path: 'gender', component:GenderComponent },
  { path: 'sale-product', component: ProductSaleComponent },
  { path: 'product-new', component:ProductNewComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'member-cart', component: MemberCardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forget-pass', component: ForgetPassComponent},
  { path: 'reset-pass', component: ResetPassComponent},
  { path: 'product-detail/:id', component: DetailProductComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'favorite-product', component: FavoriteProductComponent},
  { path: 'order-process', component: OrderProcessComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
