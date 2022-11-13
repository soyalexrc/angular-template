import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {ExternalServicesRoutingModule} from "./external-services.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ExternalServicesListComponent} from "./pages/external-services-list/external-services-list.component";
import {ExternalServiceEditComponent} from "./pages/external-service-edit/external-service-edit.component";
import {ExternalServiceRegisterComponent} from "./pages/external-service-register/external-service-register.component";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    ExternalServicesListComponent,
    ExternalServiceEditComponent,
    ExternalServiceRegisterComponent
  ],
  imports: [
    SharedModule,
    ExternalServicesRoutingModule,
  ],
})
export class ExternalServicesModule { }
