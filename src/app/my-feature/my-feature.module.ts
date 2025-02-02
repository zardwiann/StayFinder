import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFeatureRoutingModule } from './my-feature-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListUserComponent } from './UserManagement/list-user/list-user.component';
import { ListBoardinghouseComponent } from './BoardingHouse/list-boardinghouse/list-boardinghouse.component';
import { SubmissionComponent } from './BoardingHouse/submission/submission.component';
import { BoardinghousemapComponent } from './BoardingHouse/boardinghousemap/boardinghousemap.component';
import { UserComponent } from './UserManagement/user/user.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BoardingDetailsComponent } from './BoardingHouse/boarding-details/boarding-details.component';
import { MatButtonModule } from '@angular/material/button';
import { OwnedboardinghouseComponent } from './OwnerManagement/ownedboardinghouse/ownedboardinghouse.component';
import { AddboardinghouseComponent } from '../Form/addboardinghouse/addboardinghouse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './ReservationPage/booking/booking.component';
import { MapComponent } from '../Map/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [

    DashboardComponent,
    SidebarComponent,
    ListUserComponent,
    ListBoardinghouseComponent,
    SubmissionComponent,
    BoardinghousemapComponent,
    UserComponent,
    BoardingDetailsComponent,
    OwnedboardinghouseComponent,
    AddboardinghouseComponent,
    BookingComponent,
    MapComponent




  ],
  imports: [
    CommonModule,
    MyFeatureRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],

  exports: [
    MapComponent
  ]
})
export class MyFeatureModule { }
