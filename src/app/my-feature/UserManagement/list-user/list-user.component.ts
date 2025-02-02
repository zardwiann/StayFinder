import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { PublicService } from 'src/app/PublicService/public.service';
import { Usermodule } from 'src/app/User/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {

  owner: any = []
  displayedColumns: string[] = ['row', 'fullname', 'address', 'phone', 'action']
  dataSource = this.owner;
  owner_data: any = Usermodule;
  angForm: any = FormGroup;

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    public public_service: PublicService,
    public dialog: MatDialog

  ) {

  }

  ngOnInit(): void {
    this.getOwner();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getOwner() {
    this.public_service.Userlist().subscribe(
      data => {
        this.owner = data.filter((s: any) => (s.role === '1'))
        this.setupDataSource(this.owner)

      }
    )
  }
  private setupDataSource(data: any[]): void {
    this.owner = data
    this.dataSource = new MatTableDataSource(this.owner)
  }

  ViewBoardingHouseDetails(id: any) {
    this.public_service.BoardingHouseOwnerList(id).subscribe(data => {
       const boardingHouses = Array.isArray(data) ? data : [data]; 
      this.dialog.open(UserComponent, {
        width: '800px',
        height: '600px',
        data: {
          comp: boardingHouses  
        }
      }).afterClosed().subscribe(result => {
       
      });
    });
  }
  

}

