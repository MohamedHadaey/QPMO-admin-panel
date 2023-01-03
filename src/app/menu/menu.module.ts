import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './components/projects/projects.component';
// import ApexCharts for charts
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    BrowserModule,
    NgApexchartsModule,
    SharedModule

  ],
  exports: [

  ],
})
export class MenuModule {}
