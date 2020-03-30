import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
	){

  }


  myOrder(mem_id){

    console.log(`https://qrdee.co/api/v2/myorders/${mem_id}`);
    return this.http.get<any>(`https://qrdee.co/api/v2/myorders/${mem_id}`);

  }

  placeOrder(mem, member_cart, notes, latitude, longitude){

    console.log(mem);
    // console.log(member_cart);
    // console.log(notes);
    // console.log(latitude);
    // console.log(longitude);

    let items = [];
    member_cart.forEach(e => {
      e.products.forEach(p => {
        items.push({
          store_id:e.id,
          product_id:p.id,
          price:p.price,
          qty:1
        });
      });
    });

    const body = {
      member:mem,
      latitude:latitude,
      longitude:longitude,
      notes:notes,
      items:items
    }

    console.log(body);

    return this.http.post<any>(`https://qrdee.co/api/v2/orders`,body);

  }

  searchStores(q,offset,latitude,longitude){
    console.log(`https://qrdee.co/api/v2/stores?q=${q}&offset=${offset}&latitude=${latitude}&longitude=${longitude}`);
    return this.http.get<any>(`https://qrdee.co/api/v2/stores?q=${q}&offset=${offset}&latitude=${latitude}&longitude=${longitude}`);
  }
  getStores(offset,latitude,longitude) {
    console.log(`https://qrdee.co/api/v2/stores?offset=${offset}&latitude=${latitude}&longitude=${longitude}`);
    return this.http.get<any>(`https://qrdee.co/api/v2/stores?offset=${offset}&latitude=${latitude}&longitude=${longitude}`);
  }


//
// updateUser(data,id) {
//     return this.http.post<any>(`https://qrdee.co/api/v1/update_user/${id}`, this.createFormData(data));
//   }
//
//
// createFormData(data): FormData {
//     const fd = new FormData();
//     fd.append('latitude', data.latitude);
//     fd.append('longitude', data.longitude);
//     return fd;
//   }


}
