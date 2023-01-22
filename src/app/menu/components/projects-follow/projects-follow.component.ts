import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-follow',
  templateUrl: './projects-follow.component.html',
  styleUrls: ['./projects-follow.component.scss']
})
export class ProjectsFollowComponent {



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
