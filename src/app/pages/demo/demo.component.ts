import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  newsList: any[] = [];

  constructor(
    private spinnerService: SpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.spinnerService.show();

    let newsList = [];
    for (let i = 0; i < 10; i++) {
      newsList.push({
        Headline: `Amazon Great Indian Festival Diwali special offers on Godrej furniture ${i + 1}`,
        Description: `The Amazon Great Indian Festival Diwali special brings unbeatable offers on Godrej furniture, with over 60% off on a wide range of products like chairs, beds, and more. Elevate your home decor with these incredible discounts during the festive season!`,
        Date: `19 Oct 2024, 03:00 PM IST`,
        Image: "https://www.livemint.com/lm-img/img/2024/10/18/600x338/asjfn_1729250646097_1729250651080.png",
        new_id: `jkdsncwjekvwivniwjedwaieucwecaiw${i + 1}xdf${i + 1}`,
        link: "",
        category: "E-Commerce",
        subcategory: "furniture",
        author: `Dhanraj D. Hasure`,
        content: `Get ready to transform your home with the Amazon Great Indian Festival Diwali special offers on Godrej furniture! This festive season, enjoy over 60% off on a stunning selection of chairs, beds, sofas, almirahs, tables, and more. Whether you’re upgrading your living room, furnishing a new home, or simply looking to add a touch of elegance to your space, this is the perfect opportunity.Godrej’s reputation for quality and style shines through in each piece, ensuring your home not only looks great but feels comfortable too. Don’t miss out on these unbeatable prices during the Amazon sale—the time to act is now! With limited stock available, you’ll want to grab these deals before they disappear. Elevate your living space this Diwali and make it a celebration to remember! Shop now and take advantage of these fantastic offers!`,
        source: "flipkart.com",
        language: "english",
        country: "India",
        published_at: `19 Oct 2024, 03:00 PM IST`,
        url: `www.flipkart.com/amazon-great-indian-festival-diwali-special-offers-on-godrej-furniture-1729250646097_1729250651080.html ${i + 1}`,
        created_at: `18 Oct 2024, 03:00 PM IST`,
        updated_at: "",
        deleted_at: ""
      });
    }

    this.newsList = newsList;

    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  navigateToNews(new_id: string) {
    this.router.navigate(['/news'], { queryParams: { id: new_id } });
  }

}
