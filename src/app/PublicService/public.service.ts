import { Injectable } from '@angular/core';
import { Api } from '../API/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(
    public api: Api,
    public http: HttpClient
  ) { }

  // TOKEN
  setToken(token: string) {
    sessionStorage.setItem('user', token);
  }
  getToken() {
    return sessionStorage.getItem('user');
  }
  deleteToken() {
    sessionStorage.removeItem('user');
    sessionStorage.clear()
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken) {
      return true
    }
    return false;
  }
}
