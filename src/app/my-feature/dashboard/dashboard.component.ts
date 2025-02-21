import { Component } from '@angular/core';
import { take } from 'rxjs';
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
  Reservation: any;
  Owner_name: any;
  totalbooking: any;
  Pending: any;
  Approved: any;
  Declined: any
  userID: any
  userData: any;


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
    this.TotalofReservation();
    this.DeclineBooking();
    this.DeclineBoardingHouse();
    const fullname = sessionStorage.getItem('userFullname');
    this.Owner_name = fullname ? fullname : "Guest";
    this.fecthUserData()
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
        this.BoardingHouse = data.length
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

  TotalofReservation() {
    const userID = sessionStorage.getItem('userId')
    this.public_service.reservationlist().subscribe({
      next: (data) => {
        this.Reservation = data.filter((s: any) => s.ownerid === userID).length
      }
    })
  }
  DeclineBooking() {
    const userID = sessionStorage.getItem('userId');
    this.public_service.bookinglist().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.Reservation = data.length;
          this.Pending = data.filter((s: any) => s.ownerid === userID && s.status === '0').length;
          this.Approved = data.filter((s: any) => s.ownerid === userID && s.status === '2').length;
          this.Declined = data.filter((s: any) => s.ownerid === userID && s.status === '1').length;
        } else {
          // console.error('Error: Expected an array but got', data);
        }
      },
      error: (err) => {
        // console.error('Error fetching booking list:', err);
      }
    });
  }
  DeclineBoardingHouse() {

    this.public_service.boardinghouselist().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.Pending = data.filter((s: any) => s.status === '0').length;
          this.Approved = data.filter((s: any) => s.status === '2').length;
          this.Declined = data.filter((s: any) => s.status === '1').length;
        } else {
          console.error('Error: Expected an array but got', data);
        }
      },
      error: (err) => {
        console.error('Error fetching booking list:', err);
      }
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



