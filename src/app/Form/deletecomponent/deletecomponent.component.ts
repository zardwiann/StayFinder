import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletecomponent',
  templateUrl: './deletecomponent.component.html',
  styleUrls: ['./deletecomponent.component.scss']
})
export class DeletecomponentComponent {

  title: any;
  message: any;
  constructor(public dialogRef: MatDialogRef<DeletecomponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

}
