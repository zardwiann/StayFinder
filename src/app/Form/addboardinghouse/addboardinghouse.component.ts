import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginserviceService } from 'src/app/User/loginservice.service';
import { PublicService } from 'src/app/PublicService/public.service';
import { Api } from 'src/app/API/api';
import { MatDialog } from '@angular/material/dialog';
import { SavenotificationComponent } from '../savenotification/savenotification.component';
import { ErrorcomponentComponent } from '../errorcomponent/errorcomponent.component';

@Component({
  selector: 'app-addboardinghouse',
  templateUrl: './addboardinghouse.component.html',
  styleUrls: ['./addboardinghouse.component.scss']
})
export class AddboardinghouseComponent {
  form: any = FormGroup;
  selectedFile: File | null = null;

  query: string = '';
  places: any[] = [];
  place: any;
  searchPlaces() {
    if (!this.query) {
      this.places = [];
      return;
    }
    const url = `https://boardinghouseapi.masterpiecesolutions.site/location.php/search?q=${encodeURIComponent(this.query)}&format=json&addressdetails=1`;
    this.http
      .get<any[]>(url)
      .pipe(
        catchError((error) => {
          console.error('Error fetching places:', error);
          return of([]);
        })
      )
      .subscribe((data) => {
        this.places = data.map((place) => ({
          display_name: `${place.address}`,
          lat: place.latitude,
          lon: place.longitude,
        }));
      });
  }

  selectPlace(place: any) {
    console.log(`Selected Place: ${place.display_name}`);
    console.log(`Latitude: ${place.lat}, Longitude: ${place.lon}`);
    this.query = place.display_name;
    this.form.patchValue({
      address: place.display_name,
      latitude: place.lat,
      longitude: place.lon,

    });
    this.places = [];
  }




  constructor(
    private http: HttpClient,
    public public_service: PublicService,
    public api: Api,
    private fb: FormBuilder,
    public dialog: MatDialog

  ) {
    this.FormValidator()
  }

  FormValidator() {
    this.form = this.fb.group({
      ownerid: ['', Validators.required],
      housename: ['', Validators.required],
      address: ['', Validators.required],
      room: ['', Validators.required],
      price: ['', Validators.required],
      amenities: [''],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      role: ['', Validators.required],
      status: ['', Validators.required],
      picture: ['']
    });

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  submitForm() {

    const userId = sessionStorage.getItem('userId');
    const formData = new FormData();
    Object.keys(this.form.controls).forEach((key) => {
      formData.append(key, this.form.get(key)?.value);
    });
    formData.append('ownerid', userId ?? '');
    formData.append('status', '0');

    if (this.selectedFile) {
      formData.append('picture', this.selectedFile);

    }
    this.http.post(this.api.getApi.addboardinghouse, formData).subscribe({
      next: (data) => {
        const dialogRef = this.dialog.open(SavenotificationComponent, {
          width: '300px',
          data: {}
        }); dialogRef.afterOpened().subscribe(_ => {

        })
      }, error: (error: any) => {
        const dialogRef = this.dialog.open(ErrorcomponentComponent, {
          width: '300px',
          data: {
            console
          }
        }); dialogRef.afterOpened().subscribe(_ => {

        })
        console.log(error)
      }
    }

    );
  }
  formReset() {
    this.form.reset()
  }

}







