import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {ProductsRoutingModule} from "./products.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ProductRegisterComponent} from "./pages/product-register/product-register.component";
import {ProductEditComponent} from "./pages/product-edit/product-edit.component";
import {ProductsListComponent} from "./pages/products-list/products-list.component";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    ProductRegisterComponent,
    ProductEditComponent,
    ProductsListComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule { }
