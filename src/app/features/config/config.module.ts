import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {ConfigRoutingModule} from "./config.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ConfigComponent} from "./pages/config/config.component";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    ConfigComponent
  ],
  imports: [
    SharedModule,
    ConfigRoutingModule,
  ],
})
export class ConfigModule { }
