import { Component } from '@angular/core';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent {



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
