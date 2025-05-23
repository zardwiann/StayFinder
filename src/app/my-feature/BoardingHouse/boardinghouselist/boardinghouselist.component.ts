import { Component, ViewChild } from '@angular/core';
import { BoardingDetailsComponent } from '../boarding-details/boarding-details.component';
import { UpdateStatusComponent } from 'src/app/Form/update-status/update-status.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PublicService } from 'src/app/PublicService/public.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { Usermodule } from 'src/app/User/user';

@Component({
  selector: 'app-boardinghouselist',
  templateUrl: './boardinghouselist.component.html',
  styleUrls: ['./boardinghouselist.component.scss']
})
export class BoardinghouselistComponent {
 owner: any = []
  displayedColumns: string[] = ['row', 'boardinghousename', 'BoardingHouseAddress', 'room', 'price','boardingstatus', 'action']
  dataSource = this.owner;
  owner_data: any = Usermodule;
  angForm: any = FormGroup;
  currentusers: any
  owner_house: any

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    public public_service: PublicService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.ListofBoardingHouse();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ListofBoardingHouse() {
    this.public_service.owner().subscribe(
      (data: any[]) => {
        this.currentusers = data;
        this.owner_house = this.currentusers
        this.setupDataSource(this.owner_house);
      }
    )
  }
  private setupDataSource(data: any[]): void {
    this.owner = data;
    this.dataSource = new MatTableDataSource(this.owner);
  }

  ApproveOwner(id: any) {
    this.public_service.SelectBoardingHouse(id).subscribe(data => {
      this.owner_data = data[0];
      console.log(this.owner_data);
      this.dialog.open(UpdateStatusComponent, {
        width: '400px',
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
            status: this.owner_data.status || 'Pending',
          }
        }
      }).afterClosed().subscribe(result => {
        if (result) {
          this.ListofBoardingHouse();
        }
      });

    });
  }

  ViewBoardingHouseDetails(id: any) {
      this.public_service.SelectBoardingHouse(id).subscribe(data => {
        this.owner_data = data[0];
        
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
              status: this.owner_data.status,
              owner_picture:this.owner_data.owner_picture
            }
          }
  
        }).afterClosed().subscribe(result => {
  
        });
  
      });
    }

}
