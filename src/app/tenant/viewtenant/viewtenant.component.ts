import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-viewtenant',
  templateUrl: './viewtenant.component.html',
  styleUrls: ['./viewtenant.component.scss']
})
export class ViewtenantComponent {

  constructor(
    private dialogRef: MatDialogRef<ViewtenantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {

  }

}
