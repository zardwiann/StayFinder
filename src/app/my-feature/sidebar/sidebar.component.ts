import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  Owner_name: any;
  isUserAdmin: boolean = false;
  isUserOwner: boolean = false;
  isUserGuest: boolean = false

  constructor(private router: Router, private renderer: Renderer2) { }
  ngOnInit(): void {

    const isToggled = localStorage.getItem('sb|sidebar-toggle') === 'true';
    if (isToggled) {
      this.renderer.addClass(document.body, 'sb-sidenav-toggled');
    }
    this.CHeckuserrole()
  }
   toggleSidebar(event: Event): void {
    event.preventDefault();
    const toggled = document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', String(toggled));
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
