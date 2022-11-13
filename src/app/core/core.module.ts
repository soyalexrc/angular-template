import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AuthGuard} from "./guards/auth.guard";
import {SampleInterceptor} from './interceptor/sample.interceptor'
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {RouterModule} from "@angular/router";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    DashboardLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatBadgeModule,
    MatMenuModule,
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
