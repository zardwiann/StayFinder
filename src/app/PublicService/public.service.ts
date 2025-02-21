import { Injectable } from '@angular/core';
import { Api } from '../API/api';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_HEADERS_CONFIG } from '../API/api-header.service';

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

  updateUserDetails(payload: any) {
    return this.http.post<any>(this.api.getApi.update_account, payload, API_HEADERS_CONFIG)
  }
  get_users(payload: any) {
    return this.http.get<any>(this.api.getApi.getowner, { params: payload });
  }


  fetchOwner() {
    return this.http.get<any>(this.api.getApi.user_role);
  }
  boardinghouselist() {
    return this.http.get<any>(this.api.getApi.boardinghouselist);
  }
  reservationlist() {
    return this.http.get<any>(this.api.getApi.reservationlist);
  }

  owner(): Observable<any> {
    return this.http.get<any>(this.api.getApi.ownerrecord);
  }
  bookinglist(): Observable<any> {
    return this.http.get<any>(this.api.getApi.bookinglist);
  }
  Userlist(): Observable<any> {
    return this.http.get<any>(this.api.getApi.userlist);
  }
  SelectOwner(id: any): Observable<any> {
    const myFormData = new FormData();
    myFormData.append('id', id);
    return this.http.post<any>(this.api.getApi.selecttheOwner, myFormData, {
    });
  }

  SelectBoardingHouse(id: any): Observable<any> {
    const myFormData = new FormData();
    myFormData.append('id', id);
    return this.http.post<any>(this.api.getApi.SelectBoardinghouse, myFormData, {
    });
  }
  SelectBooking(id: any): Observable<any> {
    const myFormData = new FormData();
    myFormData.append('id', id);
    return this.http.post<any>(this.api.getApi.SelectBooking, myFormData, {
    });
  }

  BookingApproval(payload: any) {
    return this.http.post<any>(this.api.getApi.bookingapproval, payload, API_HEADERS_CONFIG)
  }


  ApproveOwner(payload: any, id: any) {
    return this.http.post<any>(this.api.getApi.updatestatus, payload, API_HEADERS_CONFIG)
  }


  addbooking(data: any): Observable<any> {
    return this.http.post(this.api.getApi.addbooking, data, { headers: { 'Content-Type': 'application/json' } });
  }
  UpdateStatus(payload: any) {
    return this.http.post<any>(this.api.getApi.updatestatus, payload, API_HEADERS_CONFIG)
  }
  BoardingHouseOwnerList(id: any) {
    const myFormData = new FormData();
    myFormData.append('id', id);
    return this.http.post<any>(this.api.getApi.boardinghouseownerlist, myFormData, {
    });

  }

  deleteownerboarding(id: any): Observable<any> {
    var myFormData = new FormData();
    myFormData.append('id', id)
    return this.http.post<any>(this.api.getApi.deleteownerboarding, myFormData)
  }
  deletebooking(id: any): Observable<any> {
    var myFormData = new FormData();
    myFormData.append('id', id)
    return this.http.post<any>(this.api.getApi.deletebooking, myFormData)
  }
  SelectBoardinghouse(id: any) {
    var myFormData = new FormData();
    myFormData.append('id', id);
    return this.http.post<any>(this.api.getApi.SelectBoardinghouse, myFormData)

  }

  UpdateBoardinghouse(payload: any, id: any) {
    return this.http.post<any>(this.api.getApi.UpdateBoardinghouse, payload, API_HEADERS_CONFIG)
  }
  addBoardingHouse(data: any) {
    return this.http.post(this.api.getApi.addboardinghouse, data, { headers: { 'Content-Type': 'application/json' } })
  }


}
