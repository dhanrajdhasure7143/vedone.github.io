import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  apiUrl = 'https://shot.screenshotapi.net/screenshot?token=16FVS0R-V1P42CM-MYC7N9A-YW9X2DS&url=';
  apiKey = '&token=16FVS0R-V1P42CM-MYC7N9A-YW9X2DS';
  headlines = [
    "Amazon Great Indian Festival offers up to 70% off on furniture!",
    "Flipkart Big Billion Days sale: Unbeatable deals on electronics!",
    "Exciting Diwali discounts on home decor items at Myntra!",
    "Furniture Fest: Flat 50% off on select items this festive season!",
    "Home Centre unveils huge Diwali offers on living room essentials!",
    "Pepperfry announces Diwali Bonanza with discounts on all items!",
    "MakeMyHome sale: Special discounts on furniture and decor!",
    "Furniture Mega Sale: Get your dream sofa at half the price!",
    "Home Decor Carnival: Add a new look to your space with 60% off!",
    "Urban Ladder festive offers: Upto 80% off on selected items!"
  ];

  descriptions = [
    "Upgrade your home this festive season with amazing discounts on top brands. Get up to 70% off on furniture and decor items during the Amazon Great Indian Festival!",
    "Celebrate Diwali with special discounts on chairs, tables, sofas, and more! Limited time offers on all furniture essentials.",
    "Add elegance to your home with exclusive festive offers on premium furniture. Avail discounts up to 80% this season!",
    "Explore the latest offers on home decor and furniture. Diwali brings discounts that you can’t miss!",
    "From living rooms to bedrooms, elevate your home with designer furniture at unbeatable prices.",
    "Get ready for the festive season with new furniture for your home. Check out the latest discounts and celebrate Diwali with style!",
    "Don’t miss out on exciting discounts on dining sets, sofas, and more. Celebrate this Diwali with amazing furniture offers!",
    "Redesign your space at affordable prices! Check out our furniture sale with discounts just in time for Diwali.",
    "Transform your home decor with limited-time offers on all furniture items. Celebrate Diwali with stylish and affordable furniture.",
    "Discover a range of high-quality furniture and enjoy festive discounts this Diwali. Perfect for refreshing your space!"
  ];

  private apiUrlCountries = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]> {
    const dummyData = [
      {
        projectName: 'ChatMate',
        projectId: '001',
        github_url: 'https://github.com/example/project-one',
        url: 'https://vedone.netlify.app',
        // GET https://shot.screenshotapi.net/screenshot?token=TOKEN&url=URL&[OPTIONS]
        preview_img: `assets/ved-chat.png`,
        tech_stack: 'HTML, CSS, JavaScript, Git, GitHub, Firebase, Bootstrap',
        description: 'A chat application that allows users to create accounts and chat with each other in real-time.'
      },
      {
        projectName: 'WeGallery',
        projectId: '002',
        github_url: 'https://github.com/example/project-two',
        url: 'https://vedgallery.netlify.app',
        preview_img: 'assets/ved-gallery.png',
        tech_stack: 'HTML, CSS, JavaScript, Git, GitHub, Firebase, Bootstrap',
        description: 'A web application that allows users to upload and view images.'
      },
      {
        projectName: 'EduVault',
        projectId: '003',
        github_url: 'https://github.com/example/project-three',
        url: 'https://ved-locker.netlify.app/',
        preview_img: 'assets/document.png',
        tech_stack: 'Vue.js, HTML, CSS, JavaScript, Git, GitHub, Firebase, Bootstrap',
        description: 'An e-Vault platform that allows users to create, share, and view educational documents.'
      },
      {
        projectName: 'Vedone',
        projectId: '004',
        github_url: 'https://github.com/example/project-four',
        url: 'https://vedone.netlify.app',
        preview_img: 'assets/vedone.png',
        tech_stack: 'Angular, Java, Spring Boot, MySQL, Git, Github, TypeScript, Bootstrap, MongoDB',
        description: 'A web application that combines news, projects, and events into one platform.'
      }
    ];
    return of(dummyData);
  }


  getNewsList(): Observable<any> {
    let newsList = [];
    for (let i = 0; i < 10; i++) {
    const randomHeadline = this.headlines[Math.floor(Math.random() * this.headlines.length)];
    const randomDescription = this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
      newsList.push({
        Headline: randomHeadline,
        Description: randomDescription,
        Date: `19 Oct 2024, 03:00 PM IST`,
        Image: "https://picsum.photos/600/338?random=${i + 1}",
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

   getAllCountries(): Observable<any> {
    return this.http.get(`${this.apiUrlCountries}/all`);
  }

  getCountryByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrlCountries}/name/${name}`);
  }

}
