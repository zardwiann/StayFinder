import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddboardinghouseComponent } from 'src/app/Form/addboardinghouse/addboardinghouse.component';
import { PublicService } from 'src/app/PublicService/public.service';
import { LoginserviceService } from 'src/app/User/loginservice.service';
import { Usermodule } from 'src/app/User/user';
import { BoardingDetailsComponent } from '../../BoardingHouse/boarding-details/boarding-details.component';

@Component({
  selector: 'app-ownedboardinghouse',
  templateUrl: './ownedboardinghouse.component.html',
  styleUrls: ['./ownedboardinghouse.component.scss']
})
export class OwnedboardinghouseComponent {
  owner: any = []
  displayedColumns: string[] = ['row', 'boardinghousename', 'BoardingHouseAddress', 'action']
  dataSource = this.owner;
  owner_data: any = Usermodule;
  angForm: any = FormGroup;
  currentusers: any
  owner_house: any

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    public public_service: PublicService,
    public dialog: MatDialog,
    public auth: LoginserviceService


  ) { }

  ngOnInit(): void {

    this.getOwner();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getOwner() {
    const userId = sessionStorage.getItem('userId'); 
    if (!userId) {
      console.error('No user session found in sessionStorage.');
      return;
    }
    this.public_service.owner().subscribe(
      (data: any[]) => {
        this.currentusers = data.filter((s: any) => s.ownerid.toString() === userId);
        this.owner_house = this.currentusers;
        this.setupDataSource(this.owner_house); 
      },
      (error) => {
        console.error('Error fetching owner data:', error);
      }
    );
  }
  private setupDataSource(data: any[]): void {
    this.owner = data
    this.dataSource = new MatTableDataSource(this.owner)
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
            status: this.owner_data.status || 'Pending',
          }
        }

      }).afterClosed().subscribe(result => {

      });

    });
  }
 
}
