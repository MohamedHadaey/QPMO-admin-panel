import { Component } from '@angular/core';

@Component({
  selector: 'app-project-types-settings',
  templateUrl: './project-types-settings.component.html',
  styleUrls: ['./project-types-settings.component.scss']
})
export class ProjectTypesSettingsComponent {




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
