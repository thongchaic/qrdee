import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  baseUrl = `${environment.api_url}/promptpayQRs`;

  constructor(
    private http: HttpClient,
    // private barcodeScanner: BarcodeScanner
  ) { }

  generatePromptPayQRs(transaction) {
    return this.http.post<any>(this.baseUrl, transaction);
  }

  // generateQRCode() {
  //   return this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, '00020101021129370016A000000677010111011300660000000005802TH530376463048956');
  // }
}
