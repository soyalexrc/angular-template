import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./pages/products-list/products-list.component";
import {ProductRegisterComponent} from "./pages/product-register/product-register.component";
import {ProductEditComponent} from "./pages/product-edit/product-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'registrar',
    component: ProductRegisterComponent
  },
  {
    path: ':id',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
