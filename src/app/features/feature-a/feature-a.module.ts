import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {FeatureARoutingModule} from "./feature-a-routing.module";
import {SharedModule} from "../../shared/shared.module";




@NgModule({
  declarations: [
    PageAComponent,
    PageBComponent,
    ScopedComponentAComponent,
    ScopedComponentBComponent,
  ],
  imports: [
    SharedModule,
    FeatureARoutingModule,
  ],
})
export class FeatureAModule { }
