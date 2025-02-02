import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';

import { PublicService } from 'src/app/PublicService/public.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.scss']
})
export class UpdateStatusComponent {
  statusForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateStatusComponent>,
    private publicService: PublicService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.statusForm = this.fb.group({
      status: [this.data.comp?.status || '1', Validators.required]
    });
  }

  updateStatus() {
    if (this.statusForm.valid) {

      this.statusForm.patchValue({ status: '2' });
      const payload = {
        id: this.data.comp.id,
        status: this.statusForm.value.status
      };
      console.log('Payload:', payload);

      this.publicService.UpdateStatus(payload)
        .subscribe(
          (response) => {
            console.log('Status updated successfully', response);
            this.dialogRef.close(true);
          },
          (error) => {
            console.log('Error updating status', error);
          }
        );
    } else {
      console.log('Form is invalid');
    }

  }
}
