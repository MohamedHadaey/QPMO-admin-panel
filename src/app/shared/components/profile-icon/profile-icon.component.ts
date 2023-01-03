import { Component } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss']
})
export class ProfileIconComponent {
  checkDir: boolean = true;

  constructor() {
    if (localStorage.getItem('currentLanguage') == 'ar') {
      this.checkDir = true;
    } else {
      this.checkDir = false;
    }
  }

  toggleProfilePopup(){
    $(".profile-popup").slideToggle()
  }
}
