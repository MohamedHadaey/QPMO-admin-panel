import { Component, OnInit } from '@angular/core';
// end:: using charts
import { AuthService } from 'src/app/auth/services/auth.service';
declare const $: any;


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {



  constructor(private _AuthService:AuthService) {}

  ngOnInit(): void {
  }
}
