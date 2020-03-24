import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = `${ environment.api_url }/user`;

constructor(
    private http: HttpClient
) { }


get(id) {
  return this.http.get<any>(`${this.baseUrl}/${id}`);
}

getUser() {
  return this.http.get<any>(`${this.baseUrl}`);
}
getStoreDistance(latitude,longitude) {
console.log(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
  return this.http.get<any>(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
}



}
