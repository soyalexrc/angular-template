import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AuthGuard} from "./guards/auth.guard";
import {SampleInterceptor} from './interceptor/sample.interceptor'
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : SampleInterceptor,
      multi : true
    }
  ]
})
export class CoreModule { }
