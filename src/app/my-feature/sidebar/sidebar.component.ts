import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  isUserAdmin: boolean = false;
  isUserOwner: boolean = false;
  isUserGuest: boolean = false

  constructor(private router: Router) { }
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
  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.clear()
    this.router.navigate(['/login'])

  }

}
