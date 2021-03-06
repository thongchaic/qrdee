import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 baseUrl = `${ environment.api_url }/store`;


constructor(
    private http: HttpClient
) { }

  getProfile() {
    console.log(`${this.baseUrl}`);
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getStoreDistance(latitude,longitude) {
    console.log(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
      return this.http.get(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
    }


  getProfiles() {
    return this.http.get<any>(`https://qrdee.co/api/v1/stores`);
    // console.log('https://qrdee.co/api/v1/stores');
  }

  updateProfile(data, store_id) {
    // console.log(data);
    // console.log(store_id);
    return this.http.put<any>(`https://qrdee.co/api/v2/stores/${store_id}`, data);
  }

  get(id) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getStoreTypes() {
    return this.http.get(`https://qrdee.co/api/v2/refs?t=store_types`);
  }



createFormData(data): FormData {
    const fd = new FormData();

    if(data.image) fd.append('store_pic', data.image);
    fd.append('username', data.username);
    fd.append('store_name', data.store_name);
    fd.append('mobile_number', data.mobile_number);
    fd.append('firstname', data.firstname);
    fd.append('lastname', data.lastname);
    fd.append('promptpay', data.promptpay);
    // fd.append('latitude', data.latitude);
    // fd.append('longitude', data.longitude);
    fd.append('store_type_id', data.store_type_id);

    return fd;
  }

}
