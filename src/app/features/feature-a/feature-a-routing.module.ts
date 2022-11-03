import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAComponent} from "./pages/page-a/page-a.component";
import {PageBComponent} from "./pages/page-b/page-b.component";

const routes: Routes = [
  {
    path: '',
    component: PageAComponent
  },
  {
    path: 'featureSample',
    component: PageBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule { }
