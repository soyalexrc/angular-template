import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {AuthLayoutComponent} from "./core/layouts/auth-layout/auth-layout.component";
import {DashboardLayoutComponent} from "./core/layouts/dashboard-layout/dashboard-layout.component";

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: AuthLayoutComponent,
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'clientes',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'proveedores',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/providers/providers.module').then(m => m.ProvidersModule)
  },
  {
    path: 'pedidos',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'productos',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'transacciones',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/transactions/transactions.module').then(m => m.TransactionsModule)
  },

  {
    path: 'estadisticas',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/statistics/statistics.module').then(m => m.StatisticsModule)
  },
  {
    path: 'configuracion',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/config/config.module').then(m => m.ConfigModule)
  },
  {
    path: 'servicios-externos',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/external-services/external-services.module').then(m => m.ExternalServicesModule)
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
