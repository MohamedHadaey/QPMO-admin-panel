import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MenuService } from '../../services/menu.service';
declare const $: any;
declare var google: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  currentLanguage: any = localStorage.getItem('currentLanguage');
  display: any;

  constructor(
    private _AuthService: AuthService,
    private _MenuService: MenuService
  ) {}
  ngOnInit(): void {
    // for check directions after any refresh
    if (this.currentLanguage == 'ar') {
      $('.content-body').removeClass('content-body-ltr');
      $('.content-body').addClass('content-body-rtl');
    } else {
      $('.content-body').removeClass('content-body-rtl');
      $('.content-body').addClass('content-body-ltr');
    }
  }
  /*********************************/

  // this function to log out
  logOut() {
    this._AuthService.logout();
  }
}
