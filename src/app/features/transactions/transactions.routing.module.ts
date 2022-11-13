import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionsListComponent} from "./pages/transactions-list/transactions-list.component";
import {TransactionRegisterComponent} from "./pages/transaction-register/transaction-register.component";
import {TransactionEditComponent} from "./pages/transaction-edit/transaction-edit.component";

const routes: Routes = [
  {
    path: '',
    component: TransactionsListComponent
  },
  {
    path: 'registrar',
    component: TransactionRegisterComponent
  },
  {
    path: ':id',
    component: TransactionEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
