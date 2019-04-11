import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl = `${environment.api_url}`;

  constructor(
    private http: HttpClient
  ) { }

  newTransaction(products, total_price) {
    const body = {
      total_price: total_price,
      products: products
    }

    console.log(body);

    return this.http.post<any>(`${this.baseUrl}/new_transaction`, body);
  }

  verifyTransaction(transaction) {
    return this.http.post<any>(`${this.baseUrl}/verify_transaction`, transaction);
  }
}
