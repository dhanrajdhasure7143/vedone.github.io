import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  constructor() { }

  getProjects(): Observable<any[]> {
    const dummyData = [
      {
        projectName: 'Ved One Chat App', 
        projectId: '001',
        github_url: 'https://github.com/example/project-one',
        url: 'https://project-one.com',
        preview_img: 'https://via.placeholder.com/150',
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
}
