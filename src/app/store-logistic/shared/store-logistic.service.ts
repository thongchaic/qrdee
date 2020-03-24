import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StoreLogisticService {

  baseUrl = `${ environment.api_url }/store_id`;

  constructor(
       private http: HttpClient
  	) { }

  get(id) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
 

   gets(id) {
    return this.http.get<any>(`http://qrdee.co/api/v1/product_logistic`);
  }

// getStoreProductDistance(latitude,longitude) {
//   console.log(`http://qrdee.co/api/v1/map_delivery?latitude=${latitude}&longitude=${longitude}`);
//     return this.http.get(`http://qrdee.co/api/v1/map_delivery?latitude=${latitude}&longitude=${longitude}`);
//   }

  getProductLogistic() {
    return this.http.get<any>(`http://qrdee.co/api/v1/product_logistic`);
  }


  
}
