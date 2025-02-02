import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-boarding-details',
  templateUrl: './boarding-details.component.html',
  styleUrls: ['./boarding-details.component.scss']
})
export class BoardingDetailsComponent {

  constructor(
    private dialogRef: MatDialogRef<BoardingDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {

  }

  

}
