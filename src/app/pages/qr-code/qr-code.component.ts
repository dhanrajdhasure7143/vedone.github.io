import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  @Input() newsUrl: string = '';

  ngOnInit(): void {
    // this.generateQrCode();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newsUrl']) {
      // console.log('newsUrl changed to:', this.newsUrl);
      this.generateQrCode();
    }
  }

  generateQrCode() {
    const canvas = document.getElementById('qrcodeCanvas') as HTMLCanvasElement;
    if (this.newsUrl) {
      // console.log('Generating QR code for:', this.newsUrl);
  
      QRCode.toCanvas(canvas, this.newsUrl, (error) => {
        if (error) {
          // console.error('Error generating QR code:', error);
        } else {
          // console.log('QR code generated successfully.');
        }
      });
    } else {
      // console.warn('No URL provided for QR code generation.');
    }
  }
  
}
