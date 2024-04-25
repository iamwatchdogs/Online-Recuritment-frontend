import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
[x: string]: any;
emailOrMobilenumber: string = '';
  otp: string = '';
  otpSent: boolean = false;

  person: any = {};
  
  constructor() { }

  ngOnInit(): void {
  }

  sendOTP() {
    // Implement logic to send OTP
    this.otpSent = true; // For demonstration, assuming OTP is sent successfully
  }

  resetPassword() {
    // Implement logic to reset password
  }
}