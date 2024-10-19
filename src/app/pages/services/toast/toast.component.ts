// toast.component.ts
import { Component, OnInit } from '@angular/core';
import { ToastService, Toast } from '../toast.service';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
    toasts: Toast[] = [];

    constructor(private toastService: ToastService) {}

    ngOnInit() {
      this.toasts.push({ message: 'Test toast message!', type: 'success' });
      
      console.log('Static toast added:', this.toasts);
        this.toastService.toastState$.subscribe((toast: Toast) => {
            this.toasts.push(toast);
            setTimeout(() => {
                this.toasts.shift();
                console.log('Toasts after shift:', this.toasts);
            }, 3000);
        });

        console.log("Toast Component Called ",this.toasts);
    }
}
