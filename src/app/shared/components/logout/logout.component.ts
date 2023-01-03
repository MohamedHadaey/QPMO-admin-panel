import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
declare const $: any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    private _AuthService: AuthService
  ) {}


  // show and hide popup checker
  togglePopup() {
    $(".check-popup-logout").fadeToggle();
  }


    // this function to log out
    logOut() {
      this._AuthService.logout();

   }

   toggleProfilePopup(){
    $(".profile-popup").slideToggle()
  }
}
