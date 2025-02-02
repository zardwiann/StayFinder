import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usermodule } from '../User/user';
import { Router } from '@angular/router';
import { LoginserviceService } from '../User/loginservice.service';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  angForm: any = FormGroup;
  type: any;
  users: Usermodule[] = [];

  constructor(
    private authservice: LoginserviceService,
    private fb: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

  }
  postdata(angForm1: any) {
    this.authservice
      .login(angForm1.value.username, angForm1.value.password)
      .pipe(take(1))
      .subscribe(
        (response) => {
          if (response?.success && response?.user?.id) {
            // Store user details in sessionStorage
            sessionStorage.setItem('userId', response.user.id);
            sessionStorage.setItem('userRole', response.user.role);
            sessionStorage.setItem('userStatus', response.user.status);
            this.router.navigate(['/main']);
          } else {
            console.error('Invalid user data received:', response?.message || 'No user data available');
          }
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
  }
  

}
