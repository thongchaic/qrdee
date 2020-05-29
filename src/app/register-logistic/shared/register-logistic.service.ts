import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegisterLogisticService {

  baseUrl = `${ environment.api_url }`;
  
  constructor(private http: HttpClient) 
  { }

	registerlogistic(password,firstname,lastname,mobile_number,car_number){
	  const body = {
	      // username : username,
	      password : password,
	      firstname : firstname,
	      lastname  : lastname,
	      car_number : car_number,
	      mobile_number : mobile_number
	    }
	    console.log(body);
	  return this.http.post<any>(`https://qrdee.co/api/v2/rider`,body);
	}

}
