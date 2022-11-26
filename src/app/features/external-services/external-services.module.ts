import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {ExternalServicesRoutingModule} from "./external-services.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ExternalServicesListComponent} from "./pages/external-services-list/external-services-list.component";
import {ExternalServiceEditComponent} from "./pages/external-service-edit/external-service-edit.component";
import {ExternalServiceRegisterComponent} from "./pages/external-service-register/external-service-register.component";
import {ExternalServicesTableComponent} from "./components/external-services-table/external-services-table.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    ExternalServicesListComponent,
    ExternalServiceEditComponent,
    ExternalServiceRegisterComponent,
    ExternalServicesTableComponent
  ],
  imports: [
    SharedModule,
    ExternalServicesRoutingModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class ExternalServicesModule { }
