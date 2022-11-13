import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientEditComponent} from "./pages/client-edit/client-edit.component";
import {ClientsListComponent} from "./pages/clients-list/clients-list.component";
import {ClientRegisterComponent} from "./pages/client-register/client-register.component";

const routes: Routes = [
  {
    path: '',
    component: ClientsListComponent
  },
  {
    path: 'registrar',
    component: ClientRegisterComponent
  },
  {
    path: ':id',
    component: ClientEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
