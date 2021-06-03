import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { ProCodeComponent } from './shopping-cart/pro-code/pro-code.component';
import { SummaryCartComponent } from './shopping-cart/summary-cart/summary-cart.component';
import { ProductSaleListComponent } from './product-sale/product-sale-list/product-sale-list.component';
import { CartHeaderComponent } from './shopping-cart/cart-header/cart-header.component';
import { AgeComponent } from './age/age.component';
import { GenderComponent } from './gender/gender.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { TrademarkComponent } from './trademark/trademark.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductSaleComponent,
    MemberCardComponent,
    ProductSaleListComponent,
    ProductListComponent,
    ProCodeComponent,
    SummaryCartComponent,
    CartHeaderComponent,
    AgeComponent,
    GenderComponent,
    ProductNewComponent,
    TrademarkComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
