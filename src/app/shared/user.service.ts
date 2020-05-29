import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  storeUser(user_info, user_type){
    /*
      user_type = 1 = store
      user_type = 2 = rider 
    */
   if(user_type == 1 ){
    this.storeStore(user_info);
   }else if(user_type == 2){
    this.storeRider(user_info);
   }
  }

  storeOrRider(){
    let body = {
      store: false,
      rider: false
    }
    if(this.getStore()){
      body.store = true;
    }
    if(this.getRider()){
      body.rider = true;
    }
    return body;
  }

  getRider(){
    return JSON.parse(localStorage.getItem('rider'));
  }
  getStore(){
    return JSON.parse(localStorage.getItem('store'));
  }

  private storeStore(store){
    localStorage.setItem('store', JSON.stringify(store));
  }
  private storeRider(rider){
    localStorage.setItem('rider', JSON.stringify(rider));
  }

  storeMember(member){
    localStorage.setItem('member', JSON.stringify(member));
  }
  getMember(){
    return JSON.parse(localStorage.getItem('member'));
  }

}
