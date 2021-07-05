import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';
import * as $ from 'jquery';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { ProductSaleListComponent } from './product-sale/product-sale-list/product-sale-list.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { SidebarComponent } from './product-sale/sidebar/sidebar.component';
import { PaginationComponent } from './pagination/pagination.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgeComponent } from './age/age.component';
import { GenderComponent } from './gender/gender.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { MemberCardListComponent } from './member-card/member-card-list/member-card-list.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from './core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './core/store/auth/login.effect';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ListOrderHistoryComponent } from './order-history/list-order-history/list-order-history.component';
import { ShoppingCartComponent } from './shoping-cart/shopping-cart.component';
import { SummaryBoxComponent } from './shoping-cart/summary-box/summary-box.component';
import { TitleBoxComponent } from './tittle-box/title-box.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductSaleComponent,
    MemberCardComponent,
    ProductSaleListComponent,
    SidebarComponent,
    PaginationComponent,
    AgeComponent,
    GenderComponent,
    ProductNewComponent,
    MemberCardListComponent,
    ForgetPassComponent,
    ResetPassComponent,
    DetailProductComponent,
    LoginComponent,
    OrderHistoryComponent,
    ListOrderHistoryComponent,
    ShoppingCartComponent,
    SummaryBoxComponent,
    TitleBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppBootstrapModule,
    TooltipModule,
    ModalModule,
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([LoginEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
