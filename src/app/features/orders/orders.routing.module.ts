import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersListComponent} from "./pages/orders-list/orders-list.component";
import {OrderRegisterComponent} from "./pages/order-register/order-register.component";
import {OrderEditComponent} from "./pages/order-edit/order-edit.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersListComponent
  },
  {
    path: 'registrar',
    component: OrderRegisterComponent
  },
  {
    path: ':id',
    component: OrderEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
