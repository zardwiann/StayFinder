import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListUserComponent } from './UserManagement/list-user/list-user.component';
import { ListBoardinghouseComponent } from './BoardingHouse/list-boardinghouse/list-boardinghouse.component';
import { SubmissionComponent } from './BoardingHouse/submission/submission.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: ListUserComponent },
      {path:'boardinghouse',component:ListBoardinghouseComponent},
      {path:'submission',component:SubmissionComponent}

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFeatureRoutingModule { }
