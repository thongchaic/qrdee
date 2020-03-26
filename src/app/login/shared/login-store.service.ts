import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginStoreService {

  baseUrl = `${ environment.api_url }`;
  constructor(private http: HttpClient)
  { }


  logintore(promptpay,password){
    const body = {
    	  promptpay:promptpay,
        password : password
      }
    return this.http.post<any>(`https://qrdee.co/api/v2/login`,body);
  }

}
