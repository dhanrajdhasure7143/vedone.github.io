import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  categoriesList: any[] = [
    { category_id: 1, category_name: 'Technology' },
    { category_id: 2, category_name: 'Sports' },
    { category_id: 3, category_name: 'Entertainment' },
    { category_id: 4, category_name: 'Politics' },
    { category_id: 5, category_name: 'Business' },
  ];
  trendingNewsList: any[] = [];
  copied: boolean = false;

  constructor(
    private spinnerService: SpinnerService,
    private router: Router,
    private restApiService: RestApiServiceService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getNewsList();
    this.getCategoriesList();
    this.getTrendingNewsList();
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

      this.trendingNewsList = [...this.newsList];
      this.spinnerService.hide();
    });
  }

  getCategoriesList() {
    // TO DO: implement logic to fetch categories list
  }

  getTrendingNewsList() {
    // TO DO: implement logic to fetch trending news list
  }

  getNewsByCategory(categoryId: number): void {
    // TO DO: implement logic to fetch news by category
  }

  loadMore() {
    this.spinnerService.show();
    setTimeout(() => {
      this.newsList = this.newsList.concat(this.newsList);
      this.spinnerService.hide();
    }, 1000);
  }

  selectedNews: any = null;
  selectedNewsUrl: string = '';

  showQrCodeModal(news: any): void {
    this.selectedNews = news;
    this.selectedNewsUrl = `http://vedone.netlify.app/news?id=${news.new_id}`;
    this.cdr.detectChanges();
  }

  copyToClipboard(): void {
    if (this.selectedNewsUrl) {
      navigator.clipboard.writeText(this.selectedNewsUrl);
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 2000);
    }
  }
}