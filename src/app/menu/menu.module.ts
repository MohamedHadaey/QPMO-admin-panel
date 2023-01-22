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
import { EmployeesSettingsComponent } from './components/employees-settings/employees-settings.component';
import { ConstructorsSettingsComponent } from './components/constructors-settings/constructors-settings.component';
import { ProjectTypesSettingsComponent } from './components/project-types-settings/project-types-settings.component';
import { FileTypeSettingsComponent } from './components/file-type-settings/file-type-settings.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ProjectsProcessesComponent } from './components/projects-processes/projects-processes.component';
import { ProjectsStatusComponent } from './components/projects-status/projects-status.component';
import { ConstructorsComponent } from './components/constructors/constructors.component';
import { ProjectsFollowComponent } from './components/projects-follow/projects-follow.component';
import { UserMovementsComponent } from './components/user-movements/user-movements.component';
import { ProjectByEmployeeComponent } from './components/project-by-employee/project-by-employee.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    EmployeesSettingsComponent,
    ConstructorsSettingsComponent,
    ProjectTypesSettingsComponent,
    FileTypeSettingsComponent,
    DepartmentsComponent,
    ProjectsProcessesComponent,
    ProjectsStatusComponent,
    ConstructorsComponent,
    ProjectsFollowComponent,
    UserMovementsComponent,
    ProjectByEmployeeComponent
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
