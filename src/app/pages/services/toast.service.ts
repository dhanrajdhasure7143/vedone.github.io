// toast.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private toastSubject = new Subject<Toast>();
    toastState$ = this.toastSubject.asObservable();

    showToast(message: string, type: 'success' | 'error' | 'warning' | 'info') {
        this.toastSubject.next({ message, type });
        console.log('Emitting toast:', { message, type }); // Debug log
        console.log(this.toastSubject);
    }
}
