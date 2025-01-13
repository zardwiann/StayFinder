import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFeatureRoutingModule } from './my-feature-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListUserComponent } from './UserManagement/list-user/list-user.component';
import { ListBoardinghouseComponent } from './BoardingHouse/list-boardinghouse/list-boardinghouse.component';
import { SubmissionComponent } from './BoardingHouse/submission/submission.component';
import { BoardinghousemapComponent } from './BoardingHouse/boardinghousemap/boardinghousemap.component';


@NgModule({
  declarations: [

    DashboardComponent,
    SidebarComponent,
    ListUserComponent,
    ListBoardinghouseComponent,
    SubmissionComponent,
    BoardinghousemapComponent,

  ],
  imports: [
    CommonModule,
    MyFeatureRoutingModule
  ]
})
export class MyFeatureModule { }
