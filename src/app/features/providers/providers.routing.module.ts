import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProvidersListComponent} from "./pages/providers-list/providers-list.component";
import {ProviderRegisterComponent} from "./pages/provider-register/provider-register.component";
import {ProviderEditComponent} from "./pages/provider-edit/provider-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ProvidersListComponent
  },
  {
    path: 'registrar',
    component: ProviderRegisterComponent
  },
  {
    path: ':id',
    component: ProviderEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
