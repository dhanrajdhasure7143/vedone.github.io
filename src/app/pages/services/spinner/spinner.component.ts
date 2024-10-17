import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/pages/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  spinnerVisibility = this.spinner.spinnerVisibility$;

  constructor(private spinner: SpinnerService) {}

  ngOnInit(): void {
  }

}
