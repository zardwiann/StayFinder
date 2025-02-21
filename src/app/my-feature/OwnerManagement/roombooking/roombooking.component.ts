import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BookingapprovalComponent } from 'src/app/Form/bookingapproval/bookingapproval.component';
import { PublicService } from 'src/app/PublicService/public.service';
import { ViewtenantComponent } from 'src/app/tenant/viewtenant/viewtenant.component';
import { Usermodule } from 'src/app/User/user';

@Component({
  selector: 'app-roombooking',
  templateUrl: './roombooking.component.html',
  styleUrls: ['./roombooking.component.scss']
})
export class RoombookingComponent {
  owner: any = []
  displayedColumns: string[] = ['row', 'fullname', 'phone','boardinghousename', 'price', 'roomtype', 'bookingstatus', 'action']
  dataSource = this.owner;
  owner_data: any = Usermodule;
  angForm: any = FormGroup;

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    public public_service: PublicService,
    public dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    this.getReservation();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getReservation() {
    const userId = sessionStorage.getItem('userId');
    this.public_service.bookinglist().subscribe(
      data => {
        this.owner = data.filter((s: any) => s.ownerid.toString() === userId);
        this.setupDataSource(this.owner)
      }
    )
  }
  private setupDataSource(data: any[]): void {
    this.owner = data
    this.dataSource = new MatTableDataSource(this.owner)
  }


  Option(id: any) {
    this.public_service.SelectBooking(id).subscribe(data => {
      if (data && data.length > 0) {
        this.owner_data = data[0];
        console.log(this.owner_data)
        this.dialog.open(BookingapprovalComponent, {
          width: '400px',
          data: {
            comp: {
              id: this.owner_data.id,
              fullname: this.owner_data.fullname,
              address: this.owner_data.address,
              email:this.owner_data.email,
              gender: this.owner_data.gender,
              owner_name: this.owner_data.owner_name,
              Guardian: this.owner_data.Guardian,
              boardingid: this.owner_data.boardingid,
              housename: this.owner_data.housename,
              IncaseofEmergency: this.owner_data.IncaseofEmergency,
              status: [this.owner_data?.status ? this.owner_data.status : 'Approved']
            }
          }
        }).afterClosed().subscribe(result => {
          if (result) {
            this.getReservation();
          }
        });

      } else {
        console.error("No data returned for booking ID:", id);
      }
    });
  }

  ViewTenatDetails(id: any) {
    this.public_service.SelectBooking(id).subscribe(data => {
      if (data && data.length > 0) {
        this.owner_data = data[0];
        console.log(this.owner_data)
        this.dialog.open(ViewtenantComponent, {
          width: '400px',
          height:'600px',
          data: {
            comp: {
              id: this.owner_data.id,
              fullname: this.owner_data.fullname,
              address: this.owner_data.address,
              gender: this.owner_data.gender,
              phone:this.owner_data.phone,
              owner_name: this.owner_data.owner_name,
              Guardian: this.owner_data.Guardian,
              boardingid: this.owner_data.boardingid,
              email:this.owner_data.email,
              status:this.owner_data.status,
              housename: this.owner_data.housename,
              IncaseofEmergency: this.owner_data.IncaseofEmergency,
              picture:this.owner_data.picture,
              
            }
          }
        }).afterClosed().subscribe(result => {
          if (result) {
            this.getReservation();
          }
        });

      } else {
        console.error("No data returned for booking ID:", id);
      }
    });
  }
}
