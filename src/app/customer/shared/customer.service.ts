import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


constructor(
    private http: HttpClient
) { }


addStoreStar(id, rating) {
  return this.http.post(`https://qrdee.co/api/v2/rating/store/${id}`, { star: rating });
}
addProductComment(id, comment) {

  

  return this.http.post(`https://qrdee.co/api/v2/rating/product/${id}`, { comment: comment });
}

// get(id) {
//   return this.http.get<any>(`${this.baseUrl}/${id}`);
// }
//
// getUser() {
//   return this.http.get<any>(`${this.baseUrl}`);
// }
// getStoreDistance(latitude,longitude) {
// console.log(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
//   return this.http.get<any>(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
// }



}
