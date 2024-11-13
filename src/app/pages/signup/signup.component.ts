import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;

  constructor(
    private spinnerService: SpinnerService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onSignup() {
    if (this.signupForm.invalid) return;

    console.log(this.signupForm.value);

    this.spinnerService.show();

    const { name, email, password } = this.signupForm.value;
    let payload = {
      username: name,
      email: email,
      password: password
    } as { username: string; email: string; password: string; }

    this.authService.signup(payload).subscribe(
      response => {
        console.log('Signup successful:', response);
        // Handle success, e.g., save token, redirect, etc.
        this.spinnerService.hide();
      },
      error => {
        console.error('Signup failed:', error);
        this.spinnerService.hide();
      }
    );
  }

}
