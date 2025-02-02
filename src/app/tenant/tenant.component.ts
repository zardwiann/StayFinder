import { Component, ViewChild } from '@angular/core';
import { BoardingDetailsComponent } from '../my-feature/BoardingHouse/boarding-details/boarding-details.component';
import { MatTableDataSource } from '@angular/material/table';
import { PublicService } from '../PublicService/public.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { Usermodule } from '../User/user';
import { BookingformComponent } from '../Form/bookingform/bookingform.component';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent {
  owner: any = []
  displayedColumns: string[] = ['row', 'boardinghousename', 'BoardingHouseAddress', 'action']
  dataSource = this.owner;
  owner_data: any = Usermodule;
  angForm: any = FormGroup;

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    public public_service: PublicService,
    public dialog: MatDialog,


  ) { }

  ngOnInit(): void {
    this.getOwner();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getOwner() {
    this.public_service.owner().subscribe(
      data => {

        this.owner = data.filter((s: any) => (s.role === '1', s.status === '2'))
        this.setupDataSource(this.owner)
      }
    )
  }
  private setupDataSource(data: any[]): void {
    this.owner = data
    this.dataSource = new MatTableDataSource(this.owner)
  }

  ViewBoardingHouseDetails(id: any) {
    this.public_service.SelectBoardingHouse(id).subscribe(data => {
      this.owner_data = data[0];
     
      this.dialog.open(BoardingDetailsComponent, {
        width: '600px',
        height: '700px',
        data: {
          comp: {
            id: this.owner_data.register_id,
            fullname: this.owner_data.owner_name,
            owneraddress: this.owner_data.owner_address,
            housename: this.owner_data.housename,
            houseaddress: this.owner_data.house_address,
            picture:this.owner_data.picture,
            phone: this.owner_data.owner_phone,
            username: this.owner_data.owner_username,
            amenities: this.owner_data.amenities,
            room: this.owner_data.room,
            price: this.owner_data.price,
            status: this.owner_data.status || 'Pending',
          }
        }

      }).afterClosed().subscribe(result => {

      });

    });
  }


  BookingForm(id: any) {
    this.public_service.SelectBoardingHouse(id).subscribe(data => {
      this.owner_data = data[0];
      
      this.dialog.open(BookingformComponent, {
        width: '700px',
        data: {
          comp: {
            id: this.owner_data.register_id,
            fullname: this.owner_data.owner_name,
         
            owneraddress: this.owner_data.owner_address,
            housename: this.owner_data.housename,
            houseaddress: this.owner_data.house_address,
            phone: this.owner_data.owner_phone,
            ownerid:this.owner_data.ownerid,
            username: this.owner_data.owner_username,
            amenities: this.owner_data.amenities,
            room: this.owner_data.room,
            price: this.owner_data.price,
            status: this.owner_data.status || 'Pending',
          }
        }
      }).afterClosed().subscribe(result => {
        if (result) {

        }
      });

    });
  }


}
