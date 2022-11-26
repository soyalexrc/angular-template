import { NgModule } from '@angular/core';
import {ClientsRoutingModule} from "./clients.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ClientRegisterComponent} from "./pages/client-register/client-register.component";
import {ClientEditComponent} from "./pages/client-edit/client-edit.component";
import {ClientsListComponent} from "./pages/clients-list/clients-list.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDividerModule} from "@angular/material/divider";
import {ClientsTableComponent} from "./components/clients-table/clients-table.component";

@NgModule({
  declarations: [
    ClientRegisterComponent,
    ClientEditComponent,
    ClientsListComponent,
    ClientsTableComponent
  ],
  imports: [
    SharedModule,
    ClientsRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
  ],
})
export class ClientsModule { }
