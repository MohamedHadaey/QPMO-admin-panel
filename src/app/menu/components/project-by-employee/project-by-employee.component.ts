import { Component } from '@angular/core';

@Component({
  selector: 'app-project-by-employee',
  templateUrl: './project-by-employee.component.html',
  styleUrls: ['./project-by-employee.component.scss']
})
export class ProjectByEmployeeComponent {


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
