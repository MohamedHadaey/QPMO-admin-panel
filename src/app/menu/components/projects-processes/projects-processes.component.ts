import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-processes',
  templateUrl: './projects-processes.component.html',
  styleUrls: ['./projects-processes.component.scss']
})
export class ProjectsProcessesComponent {
  checkDir: boolean = true;
  currentLanguage: any = localStorage.getItem('currentLanguage');
  display: any;



   ngOnInit(): void { }




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
