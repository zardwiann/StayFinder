import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
import { PublicService } from 'src/app/PublicService/public.service';

@Component({
  selector: 'app-updateboardinghouse',
  templateUrl: './updateboardinghouse.component.html',
  styleUrls: ['./updateboardinghouse.component.scss']
})
export class UpdateboardinghouseComponent {

  constructor(
    private public_service: PublicService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdateboardinghouseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {

  }

  public boardinghouseform = this.fb.group({
    id: ['', Validators.required],
    housename: ['', Validators.required],
    room: ['', Validators.required],
    price: ['', Validators.required],
    amenities: ['', Validators.required],

  })

  SaveChanges() {
    this.public_service.UpdateBoardinghouse(
      this.boardinghouseform.value,
      this.boardinghouseform.value.id = this.data.comp.id
    ).pipe(take(1)).subscribe({
      next: (data) => {
        alert('Data Has been Updated Successfully')
      }, error(err: any) {
        alert('Update Has Failed')
      }
    })
  }



}
