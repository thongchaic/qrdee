import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
getStores(latitude,longitude) {
  console.log(`https://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
  return this.http.get<any>(`https://qrdee.co/api/v2/stores?latitude=${latitude}&longitude=${longitude}`);
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
