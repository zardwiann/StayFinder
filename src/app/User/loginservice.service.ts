import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { Usermodule } from './user';
import { HttpClient } from '@angular/common/http';
import { Api } from '../API/api';
import { PublicService } from '../PublicService/public.service';
import { API_HEADERS_CONFIG } from '../API/api-header.service';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private userSubject: BehaviorSubject<Usermodule>;
  public users: Observable<Usermodule>;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient,
    public public_service: PublicService,
    public api: Api
  ) {
    this.userSubject = new BehaviorSubject<Usermodule>(
      JSON.parse(sessionStorage.getItem('user')!) || null
    );
    this.users = this.userSubject.asObservable();
  }

  public get userValue(): Usermodule {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    const payload = {
      username: username.trim(),
      password: password.trim()
    };

    return this.http.post<any>(this.api.getApi.login, payload, { headers: { 'Content-Type': 'application/json' } })
      .pipe(
        map(user => {
          this.public_service.setToken(user.id);
          sessionStorage.setItem('user',JSON.stringify(user))
          this.userSubject.next(user);
          this.getLoggedInName.emit(true);
        
          return user;
        }),
        catchError(error => {
          console.error('Login error:', error);
          return throwError(() => new Error(error.message || 'Login failed.'));
        })
      );
  }

  register(data: any): Observable<any> {
    return this.http.post(this.api.getApi.register, data,{headers: { 'Content-Type': 'application/json' }});
  }

}
