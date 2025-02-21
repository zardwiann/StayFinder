import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginserviceService } from 'src/app/User/loginservice.service';
import { SavenotificationComponent } from 'src/app/Form/savenotification/savenotification.component';
import { ErrorcomponentComponent } from 'src/app/Form/errorcomponent/errorcomponent.component';
import { PublicService } from 'src/app/PublicService/public.service';
import { Api } from 'src/app/API/api';
import { MatDialog } from '@angular/material/dialog';

declare const google: any;

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent {
  form: any = FormGroup;
  selectedFile: File | null = null;

  query: string = '';
  places: any[] = [];
  place: any
  isPasswordVisible: boolean = false;


  constructor(
    private http: HttpClient,
    public public_service: PublicService,
    public api: Api,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {

    this.formValidation()

  }

  formValidation() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fullname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')],],
      address: ['', Validators.required],
      picture: ['']

    });
  }
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
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
      formData.append(key, this.form.get(key)?.value);
    });
    formData.append('role', '1');
    formData.append('status', '0');

    if (this.selectedFile) {
      formData.append('picture', this.selectedFile);
    }
    this.http.post(this.api.getApi.createaccount, formData).subscribe({
      next: (data) => {
        const dialogRef = this.dialog.open(SavenotificationComponent, {
          width: '300px',
          data: {}
        }); dialogRef.afterOpened().subscribe(_ => {
          this.formreset()
        })
      }, error: (error: any) => {
        const dialogRef = this.dialog.open(ErrorcomponentComponent, {
          width: '300px',
          data: {
            console
          }
        }); dialogRef.afterOpened().subscribe(_ => {
          this.formreset()
        })
        console.log(error)
      }
    }

    );
  }

  formreset() {
    this.form.reset()
  }




}
