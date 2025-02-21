import { Component, Inject } from '@angular/core';
import { UpdateStatusComponent } from '../update-status/update-status.component';
import { PublicService } from 'src/app/PublicService/public.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { from } from 'rxjs';
@Component({
  selector: 'app-bookingapproval',
  templateUrl: './bookingapproval.component.html',
  styleUrls: ['./bookingapproval.component.scss']
})
export class BookingapprovalComponent {
  statusForm: FormGroup = this.fb.group({
    from_name: 'BHML BOOKING NOTIFICATION APPROVAL',
    from_email: "louieiian2002@gmail.com",
    from_owner: [this.data.comp.owner_name],
    to_email: [this.data.comp.email],
    subject: [this.data.comp.housename],
    message: 'Your booking reservation has been approved. Please contact the owner of the boarding house for further information',
    status: [this.data.comp.status || 'Pending', Validators.required]

  })

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookingapprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private publicService: PublicService
  ) {
  }

  updateStatus() {
    if (this.statusForm.valid) {
      const selectedStatus = this.statusForm.value.status;
      const payload = {
        id: this.data.comp.id,
        status: selectedStatus
      };

      this.publicService.BookingApproval(payload).subscribe(
        (response) => {
          console.log('Status updated successfully', response);
          const emailParams = {
            from_name: this.statusForm.value.from_name,
            to_email: this.statusForm.value.to_email,
            from_owner: this.statusForm.value.from_owner,
            subject: "BOARDING MAP HOUSE LOCATION ",
            message: "Your booking reservation has been approved. Please contact the owner of the boarding house for further information.",
            reply_to: this.statusForm.value.from_owner
          };
          console.log(emailParams)
          emailjs.init('9W4hb-c4UlVLQT1y3');
          emailjs.send("service_nb28lar","template_jfdkifh", emailParams)

            .then(() => {
              console.log('Email sent successfully to tenant');

              this.dialogRef.close(true);
            })
            .catch((error) => {
              console.error('Error sending email:', error);
            });
        },
        (error) => {
          console.error('Error updating status', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
 


}
