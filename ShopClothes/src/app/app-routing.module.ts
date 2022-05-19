import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CategoryComponent } from './component/category/category.component';
import { DetailComponent } from './component/home/center/product-detail/product-detail.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { ProductComponent } from './component/product/product.component';

const accountModule = () =>
  import('./component/login/user-routing.module').then(
    (x) => x.UserRoutingModule
  );

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path: 'admin/product',
    component: ProductComponent,
  },
  {
    path: 'admin',
    component: CategoryComponent,
  },
  {  path: 'home',
  component: HomeComponent,
  
  },

    {
      path: 'detail/:id',
      component: DetailComponent,
    },
   
  {
    path: 'menu',
    component: MenuComponent,
  },
  { path: 'login', loadChildren: accountModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
