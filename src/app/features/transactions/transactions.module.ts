import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {TransactionsRoutingModule} from "./transactions.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {TransactionsListComponent} from "./pages/transactions-list/transactions-list.component";
import {TransactionEditComponent} from "./pages/transaction-edit/transaction-edit.component";
import {TransactionRegisterComponent} from "./pages/transaction-register/transaction-register.component";
import {TransactionsTableComponent} from "./components/transactions-table/transactions-table.component";
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
    TransactionsListComponent,
    TransactionEditComponent,
    TransactionRegisterComponent,
    TransactionsTableComponent
  ],
  imports: [
    SharedModule,
    TransactionsRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
  ],
})
export class TransactionsModule { }
