import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiderService {

  constructor(
    private http: HttpClient
  ) { }

  loadRideOrders(){
    return this.http.get(`https://qrdee.co/api/v2/rider`);
  }
  acceptToRide(items,type){
    let body = {
      'ids': items.map(i => i.id),
      'type': type
    }
    console.log(body);
    return this.http.put(`https://qrdee.co/api/v2/rider`, body);

  }
  
}
