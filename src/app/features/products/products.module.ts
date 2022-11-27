import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {ProductsRoutingModule} from "./products.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ProductRegisterComponent} from "./pages/product-register/product-register.component";
import {ProductEditComponent} from "./pages/product-edit/product-edit.component";
import {ProductsListComponent} from "./pages/products-list/products-list.component";
import {ProductsTableComponent} from "./components/products-table/products-table.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    ProductRegisterComponent,
    ProductEditComponent,
    ProductsListComponent,
    ProductsTableComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
  ],
})
export class ProductsModule { }
