import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { ProCodeComponent } from './shopping-cart/pro-code/pro-code.component';
import { SummaryCartComponent } from './shopping-cart/summary-cart/summary-cart.component';
import { ProductSaleListComponent } from './product-sale/product-sale-list/product-sale-list.component';
import { CartHeaderComponent } from './shopping-cart/cart-header/cart-header.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { SidebarComponent } from './product-sale/sidebar/sidebar.component';
import { TitleBoxComponent } from './product-sale/title-box/title-box.component';
import { PaginationComponent } from './pagination/pagination.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
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
    SidebarComponent,
    TitleBoxComponent,
    PaginationComponent,
    AgeComponent,
    GenderComponent,
    ProductNewComponent,
    TrademarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppBootstrapModule,
    TooltipModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
