import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {OrdersRoutingModule} from "./orders.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {OrdersListComponent} from "./pages/orders-list/orders-list.component";
import {OrderRegisterComponent} from "./pages/order-register/order-register.component";
import {OrderEditComponent} from "./pages/order-edit/order-edit.component";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    OrdersListComponent,
    OrderRegisterComponent,
    OrderEditComponent
  ],
  imports: [
    SharedModule,
    OrdersRoutingModule,
  ],
})
export class OrdersModule { }
