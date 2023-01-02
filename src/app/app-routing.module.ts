import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { ForgetPassComponent } from './auth/components/forget-pass/forget-pass.component';
import { LoginComponent } from './auth/components/login/login.component';
import { VarifyChangedPassComponent } from './auth/components/varify-changed-pass/varify-changed-pass.component';
import { VarifyPassComponent } from './auth/components/varify-pass/varify-pass.component';
import { AuthGuard } from './auth/services/auth.guard';
import { HomeComponent } from './menu/components/home/home.component';
import { ProjectsComponent } from './menu/components/projects/projects.component';
import { LanguageComponent } from './shared/components/language/language.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchComponent } from './shared/components/search/search.component';


const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path:"home", component: HomeComponent , canActivate:[AuthGuard]},
  {path:"projects", component: ProjectsComponent , canActivate:[AuthGuard]},
  {path:"login", component: LoginComponent},
  {path:"varify-pass", component: VarifyPassComponent},
  {path:"varify-changed-pass", component: VarifyChangedPassComponent},
  {path:"change-pass", component: ChangePasswordComponent},
  {path:"forget-pass", component: ForgetPassComponent},
  // {path:"profile", component: ProfileComponent, canActivate:[AuthGuard]},
  // {path:"messages", component: MessagesComponent, canActivate:[AuthGuard]},
  {path:"navbar", component: NavbarComponent},
  {path:"language", component: LanguageComponent},
  {path:"Search", component: SearchComponent},
  {path:"**" , redirectTo: "login", pathMatch: "full"}
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
