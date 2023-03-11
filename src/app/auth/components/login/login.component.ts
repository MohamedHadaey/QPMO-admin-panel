import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
declare const $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  visible: boolean = true;
  changeType: boolean = true;
  currentLanguage: any = localStorage.getItem("currentLanguage");
  constructor( private _AuthService: AuthService,
    private _Router: Router) {

    }



    loginForm: FormGroup = new FormGroup({
      Username: new FormControl(null, [Validators.required]),
      pass: new FormControl(null, [Validators.required]),
      checker: new FormControl(null, []),
    });



  submitLoginForm(loginForm: FormGroup) {
    console.log(loginForm.value)
    // if user delete [disabled]="registerForm.invalid" from html inspect
    if (loginForm.invalid) {
      return;
    } else {
      this._AuthService
        .signIn(this.loginForm.value.Username, this.loginForm.value.pass)
        .subscribe(
          (response) => {
            console.log(response);
            if (response.Success) {
              localStorage.setItem('isLogin','true');
              this._Router.navigate(['/home']);
              localStorage.setItem('C_Code', response.Data);
            } else {
              $('#validate-msg').slideDown();
              setTimeout(this.deleteMsg, 4000);
            }
          },
          (error) => {
            if (this.currentLanguage == 'ar-sa') {
              console.log('خطأ غير معروف من الخادم !!')
            } else {
              console.log('Unknown error From Server!!')
            }
            // if (this.currentLanguage == 'ar-sa') {
            //   this.toastr.error('خطأ غير معروف من الخادم !!');
            // } else {
            //   this.toastr.error('Unknown error From Server!!');
            // }
          }
        );
    }
    this.loginForm.reset();
  }

    //  to delete message of wrong inputs value
    deleteMsg() {
      $("#validate-msg").slideUp()
    }



  ngOnInit(): void {
  }


   // this function to show and hide password
   viewPassword() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
}
