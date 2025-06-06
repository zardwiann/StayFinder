import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFeatureRoutingModule } from './my-feature-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListUserComponent } from './UserManagement/list-user/list-user.component';
 
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

import { GoogleMapsModule } from '@angular/google-maps';
 
 
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ViewallboardinghousemapComponent } from './viewallboardinghousemap/viewallboardinghousemap.component';
import { ProfileComponent } from './OwnerManagement/profile/profile.component';
import { ReportComponent } from './OwnerManagement/report/report.component';
import { RoombookingComponent } from './OwnerManagement/roombooking/roombooking.component';
import { BoardinghouselistComponent } from './BoardingHouse/boardinghouselist/boardinghouselist.component';

@NgModule({
  declarations: [

    DashboardComponent,
    SidebarComponent,
    ListUserComponent,
  
    UserComponent,
    BoardingDetailsComponent,
    OwnedboardinghouseComponent,
    AddboardinghouseComponent,
 
    ViewallboardinghousemapComponent,
    ProfileComponent,
    ReportComponent,
    RoombookingComponent,
    BoardinghouselistComponent,


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
    GoogleMapsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatAutocompleteModule,


  ],

  exports: [

  ]
})
export class MyFeatureModule { }
