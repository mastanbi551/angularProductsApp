import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminProductsEntryComponent } from './admin/admin-products-entry/admin-products-entry.component';
import { AdminProductsListComponent } from './admin/admin-products-list/admin-products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    AdminLoginComponent,
    AdminProductsEntryComponent,
    AdminProductsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'adminLogin', component: AdminLoginComponent},
      {path: 'productsEntry', component: AdminProductsEntryComponent},
      {path: 'admin/products', component: AdminProductsListComponent}
    ])
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
