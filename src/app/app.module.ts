import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateStatusComponent } from './Form/update-status/update-status.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TenantComponent } from './tenant/tenant.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BookingformComponent } from './Form/bookingform/bookingform.component';
 
import { GoogleMapsModule } from '@angular/google-maps';
import { DeletecomponentComponent } from './Form/deletecomponent/deletecomponent.component';
import { BookingapprovalComponent } from './Form/bookingapproval/bookingapproval.component';
import {MatBadgeModule} from '@angular/material/badge';
import { UpdateboardinghouseComponent } from './Form/updateboardinghouse/updateboardinghouse.component';
import { SavenotificationComponent } from './Form/savenotification/savenotification.component';
import { ErrorcomponentComponent } from './Form/errorcomponent/errorcomponent.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ViewAllLocationComponent } from './view-all-location/view-all-location.component';
import { ViewtenantComponent } from './tenant/viewtenant/viewtenant.component';
 
@NgModule({
  declarations: [
    AppComponent,
    UpdateStatusComponent, 
    TenantComponent,
    BookingformComponent,
    
    DeletecomponentComponent,
    BookingapprovalComponent,
    UpdateboardinghouseComponent,
    SavenotificationComponent,
    ErrorcomponentComponent,
    ViewAllLocationComponent,
    ViewtenantComponent
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    GoogleMapsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatAutocompleteModule,


    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    



  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
