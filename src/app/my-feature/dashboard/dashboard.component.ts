import { Component } from '@angular/core';
import { PublicService } from 'src/app/PublicService/public.service';
import { LoginserviceService } from 'src/app/User/loginservice.service';
import { Usermodule } from 'src/app/User/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  isUserAdmin: boolean = false;
  isUserOwner: boolean = false;
  isUserGuest: boolean = false
  Owner: any;
  Guest: any;
  BoardingHouse: any;
  OwnedBoardingHouse: any;
  Reservation:any;


  constructor(
    public auth: LoginserviceService,
    public public_service: PublicService
  ) { }

  ngOnInit(): void {
    this.CHeckuserrole();
    this.fetchOwner();
    this.fetchGuest();
    this.fetchBoardingHouse();
    this.fetchOwnedBoardingHouse();
    this.TotalofReservation()

  }


  CHeckuserrole() {
    const role = sessionStorage.getItem('userRole');
    if (role) {
      if (role === '0') {
        this.isUserOwner = false;
        this.isUserAdmin = true;
        this.isUserOwner = false;

      } else if (role === '1') {
        this.isUserAdmin = false;
        this.isUserGuest = false;
        this.isUserOwner = true;


      } else if (role === '2') {
        this.isUserAdmin = false;
        this.isUserOwner = false;
        this.isUserGuest = true;


      }
    } else {
      console.log('not valid')

    }
  }

  fetchOwner() {
    this.public_service.fetchOwner().subscribe({
      next: (data) => {
        this.Owner = data.filter((s: any) => s.role === '1').length
      }
    })
  }

  fetchGuest() {
    this.public_service.fetchOwner().subscribe({
      next: (data) => {
        this.Guest = data.filter((s: any) => s.role === '2').length
      }
    })
  }

  fetchBoardingHouse() {
    this.public_service.boardinghouselist().subscribe({
      next: (data) => {
        this.BoardingHouse = data.filter((s: any) => s.status === '2').length
      }
    })
  }

  fetchOwnedBoardingHouse() {
    const userID = sessionStorage.getItem('userId')
    this.public_service.boardinghouselist().subscribe({
      next: (data) => {
        this.OwnedBoardingHouse = data.filter((s: any) => s.ownerid === userID).length
       
      }
    })
  }

  TotalofReservation(){
    const userID = sessionStorage.getItem('userId')
    this.public_service.bookinglist().subscribe({
       next:(data)=>{
         this.Reservation = data.filter((s:any)=> s.ownerid === userID).length
       }
    })
  }


}




