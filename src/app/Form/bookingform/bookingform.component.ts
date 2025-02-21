import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { timeout } from 'rxjs';
import { PublicService } from 'src/app/PublicService/public.service';
import { LoginserviceService } from 'src/app/User/loginservice.service';
import { SavenotificationComponent } from '../savenotification/savenotification.component';
import { ErrorcomponentComponent } from '../errorcomponent/errorcomponent.component';
import { Api } from 'src/app/API/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent {
  selectedFile: File | null = null;

  form: any = FormGroup;
  constructor(
    public authservice: LoginserviceService,
    public publicService: PublicService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BookingformComponent>,
    private dialog: MatDialog,
    public api: Api,
    private http: HttpClient,
  ) {
  }


  ngOnInit(): void {
    this.formValidation()
  }

  formValidation() {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      Guardian: ['', Validators.required],
      IncaseofEmergency: ['', Validators.required],
      boardingid: ['', Validators.required],
      status: ['', Validators.required],
      roomtype: ['', Validators.required],
      ownerid: ['', Validators.required],
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
    const formData = new FormData();
    Object.keys(this.form.controls).forEach((key) => {
      const value = this.form.get(key)?.value;
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });
    formData.append('ownerid', this.data.comp.ownerid);
    formData.append('boardingid', this.data.comp.id);
    formData.append('status', '0');
    if (this.selectedFile) {
      formData.append('picture', this.selectedFile);
    }

    this.http.post(this.api.getApi.addbooking, formData).subscribe({
      next: (data) => {
        this.dialog.open(SavenotificationComponent, {
          width: '300px',
          data: {},
        });
      },
      error: (error: any) => {
        console.error('Form submission error:', error);
        this.dialog.open(ErrorcomponentComponent, {
          width: '300px',
          data: { error }, // Correctly passing the error
        });
      },
    });
  }

  // postdata(angForm1: any) {

  //   const formData = {
  //     ...angForm1.value,
  //     boardingid: this.data.comp.id,
  //     ownerid: this.data.comp.ownerid,
  //     status: '0'
  //   }
  //   this.publicService.addbooking(formData).subscribe({
  //     next: (data) => {
  //       const dialogRef = this.dialog.open(SavenotificationComponent, {
  //         width: '300px',
  //         data: {}
  //       }); dialogRef.afterOpened().subscribe(_ => {

  //       })

  //     }, error: (error: any) => {
  //       const dialogRef = this.dialog.open(ErrorcomponentComponent, {
  //         width: '300px',
  //         data: {
  //           console
  //         }
  //       }); dialogRef.afterOpened().subscribe(_ => {

  //       })
  //       console.log(error)
  //     }
  //   });
  // }
}



