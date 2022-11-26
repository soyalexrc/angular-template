import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {ProvidersRoutingModule} from "./providers.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ProvidersListComponent} from "./pages/providers-list/providers-list.component";
import {ProviderRegisterComponent} from "./pages/provider-register/provider-register.component";
import {ProviderEditComponent} from "./pages/provider-edit/provider-edit.component";
import {ProvidersTableComponent} from "./components/providers-table/providers-table.component";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    ProvidersListComponent,
    ProviderRegisterComponent,
    ProviderEditComponent,
    ProvidersTableComponent
  ],
  imports: [
    SharedModule,
    ProvidersRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
  ],
})
export class ProvidersModule { }
