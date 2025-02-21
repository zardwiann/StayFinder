import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListUserComponent } from './UserManagement/list-user/list-user.component';
 
import { OwnedboardinghouseComponent } from './OwnerManagement/ownedboardinghouse/ownedboardinghouse.component';
 
 
import { MapdetailsComponent } from './mapdetails/mapdetails.component';
import { ProfileComponent } from './OwnerManagement/profile/profile.component';
import { ReportComponent } from './OwnerManagement/report/report.component';
import { RoombookingComponent } from './OwnerManagement/roombooking/roombooking.component';
import { BoardinghouselistComponent } from './BoardingHouse/boardinghouselist/boardinghouselist.component';
 
const routes: Routes = [
  {
    path: '', component: SidebarComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: ListUserComponent },
      { path: 'ownedboardinghouse', component: OwnedboardinghouseComponent },
  
      { path: 'map', component: MapdetailsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'report', component: ReportComponent },
      { path: 'roombooking', component: RoombookingComponent },
      { path: 'boardinghouselist', component: BoardinghouselistComponent },



   

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFeatureRoutingModule { }
