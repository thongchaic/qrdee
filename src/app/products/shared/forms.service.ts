import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  baseUrl = `${ environment.api_url }/user`;
  // latitude:any;
  // longitude:any;


  constructor(
       private http: HttpClient
  	) { 

      // this.getStoreDistances(this.latitude,this.longitude);
    
    }


  

  get(id) {
      return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  
  getUser() {
      return this.http.get<any>(`${this.baseUrl}`);
    }
 
  getStoredistances(latitude,longitude) {
      console.log(`http://qrdee.co/api/v1/diss?latitude=${latitude}&longitude=${longitude}`);
    return this.http.get(`http://qrdee.co/api/v1/diss?latitude=${latitude}&longitude=${longitude}`);
}
  updateUser(data,id) {
      return this.http.post<any>(`https://qrdee.co/api/v1/update_user/${id}`, this.createFormData(data));
    }
  
  

    
  
  createFormData(data): FormData {
      const fd = new FormData();
      fd.append('latitude', data.latitude);
      fd.append('longitude', data.longitude);
      return fd;
    }

}

