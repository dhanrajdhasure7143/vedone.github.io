import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private spinnerService: SpinnerService
  ) { 
    this.loginForm = this.formBuilder.group({
      email:['',  [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  navigateToSignup() {
    window.location.href = '/signup';
  }

  navigateToForgotPassword() {
    window.location.href = '/forgot-password';
  }

  login() {
  if (this.loginForm.invalid) return;

  console.log(this.loginForm.value);

  this.spinnerService.show();

  const { email, password } = this.loginForm.value;

  this.authService.login(email, password).subscribe(
    response => {
      console.log('Login successful:', response);
      // Handle success, e.g., save token, redirect, etc.
      this.spinnerService.hide();
    },
    error => {
      console.error('Login failed:', error);
      this.spinnerService.hide();
    }
  );
}

}
