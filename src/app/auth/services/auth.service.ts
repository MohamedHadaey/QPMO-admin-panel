import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _Router: Router) { }


  // logOut function
  logout() {
    localStorage.removeItem("isLogin");
    this._Router.navigate(['/login']);
  }
}
