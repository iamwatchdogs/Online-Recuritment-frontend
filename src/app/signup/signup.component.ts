import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl,ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

import { strongPasswordValidator } from './custom-validators'; // Import the custom validator

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  countries: string[] = ['INDIA', 'UK', 'USA']; // List of valid nationalities
  genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ];

  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3)]],
      address:['',Validators.required],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      dob: ['', Validators.required],
      password: ['', [Validators.required,  strongPasswordValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }


  signup() {
    if (this.signupForm.valid) {
      console.log('Form submitted successfully!');
      // Add your signup logic here
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
  navigateToLogin() {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }

}
