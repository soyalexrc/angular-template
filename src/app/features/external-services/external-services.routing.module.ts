import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExternalServicesListComponent} from "./pages/external-services-list/external-services-list.component";
import {ExternalServiceRegisterComponent} from "./pages/external-service-register/external-service-register.component";
import {ExternalServiceEditComponent} from "./pages/external-service-edit/external-service-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ExternalServicesListComponent
  },
  {
    path: 'registrar',
    component: ExternalServiceRegisterComponent
  },
  {
    path: ':id',
    component: ExternalServiceEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalServicesRoutingModule { }
