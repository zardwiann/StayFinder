import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantComponent } from './tenant/tenant.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'main', loadChildren: () => import('./my-feature/my-feature.module').then(m => m.MyFeatureModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'boardinghouse', component: TenantComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
