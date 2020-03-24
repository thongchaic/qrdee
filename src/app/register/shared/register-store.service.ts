import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterStoreService {
baseUrl = `${ environment.api_url }`;
  constructor(private http: HttpClient)
  { }

registerstore(password,firstname,lastname,promptpay,mobile_number,store_name,email,latitude,longitude){
  const body = {
      // username : username,
      password : password,
      firstname : firstname,
      lastname  : lastname,
      promptpay : promptpay,
      mobile_number : mobile_number,
      store_name:store_name,
      email:email,
      latitude:latitude,
      longitude:longitude,

    }
    console.log(body);
  return this.http.post<any>(`https://qrdee.co/api/v1/register`,body);
}

}
