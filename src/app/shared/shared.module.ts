import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { LanguageComponent } from './components/language/language.component';
import { TogglerComponent } from './components/toggler/toggler.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
    SliderComponent,
    LanguageComponent,
    TogglerComponent,
    LogoutComponent,
    ProfileIconComponent,


  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    BrowserModule,

  ],
  exports: [
    NavbarComponent,
    SearchComponent,
    SliderComponent,
    LanguageComponent,
    TogglerComponent,
    LogoutComponent,
    ProfileIconComponent
  ]
})
export class SharedModule { }
