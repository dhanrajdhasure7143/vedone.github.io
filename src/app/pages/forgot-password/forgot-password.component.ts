import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateToLogin() {
    window.location.href = '/login';
  }

  navigateToSignup() {
    window.location.href = '/signup';
  }

}
