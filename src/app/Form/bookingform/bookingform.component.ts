import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PublicService } from 'src/app/PublicService/public.service';
import { LoginserviceService } from 'src/app/User/loginservice.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent {
  angForm: any = FormGroup;
  constructor(
    public authservice: LoginserviceService,
    public publicService: PublicService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BookingformComponent>,
  ) {
  }


  ngOnInit(): void {
    this.formValidation()
  }

  formValidation() {
    this.angForm = this.fb.group({
      fullname: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      boardingid: ['', Validators.required],




    });


  }

  AddBooking(angForm1: any): void {
 
    this.publicService.addbooking(
      angForm1.value,
      angForm1.value.boardingid = this.data.comp.housename,
      angForm1.value.ownerid = this.data.comp.ownerid
    ).subscribe({
      next: (data) => {
        alert('Data saved successfully:');
        this.angForm.reset();
      },
      error: (err: any) => {
        alert('Error saving data:');
        console.log(err)


      },
    });
  }
}



