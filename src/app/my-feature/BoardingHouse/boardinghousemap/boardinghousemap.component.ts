import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PublicService } from 'src/app/PublicService/public.service';
import { Usermodule } from 'src/app/User/user';
import { BoardingDetailsComponent } from '../boarding-details/boarding-details.component';
import { MapdetailsComponent } from 'src/app/Map/mapdetails/mapdetails.component';
import { MapComponent } from 'src/app/Map/map/map.component';

@Component({
  selector: 'app-boardinghousemap',
  templateUrl: './boardinghousemap.component.html',
  styleUrls: ['./boardinghousemap.component.scss']
})
export class BoardinghousemapComponent {
  owner: any = []
  displayedColumns: string[] = ['row', 'boardinghousename', 'BoardingHouseAddress','time', 'action']
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
      // console.log(this.owner_data);
      this.dialog.open(BoardingDetailsComponent, {
        width: '700px',
        height:'700px',
        data: {
          comp: {
            id: this.owner_data.register_id,
            fullname: this.owner_data.owner_name,
            owneraddress: this.owner_data.owner_address,
            housename: this.owner_data.housename,
            houseaddress: this.owner_data.house_address,
            phone: this.owner_data.owner_phone,
            username: this.owner_data.owner_username,
            amenities: this.owner_data.amenities,
            room: this.owner_data.room,
            price: this.owner_data.price,
            picture:this.owner_data.picture,
            status: this.owner_data.status || 'Pending',
          }
        }

      }).afterClosed().subscribe(result => {

      });

    });
  }

  



}

