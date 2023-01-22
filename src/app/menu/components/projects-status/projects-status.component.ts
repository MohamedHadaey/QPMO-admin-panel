import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-status',
  templateUrl: './projects-status.component.html',
  styleUrls: ['./projects-status.component.scss']
})
export class ProjectsStatusComponent {


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
