import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _Router: Router,private _http: HttpClient) { }

  version: any = 1;
  currentLanguage: any = localStorage.getItem('currentLanguage');

  //Token:any=JSON.parse(localStorage.getItem("token"));

  // logOut function
  logout() {
    localStorage.removeItem("isLogin");
    this._Router.navigate(['/login']);
  }

  signIn(Username:any, pass:any): Observable<any> {
    //https://localhost:44371/api/v1/_Auth/Login?uname=Ramymakram&pass=000000000000&culture=en-sa
    return this._http.post(`https://localhost:44371/api/v${this.version}/_Auth/Login?uname=${Username}&pass=${pass}&culture=${this.currentLanguage}`, null);
  }
}
