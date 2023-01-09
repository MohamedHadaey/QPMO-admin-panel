import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MenuService } from '../../services/menu.service';
declare const $: any;
declare var google: any;
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
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

    let stepsForm: HTMLElement | null = document.querySelector('.multisteps-form__form');
    // begin:: form with multiple steps
    
    // end:: form with multiple steps

  }
  /*********************************/





  // pagination of list of projects
  changePage(eventInfo: any) {
    this.currentPage = eventInfo.target.innerHTML;
  }

  currentPage: number = 1;

  getNextPage() {
    this.currentPage++;
  }

  getPrviousPage() {
    if (this.currentPage == 1) {
      return;
    } else {
      this.currentPage--;
    }
  }
}
