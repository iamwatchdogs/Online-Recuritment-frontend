// login.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  "username": string = '';
  "password": string = '';
email: any;
  constructor(private router: Router) { }

  login() {
    // Here you can perform authentication logic
    console.log('Username:', this['username']);
    console.log('Password:', this['password']);
  }
  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}
