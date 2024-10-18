import { Component, OnInit } from '@angular/core';
import { RestApiServiceService } from '../services/rest-api-service.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  projects: any[] = [];

  constructor(private restApiService: RestApiServiceService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.spinnerService.show();
    this.restApiService.getProjects().subscribe(data => {
      this.projects = data;
      console.log(this.projects);
      this.spinnerService.hide();
    })
  }

  navigateToProject(projectUrl: string) {
    window.location.href = `${projectUrl}`;
  }

  navigateToGithub(url: string) {
    window.location.href = `${url}`;
  }

}
