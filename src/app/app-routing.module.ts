import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantComponent } from './tenant/tenant.component';
import { CreateaccountComponent } from './login/createaccount/createaccount.component';

const routes: Routes = [
  { path: '', redirectTo: 'boardinghouse', pathMatch: 'full' }, 
  { path: 'boardinghouse', component: TenantComponent },
  { path: 'main', loadChildren: () => import('./my-feature/my-feature.module').then(m => m.MyFeatureModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: '**', redirectTo: 'boardinghouse' } 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
