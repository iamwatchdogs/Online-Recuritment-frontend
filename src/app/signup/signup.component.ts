import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from './Email.service';
import { strongPasswordValidator } from './custom-validators'; // Import the custom validator
import { OtpVerificationComponent } from '../otp-verification/otp-verification.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  @ViewChild(OtpVerificationComponent)
  OtpVerificationComponent!: OtpVerificationComponent;
  userEmail: string = '';
  //generatedOTP: string = '';
  countries: string[] = ['INDIA', 'UK', 'USA']; // List of valid nationalities
  genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        // username: ['', [Validators.required,Validators.minLength(3)]],
        address: ['', Validators.required],
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern('[0-9]{10}')],
        ],
        gender: ['', Validators.required],
        nationality: ['', Validators.required],
        role: ['', Validators.required],
        dob: ['', Validators.required],
        password: ['', [Validators.required, strongPasswordValidator()]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  signup() {
    if (this.signupForm.valid) {
      const role = this.signupForm.value.role;

      this.emailService.receiveRole(role);

      const email = this.signupForm.value.email;
      this.emailService.sendEmail(email);

      console.log('Form submitted successfully!');
      this.navigateToOtp(email);
      // Add your signup logic here
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  navigateToLogin() {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }

  navigateToOtp(email: string) {
    this.router.navigate(['/otpverification'], {
      queryParams: { email: email },
    });
  }
}
