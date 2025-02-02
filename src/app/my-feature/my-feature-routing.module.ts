import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListUserComponent } from './UserManagement/list-user/list-user.component';
import { ListBoardinghouseComponent } from './BoardingHouse/list-boardinghouse/list-boardinghouse.component';
import { SubmissionComponent } from './BoardingHouse/submission/submission.component';
import { BoardinghousemapComponent } from './BoardingHouse/boardinghousemap/boardinghousemap.component';
import { OwnedboardinghouseComponent } from './OwnerManagement/ownedboardinghouse/ownedboardinghouse.component';
import { BookingComponent } from './ReservationPage/booking/booking.component';
import { MapComponent } from '../Map/map/map.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: ListUserComponent },
      { path: 'boardinghouse', component: ListBoardinghouseComponent },
      { path: 'approvelist', component: BoardinghousemapComponent },

      { path: 'submission', component: SubmissionComponent },
      { path: 'ownedboardinghouse', component: OwnedboardinghouseComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'map', component: MapComponent }

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFeatureRoutingModule { }
