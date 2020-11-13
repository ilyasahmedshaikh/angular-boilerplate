import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./components/payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/service-request/service-request.module').then(m => m.ServiceRequestModule)
  },
  {
    path: 'service-request',
    loadChildren: () => import('./components/service-request/service-request.module').then(m => m.ServiceRequestModule)
  },
  {
    path: 'packages',
    loadChildren: () => import('./components/packages/packages.module').then(m => m.PackagesModule)
  },
  {
    path: 'package-details',
    loadChildren: () => import('./components/package-details/package-details.module').then(m => m.PackageDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
