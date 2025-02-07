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
import { MapComponent } from './Map/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapdetailsComponent } from './Map/mapdetails/mapdetails.component';
import { DeletecomponentComponent } from './Form/deletecomponent/deletecomponent.component';
 

@NgModule({
  declarations: [
    AppComponent,
    UpdateStatusComponent,
    TenantComponent,
    BookingformComponent,
    MapdetailsComponent,
    DeletecomponentComponent,
  
    
  

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
     MapdetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
