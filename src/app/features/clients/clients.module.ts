import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {ClientsRoutingModule} from "./clients.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ClientRegisterComponent} from "./pages/client-register/client-register.component";
import {ClientEditComponent} from "./pages/client-edit/client-edit.component";
import {ClientsListComponent} from "./pages/clients-list/clients-list.component";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    ClientRegisterComponent,
    ClientEditComponent,
    ClientsListComponent
  ],
  imports: [
    SharedModule,
    ClientsRoutingModule,
  ],
})
export class ClientsModule { }
