import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl = `${environment.api_url}/new_transaction`;

  constructor(
    private http: HttpClient
  ) { }

  newTransaction(products, total_price) {
    const body = {
      total_price: total_price,
      products: products
    }

    console.log(body);

    return this.http.post<any>(this.baseUrl, body);
  }

  verifyTransaction() {

  }
}
