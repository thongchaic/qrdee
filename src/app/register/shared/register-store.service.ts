import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterStoreService {
  constructor(private http: HttpClient)
  {

  }
  registerstore(password,promptpay,store_name,store_name_en,latitude,longitude,store_type_id){
    const body = {
      password : password,
      promptpay : promptpay,
      store_name:store_name,
      store_name_en:store_name_en,
      latitude:latitude,
      longitude:longitude,
      store_type_id:store_type_id
    }
    return this.http.post<any>(`https://qrdee.co/api/v2/register`,body);
  }

}
