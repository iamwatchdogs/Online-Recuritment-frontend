// login.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  'email': string = '';
  'password': string = '';
  'roleId': string = '';
  showUniqueIdInput: boolean = false;
  selectedRole: string = '';
  constructor(private router: Router) {}

  login() {
    // Here you can perform authentication logic
    console.log('Username:', this['email']);
    console.log('Password:', this['password']);
    console.log('RoleId:', this['roleId']);

    // TODO:
    // ----
    // Still need to finish these pages but removing/renaming
    // the job-availability and appointment components.
    // ----
    //
    // if(this['roleId'].includes('STD')){
    //   this.router.navigate(['/student']);
    // } else if(this['roleId'].includes('EMP')){
    //   this.router.navigate(['/employee']);
    // } else {
    //   this.router.navigate(['/']);
    // }
  }
  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}

// login.component.ts
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   'username': string = '';
//   'password': string = '';
//   email: any;
//   roleType: string = '';
//   constructor(private router: Router) {}

//   login() {
//     // Here you can perform authentication logic
//     console.log('Username:', this['username']);
//     console.log('Password:', this['password']);
//     if (this.roleType === 'job-availability') {
//       this.router.navigate(['/job-availability']);
//     }
//   }
//   navigateToSignUp() {
//     this.router.navigate(['/signup']);
//   }
// }
