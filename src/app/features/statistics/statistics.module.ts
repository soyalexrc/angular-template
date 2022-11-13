import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {StatisticsRoutingModule} from "./statistics.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {StatisticsComponent} from "./pages/statistics/statistics.component";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    StatisticsComponent
  ],
  imports: [
    SharedModule,
    StatisticsRoutingModule,
  ],
})
export class StatisticsModule { }
