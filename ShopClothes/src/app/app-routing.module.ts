import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
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
    path: 'admin/product',
    component: ProductComponent,
  },
  {
    path: 'admin',
    component: CategoryComponent,
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
