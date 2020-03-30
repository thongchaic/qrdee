import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginStoreService {

  baseUrl = `${ environment.api_url }`;

  private currentStoreSubject: BehaviorSubject<any>;
  public currentStore: Observable<any>;

  constructor(private http: HttpClient, private _router: Router)
  {
    this.currentStoreSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('store')));
    this.currentStore = this.currentStoreSubject.asObservable();
  }

  public get currentStoreValue() {
    return this.currentStoreSubject.value;
  }


  logintore(promptpay,password){
    const body = {
    	  promptpay:promptpay,
        password : password
      }
    return this.http.post<any>(`https://qrdee.co/api/v2/login`,body)
      .pipe(map(user => {

        console.log('login..');
        //localStorage.setItem('store', JSON.stringify(user));
        //
        // let member = JSON.parse(localStorage.getItem('member'));
        // if(member){
        //   const mem = {
        //     id:member.id,
        //     mobile_number:user.mobile_number,
        //     latitude:user.latitude,
        //     longitude:user.longitude,
        //     firstname:user.firstname,
        //     lastname:user.lastname
        //   }
        //   localStorage.setItem('member', JSON.stringify(mem));
        // }else{
        //   const mem = {
        //     id:null,
        //     mobile_number:user.mobile_number,
        //     latitude:user.latitude,
        //     longitude:user.longitude,
        //     firstname:user.firstname,
        //     lastname:user.lastname
        //   }
        //   localStorage.setItem('member', JSON.stringify(mem));
        // }
        // console.log(member);
        this.currentStoreSubject.next(user);
        return user;
      }));
  }

  logout() {
    // localStorage.removeItem('store');
    // localStorage.setItem('member_cart',JSON.stringify([]));
    // this.currentStoreSubject.next(null);
    // this._router.navigateByUrl('/login');
  }

}
