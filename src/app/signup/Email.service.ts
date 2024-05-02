

import * as Email from '@emailjs/browser';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  userEmail: string = '';
  generatedOTP: string = 'null';

  constructor(private route: ActivatedRoute) { }

  generateOTP() {
    // Generate a random 6-digit OTP
    this.generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  }

  sendEmail(recipientEmail: string) {
    this.generateOTP(); // Generate OTP before sending the email

    const templateParams = {
      from_name: 'Krish',
      to_name: recipientEmail,
      subject: 'OTP Verification',
      message_html: `Your OTP is: ${this.generatedOTP}`
    };

    const publicKey = 'putPbNfjUPBbICWr1'; // Replace with your EmailJS public key
    Email.send('service_yknabnr', 'template_xxlzugr', templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('OTP sent successfully. Check your email.');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  }

  getGeneratedOTP(): string {
    return this.generatedOTP;
  }
}
