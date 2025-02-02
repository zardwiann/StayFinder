import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PublicService } from 'src/app/PublicService/public.service';
import { Usermodule } from 'src/app/User/user';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  owner: any = []
  displayedColumns: string[] = ['row', 'fullname', 'phone', 'address', 'boardinghousename','time']
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
        this.owner = data.filter((s:any)=> s.ownerid.toString() === userId)
        this.setupDataSource(this.owner)
      }
    )
  }
  private setupDataSource(data: any[]): void {
    this.owner = data
    this.dataSource = new MatTableDataSource(this.owner)
  }

}
