import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {TransactionsRoutingModule} from "./transactions.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {TransactionsListComponent} from "./pages/transactions-list/transactions-list.component";
import {TransactionEditComponent} from "./pages/transaction-edit/transaction-edit.component";
import {TransactionRegisterComponent} from "./pages/transaction-register/transaction-register.component";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    TransactionsListComponent,
    TransactionEditComponent,
    TransactionRegisterComponent,
  ],
  imports: [
    SharedModule,
    TransactionsRoutingModule,
  ],
})
export class TransactionsModule { }
