import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'createaccount', component: CreateaccountComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
