import { Component } from '@angular/core';
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


  constructor(
    public auth: LoginserviceService
  ) { }

  ngOnInit(): void {
    this.CHeckuserrole()
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

}




