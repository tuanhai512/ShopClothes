import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './component/category/category.component';
import {  HomeComponent } from './component/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductItemComponent } from './component/home/product-item/product-item.component';
import { ProductComponent } from './component/product/product.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: CategoryComponent,
  },
];

@NgModule({
  declarations: [AppComponent, CategoryComponent, HomeComponent, ProductItemComponent, ProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
