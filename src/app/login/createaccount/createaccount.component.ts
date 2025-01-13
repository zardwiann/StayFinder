import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginserviceService } from 'src/app/User/loginservice.service';

declare const google: any;

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent {
  angForm: any = FormGroup
  role: string = '';
  query: string = '';
  places: any[] = [];


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public authservice: LoginserviceService
  ) {
  }


  ngOnInit(): void {

    this.formValidation()

  }


  formValidation() {
    this.angForm = this.fb.group({
      role: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      housename: ['', Validators.required],
      address: ['', Validators.required],
      room: ['', Validators.required],
      price: ['', Validators.required],
      amenities: ['', Validators.required]
    });


  }





  searchPlaces() {
    if (!this.query) {
      this.places = [];
      return;
    }

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(this.query)}&format=json&addressdetails=1`;

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
          display_name: `${place.address.village || place.address.hamlet || place.address.suburb || 'Unknown Barangay'}, ${place.display_name}`,
          lat: place.lat,
          lon: place.lon,
        }));
      });
  }


  selectPlace(place: any) {
    console.log(`Selected Place: ${place.display_name}`);
    console.log(`Latitude: ${place.lat}, Longitude: ${place.lon}`);
    this.query = place.display_name;
    this.angForm.patchValue({
      boardingHouseAddress: place.display_name,
    });
    this.places = [];
  }


  onUserTypeChange(type: string): void {
    this.role = type;  
    
  }


  postdata(angForm1: any): void {

    if (angForm1.status === "INVALID") { return }
    this.authservice.register(angForm1.value).subscribe({
      next: (data) => {
        console.log(data)
      }, error: (err: any) => {

        console.log(err)
      }

    })
  }



}
