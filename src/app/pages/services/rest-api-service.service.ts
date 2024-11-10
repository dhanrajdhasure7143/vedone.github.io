import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  apiUrl = 'https://shot.screenshotapi.net/screenshot?token=16FVS0R-V1P42CM-MYC7N9A-YW9X2DS&url=';
  apiKey = '&token=16FVS0R-V1P42CM-MYC7N9A-YW9X2DS';
  constructor() { }

  getProjects(): Observable<any[]> {
    const dummyData = [
      {
        projectName: 'Ved One Chat App for the COllege Student Community',
        projectId: '001',
        github_url: 'https://github.com/example/project-one',
        url: 'https://vedone.netlify.app',
        // GET https://shot.screenshotapi.net/screenshot?token=TOKEN&url=URL&[OPTIONS]
        preview_img: `${this.apiUrl}https://vedone.netlify.app&full_page=true&output=image&file_type=png&wait_for_event=load`,
        tech_stack: 'Angular, Node.js'
      },
      {
        projectName: 'Project Two',
        projectId: '002',
        github_url: 'https://github.com/example/project-two',
        url: 'https://project-two.com',
        preview_img: 'https://via.placeholder.com/150',
        tech_stack: 'React, Firebase'
      },
      {
        projectName: 'Project Three',
        projectId: '003',
        github_url: 'https://github.com/example/project-three',
        url: 'https://project-three.com',
        preview_img: 'https://via.placeholder.com/150',
        tech_stack: 'Vue.js, Express.js'
      },
      {
        projectName: 'Project Two',
        projectId: '002',
        github_url: 'https://github.com/example/project-two',
        url: 'https://project-two.com',
        preview_img: 'https://via.placeholder.com/150',
        tech_stack: 'React, Firebase'
      },
      {
        projectName: 'Project Three',
        projectId: '003',
        github_url: 'https://github.com/example/project-three',
        url: 'https://project-three.com',
        preview_img: 'https://via.placeholder.com/150',
        tech_stack: 'Vue.js, Express.js'
      }
    ];
    return of(dummyData);
  }

  getNewsList(): Observable<any> {
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
    return of(newsList);
  }

}
