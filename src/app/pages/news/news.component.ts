import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiServiceService } from '../services/rest-api-service.service';
import { SpinnerService } from '../services/spinner.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private params: any;
  newsId : string = '';
  news: any = [];
  latestNewsList: any = [];
  moreNewsList: any = [];
  comments: Array<any> = [];
  commentForm!: FormGroup;
  showShareMenu: boolean = false;


  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private restApiService: RestApiServiceService,
              private spinnerService: SpinnerService,
              private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.params = this.route.snapshot.queryParamMap;
    const id = this.params.get('id');
    if (id) {
      this.newsId = id;
    }

    console.log(id);
    this.getNews();
    this.commentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.loadComments();
    this.comments.push({
      name: 'Dhanraj D. Hasure',
      email: 'dhanrajdhasure@gmail.com',
      text: 'I Have developed this application in Angular using Spring Boot and MongoDB. Please check it out and give it a try.', // Default comment text
      date: new Date().toLocaleString(),
      likes: 0,
      reported: false
  });

  // // setInterval(() => {
  // //   this.spinnerService.show();
  // // }, 1000);

  // setInterval(() => {
  //   this.spinnerService.hide();
  // }, 3000);
  }

  scrollToTop() {
    window.scrollTo(0, 0); 
  }


  getNews() {
    this.spinnerService.show();
    
    this.restApiService.getNewsList().subscribe((newsList) => {

      newsList.forEach((news: any) => {
        news.Image = `https://picsum.photos/600/338?random=${this.getRandomInt(1, 10)}`;
      })

      setTimeout(() => {
         
      }, 1000);
      this.latestNewsList = newsList
      this.moreNewsList = newsList
      this.spinnerService.hide();
      this.getNewsById(this.newsId);
      
    });
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getNewsById(id: string) {
    this.spinnerService.show();
    
   this.news = this.moreNewsList.filter((news:any) => {
      return news.new_id === id;
    })[0];
    console.log("QFWQ",this.news);
    this.spinnerService.hide();
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { id: id }, queryParamsHandling: 'merge' });
    this.scrollToTop();
  }

  // Add a new comment
  addComment() {
    const newComment = {
      name: this.commentForm.value.name,
      email: this.commentForm.value.email,
      text: this.commentForm.value.comment,
      date: new Date().toLocaleString(),
      likes: 0, // Initialize likes count
      reported: false
    };

    this.comments.push(newComment);
    this.saveComments();
    this.commentForm.reset();
    this.toastService.showToast('Comment added successfully', 'success');
  }

  checkToaster() {
    this.toastService.showToast('Comment added successfully', 'success');
  }

  // Like a comment
  likeComment(comment: any) {
    comment.likes += 1;
    this.saveComments();
  }

  // Report a comment
  reportComment(comment: any) {
    comment.reported = true;
    alert('Comment reported.');
    this.saveComments();
  }

  // Save comments to local storage
  saveComments() {
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  // Load comments from local storage
  loadComments() {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      this.comments = JSON.parse(savedComments);
    }
  }
  
  ngOnDestroy() {
    localStorage.removeItem('comments');
  }

  toggleShareMenu() {
    this.showShareMenu = !this.showShareMenu;
  }

  // Share on WhatsApp
  shareOnWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.news.Headline + ' ' + this.news.url)}`;
    window.open(url, '_blank');
  }

  // Share on Facebook
  shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.news.url)}`;
    window.open(url, '_blank');
  }

  // Share on Instagram (Note: Instagram doesn't support sharing links directly)
  shareOnInstagram() {
    alert('Instagram sharing is not directly supported for URLs. Please share the link manually.');
  }

  // Share on Twitter
  shareOnTwitter() {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.news.Headline)}&url=${encodeURIComponent(this.news.url)}`;
    window.open(url, '_blank');
  }

  // Share on LinkedIn
  shareOnLinkedIn() {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.news.url)}&title=${encodeURIComponent(this.news.Headline)}`;
    window.open(url, '_blank');
  }


}

