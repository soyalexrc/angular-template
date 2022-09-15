import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePipe } from './pipes/sample.pipe';
import { SampleDirective } from './directives/sample.directive';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';



@NgModule({
  declarations: [
    SamplePipe,
    SampleDirective,
    SharedButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
