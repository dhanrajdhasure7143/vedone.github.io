import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';
import { RestApiServiceService } from '../services/rest-api-service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  newsList: any[] = [];

  constructor(
    private spinnerService: SpinnerService,
    private router: Router,
    private restApiService: RestApiServiceService,
  ) { }

  ngOnInit(): void {
    this.getNewsList()
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  navigateToNews(new_id: string) {
    this.router.navigate(['/news'], { queryParams: { id: new_id } });
  }

  getNewsList() {
    this.spinnerService.show();
    
    this.restApiService.getNewsList().subscribe((newsList) => {
      this.newsList = newsList;

      this.newsList.forEach((news: any) => {
        news.Image = `https://picsum.photos/600/338?random=${this.getRandomInt(1, 100)}`;
      })
      this.spinnerService.hide();
    });
  }
}
