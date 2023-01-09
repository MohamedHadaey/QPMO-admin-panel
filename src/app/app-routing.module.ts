import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { ForgetPassComponent } from './auth/components/forget-pass/forget-pass.component';
import { LoginComponent } from './auth/components/login/login.component';
import { VarifyChangedPassComponent } from './auth/components/varify-changed-pass/varify-changed-pass.component';
import { VarifyPassComponent } from './auth/components/varify-pass/varify-pass.component';
import { AuthGuard } from './auth/services/auth.guard';
import { ConstructorsSettingsComponent } from './menu/components/constructors-settings/constructors-settings.component';
import { DepartmentsComponent } from './menu/components/departments/departments.component';
import { EmployeesSettingsComponent } from './menu/components/employees-settings/employees-settings.component';
import { FileTypeSettingsComponent } from './menu/components/file-type-settings/file-type-settings.component';
import { HomeComponent } from './menu/components/home/home.component';
import { ProjectTypesSettingsComponent } from './menu/components/project-types-settings/project-types-settings.component';
import { ProjectsProcessesComponent } from './menu/components/projects-processes/projects-processes.component';
import { ProjectsComponent } from './menu/components/projects/projects.component';
import { ReportsComponent } from './menu/components/reports/reports.component';
import { LanguageComponent } from './shared/components/language/language.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchComponent } from './shared/components/search/search.component';
import { ProfileComponent } from './user/components/profile/profile.component';


const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path:"home", component: HomeComponent , canActivate:[AuthGuard]},
  {path:"projects", component: ProjectsComponent , canActivate:[AuthGuard]},
  {path:"reports", component: ReportsComponent, canActivate:[AuthGuard]},
  {path:"employees-settings", component: EmployeesSettingsComponent, canActivate:[AuthGuard]},
  {path:"constructors-settings", component: ConstructorsSettingsComponent, canActivate:[AuthGuard]},
  {path:"project-types-settings", component: ProjectTypesSettingsComponent, canActivate:[AuthGuard]},
  {path:"file-type-settings", component: FileTypeSettingsComponent, canActivate:[AuthGuard]},
  {path:"departments", component: DepartmentsComponent, canActivate:[AuthGuard]},
  {path:"projects-processes", component: ProjectsProcessesComponent, canActivate:[AuthGuard]},
  {path:"login", component: LoginComponent},
  {path:"varify-pass", component: VarifyPassComponent},
  {path:"varify-changed-pass", component: VarifyChangedPassComponent},
  {path:"change-pass", component: ChangePasswordComponent},
  {path:"forget-pass", component: ForgetPassComponent},
  {path:"profile", component: ProfileComponent},
  {path:"navbar", component: NavbarComponent},
  {path:"language", component: LanguageComponent},
  {path:"Search", component: SearchComponent},
  {path:"logout", component: LogoutComponent},
  {path:"**" , redirectTo: "login", pathMatch: "full"}
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
