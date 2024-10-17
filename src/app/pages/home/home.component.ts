import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.showSpinner();

    setTimeout(() => {
      this.hideSpinner();
    }, 500);
  }

  showSpinner() {
    this.spinnerService.show();
  }

  hideSpinner() {
    this.spinnerService.hide();
  }

}
