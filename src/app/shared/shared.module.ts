import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SamplePipe } from './pipes/sample.pipe';
import { SampleDirective } from './directives/sample.directive';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CreateButtonComponent } from './components/create-button/create-button.component';
import {MatButtonModule} from "@angular/material/button";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { ContentTableHeaderComponent } from './components/content-table-header/content-table-header.component';



@NgModule({
  declarations: [
    SamplePipe,
    SampleDirective,
    SharedButtonComponent,
    CreateButtonComponent,
    SearchBarComponent,
    ContentTableHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CreateButtonComponent,
    SearchBarComponent,
    ContentTableHeaderComponent
  ]
})
export class SharedModule { }
