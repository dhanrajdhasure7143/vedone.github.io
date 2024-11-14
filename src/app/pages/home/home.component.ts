import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';
import { RestApiServiceService } from '../services/rest-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private spinnerService: SpinnerService,
    private router: Router,
    private restApiService: RestApiServiceService
  ) { }

  ngOnInit(): void {
    this.showSpinner();

    setTimeout(() => {
      this.hideSpinner();
    }, 1000);
    // this.getCountryByName('india');
    // this.getContries()
  }

  showSpinner() {
    this.spinnerService.show();
  }

  hideSpinner() {
    this.spinnerService.hide();
  }

  getContries() {
    this.spinnerService.show();
    this.restApiService.getAllCountries().subscribe(data => {
      console.log(data);
      this.spinnerService.hide();
    });
  }

  getCountryByName(name: string) {
    console.log(name);
    this.spinnerService.show();
    this.restApiService.getCountryByName(name).subscribe((data: any) => {
      console.log(data);
      console.log(data[0].flags?.png);

      this.spinnerService.hide();
    });
  }

}
