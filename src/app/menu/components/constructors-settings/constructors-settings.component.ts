import { Component } from '@angular/core';

@Component({
  selector: 'app-constructors-settings',
  templateUrl: './constructors-settings.component.html',
  styleUrls: ['./constructors-settings.component.scss']
})
export class ConstructorsSettingsComponent {




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
