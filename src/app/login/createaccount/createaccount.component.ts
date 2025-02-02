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
  place: any


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
      username: ['', Validators.required],
      password: ['', Validators.required],
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],

    });
  }





  // searchPlaces() {
  //   if (!this.query) {
  //     this.places = [];
  //     return;
  //   }
  //   const url = `http://localhost/bhml/location.php/search?q=${encodeURIComponent(this.query)}&format=json&addressdetails=1`;
  //   this.http
  //     .get<any[]>(url)
  //     .pipe(
  //       catchError((error) => {
  //         console.error('Error fetching places:', error);
  //         return of([]);
  //       })
  //     )
  //     .subscribe((data) => {
  //       this.places = data.map((place) => ({
  //         display_name: `${place.address}`,
  //         lat: place.latitude,
  //         lon: place.longitude,
  //       }));
  //     });
  // }

  // selectPlace(place: any) {
  //   console.log(`Selected Place: ${place.display_name}`);
  //   console.log(`Latitude: ${place.lat}, Longitude: ${place.lon}`);
  //   this.query = place.display_name;
  //   this.angForm.patchValue({
  //     address: place.display_name,
  //     latitude: place.lat,
  //     longitude: place.lon,
  //   });
  //   this.places = [];
  // }


  postdata(angForm1: any): void {

    if (angForm1.status === "INVALID") {
      return;
    }
    const formData = {
      ...angForm1.value,
      status: '0',
      role: '1',
    };

    this.authservice.createaccount(formData).subscribe({
      next: (data) => {
        alert('You successfully created and ACCOUNT')
        console.log(data)
      },
      error: (err: any) => {
        console.error('Error saving data:', err);


      },
    });
  }




}
