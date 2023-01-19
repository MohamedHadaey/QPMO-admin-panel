import { Component } from '@angular/core';

@Component({
  selector: 'app-file-type-settings',
  templateUrl: './file-type-settings.component.html',
  styleUrls: ['./file-type-settings.component.scss']
})
export class FileTypeSettingsComponent {





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
