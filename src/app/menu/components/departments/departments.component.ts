import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {


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
