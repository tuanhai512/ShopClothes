import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './component/category/category.component';

import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { UploadComponent } from './component/upload/upload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './component/menu/menu.component';

import { CenterComponent } from './component/home/center/center.component';
import { HomeComponent } from './component/home/home.component';

import { HeaderHomeComponent } from './component/home/header/header.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LayoutComponent } from './component/login/layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    // ProductDetailsComponent,
    CategoryComponent,
    ProductComponent,
    UploadComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    HomeComponent,
    CartComponent,
 
    HeaderHomeComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
