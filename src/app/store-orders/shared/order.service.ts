import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

 baseUrl = `${environment.api_url}`;

  constructor(   
  	private http: HttpClient
  ) { }
 

  get(id) {
    return this.http.get<any>(`${this.baseUrl}/orders/${id}`);
  }

  order() {
   	// console.log(`${this.baseUrl}/order`);
    return this.http.get<any>(`${this.baseUrl}/order`);
  }


  getProductLogistic() {
    // console.log(`${this.baseUrl}/order`);
  //  return this.http.get<any>(`${this.baseUrl}/order`);
   return this.http.get<any>(`${this.baseUrl}/product_logistic`);
 }


   deleteOrder(id) {
   	// console.log(`${this.baseUrl}/deleteorder/${id}`);
    return this.http.delete<any>(`${this.baseUrl}/delete_order/${id}`);
    
  }


   OrderStore(code_randoms) {
     // console.log(`${this.baseUrl}/order`);
    return this.http.get<any>(`${this.baseUrl}/order_store/${code_randoms}`);
  }

}
