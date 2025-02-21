import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { SavenotificationComponent } from 'src/app/Form/savenotification/savenotification.component';
import { PublicService } from 'src/app/PublicService/public.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userID: any
  userData: any;

  constructor(
    private public_service: PublicService,
    public form: FormBuilder,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.fecthUserData()
  }
  public userForm = this.form.group({
    id: sessionStorage.getItem('userId'),
    fullname: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  UpdateDetails() {
    if (this.userForm.status === 'INVALID') {
      return;
    }
    const timeout = 400;
    this.public_service.updateUserDetails(this.userForm.value)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          const dialogRef = this.dialog.open(SavenotificationComponent, {
            width: '400px',
            data: {},
          }); dialogRef.afterOpened().subscribe(_ => {
            setTimeout(() => {
              dialogRef.close()
            }, timeout)
          })
          dialogRef.afterClosed().subscribe(result => {
            this.userData = data;
            this.fecthUserData();

          });
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  fecthUserData() {
    const userId = sessionStorage.getItem('userId');
    this.public_service.get_users({ id: userId }).pipe(take(1)).subscribe({
      next: (data) => {
        this.userData = data[0];

      },
      error(error) {
        console.log(error)
      }
    })
  }




}
