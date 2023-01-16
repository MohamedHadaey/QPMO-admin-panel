import { Component } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-employees-settings',
  templateUrl: './employees-settings.component.html',
  styleUrls: ['./employees-settings.component.scss']
})
export class EmployeesSettingsComponent {
  checkDir: boolean = true;
  currentLanguage: any = localStorage.getItem('currentLanguage');
  display: any;

   ngOnInit(): void {
    // for check directions after any refresh
    if (this.currentLanguage == 'ar') {
      this.checkDir = true;
      $('.content-body').removeClass('content-body-ltr');
      $('.content-body').addClass('content-body-rtl');
      $("#bg-select").css("background-position","left");
    } else {
      this.checkDir = true;
      $('.content-body').removeClass('content-body-rtl');
      $('.content-body').addClass('content-body-ltr');
      $("#bg-select").css("background-position","right");
    }


    // begin:: form with multiple steps
    const slidePage:HTMLElement | null = document.querySelector(".slidePage");
    const firstNextBtn = document.querySelector(".nextBtn");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");
    const nextBtnThird = document.querySelector(".next-2");
    const prevBtnFourth = document.querySelector(".prev-3");
    const submitBtn = document.querySelector(".submit");
    const progressStep = document.querySelectorAll(".step");
    let max = 4;
    let current = 1;

    // first next btn function
    firstNextBtn?.addEventListener("click", function(){
      if (localStorage.getItem('currentLanguage') == "en") {
        slidePage && (slidePage.style.marginLeft = "-25%");
        progressStep[current].classList.add("active");
        current += 1;
      }else {
        slidePage && (slidePage.style.marginRight = "-25%");
        progressStep[current].classList.add("active");
        current += 1;
      }

    })

    // second next btn function
    nextBtnSec?.addEventListener("click", function(){
      if (localStorage.getItem('currentLanguage') == "en") {
        slidePage && (slidePage.style.marginLeft = "-50%");
        progressStep[current].classList.add("active");
        current += 1;
      }else {
        slidePage && (slidePage.style.marginRight = "-50%");
        progressStep[current].classList.add("active");
        current += 1;
      }

    })

     // third next btn function
     nextBtnThird?.addEventListener("click", function(){
      if (localStorage.getItem('currentLanguage') == "en") {
        slidePage && (slidePage.style.marginLeft = "-75%");
        progressStep[current].classList.add("active");
        current += 1;

      }else {
        slidePage && (slidePage.style.marginRight = "-75%");
        progressStep[current].classList.add("active");
        current += 1;
      }

    });

      // submit btn function
      submitBtn?.addEventListener("click", function(){
        if (localStorage.getItem('currentLanguage') == "en") {
          location.reload();
        }else {
          location.reload();
        }

      })



       // first prev btn function
       prevBtnSec?.addEventListener("click", function(){
        if (localStorage.getItem('currentLanguage') == "en") {
          slidePage && (slidePage.style.marginLeft = "0%");
          progressStep[current-1].classList.remove("active");
          current -= 1;
        }else {
          slidePage && (slidePage.style.marginRight = "0%");
          progressStep[current-1].classList.remove("active");
          current -= 1;
        }

      })

      // second prev btn function
      prevBtnThird?.addEventListener("click", function(){
        if (localStorage.getItem('currentLanguage') == "en") {
          slidePage && (slidePage.style.marginLeft = "-25%");
          progressStep[current-1].classList.remove("active");
          current -= 1;
        }else {
          slidePage && (slidePage.style.marginRight = "-25%");
          progressStep[current-1].classList.remove("active");
          current -= 1;
        }

      })

       // third prev btn function
       prevBtnFourth?.addEventListener("click", function(){
        if (localStorage.getItem('currentLanguage') == "en") {
          slidePage && (slidePage.style.marginLeft = "-50%");
          progressStep[current-1].classList.remove("active");
          current -= 1;
        }else {
          slidePage && (slidePage.style.marginRight = "-50%");
          progressStep[current-1].classList.remove("active");
          current -= 1;
        }

      })

    // end:: form with multiple steps

  }

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
