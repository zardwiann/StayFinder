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
            sessionStorage.setItem('userRole', response.user.role); 
            const role = response.user.role;
            if (role === 0) {
              this.router.navigate(['/main']);
            } else if (role === 1) {
              this.router.navigate(['/main']);
            } else if (role === 2) {
              console.log('guest')
            }
          } else {
            console.error('No valid user data received. Debug details:');
            console.error(response?.message || 'Unknown error');
          }
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
  }










}
