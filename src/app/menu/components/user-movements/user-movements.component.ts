import { Component } from '@angular/core';

@Component({
  selector: 'app-user-movements',
  templateUrl: './user-movements.component.html',
  styleUrls: ['./user-movements.component.scss']
})
export class UserMovementsComponent {


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
