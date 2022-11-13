import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {ProvidersRoutingModule} from "./providers.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ProvidersListComponent} from "./pages/providers-list/providers-list.component";
import {ProviderRegisterComponent} from "./pages/provider-register/provider-register.component";
import {ProviderEditComponent} from "./pages/provider-edit/provider-edit.component";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    ProvidersListComponent,
    ProviderRegisterComponent,
    ProviderEditComponent
  ],
  imports: [
    SharedModule,
    ProvidersRoutingModule,
  ],
})
export class ProvidersModule { }
