import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SellStatsService {

  baseUrl = `${environment.api_url}`;

  constructor(   
  	private http: HttpClient,
  ) { }

  orders() {
   	 // console.log(`${this.baseUrl}/sell_statss`);
    // return this.http.get<any>(`${this.baseUrl}/sell_statss`);
        return this.http.get<any>(`https://qrdee.co/api/v2/sell_stats`);
  }

   orderss() {
        return this.http.get<any>(`https://qrdee.co/api/v2/sell_statss_order`);
  }
  
}
