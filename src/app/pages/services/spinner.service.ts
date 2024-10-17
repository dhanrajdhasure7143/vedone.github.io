import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  private spinnerVisibility = new BehaviorSubject<boolean>(false);
  spinnerVisibility$ = this.spinnerVisibility.asObservable();

  show() {
    this.spinnerVisibility.next(true);
  }

  hide() {
    this.spinnerVisibility.next(false);
  }
}
