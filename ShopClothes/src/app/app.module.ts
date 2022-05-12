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
import { HeaderComponent } from './component/home/header/header.component';
import { FooterComponent } from './component/home/footer/footer.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'admin/product',
    component: ProductComponent,
  },
  {
    path: 'admin',
    component: CategoryComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    UploadComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    HomeComponent,
 
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
