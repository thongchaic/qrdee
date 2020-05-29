import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<[]>(localStorage.getItem('cart') ? this.getItem() : []);

  constructor(
    private http: HttpClient
  ) { }

  getOrders(store_id){
    return this.http.get<any>(`https://qrdee.co/api/v2/orders/${store_id}`);
  }
  deleteOrder(store_id,member_id){
    return this.http.delete<any>(`https://qrdee.co/api/v2/orders/${store_id}/${member_id}`);
  }
  getProducts(store_id){
    //alert(`https://qrdee.co/api/v2/products/${store_id}`);
    return this.http.get<any>(`https://qrdee.co/api/v2/products/${store_id}`);
  }

  completeOrder(store_id,member_id){
    const body = {
      member_id:member_id
    }
    return this.http.put<any>(`https://qrdee.co/api/v2/orders/${store_id}`,body);
  }
  callRider(store_id,member_id){

    const body = {
      member_id:member_id,
      request_riders: true
    }
    return this.http.put<any>(`https://qrdee.co/api/v2/orders/${store_id}`,body);

  }
  cancelRequest(id){
    return this.http.put<any>(`https://qrdee.co/api/v2/cancel_req/${id}`,{});
  }


  getStoreMaps(store_id) {
    return this.http.get<any>(`https://qrdee.co/api/v1/transaction_store_maps/${store_id}`);
  }

 getStorePromptpay(store_id) {
    return this.http.get<any>(`https://qrdee.co/api/v1/store_promptpay/${store_id}`);
  }


  getCart() {
    this.cart.next(this.getItem());
    return this.cart;
  }

  getPrice() {
    let cartArray = new Array();
    let price = 0;

    cartArray = this.cart.getValue() ? this.cart.getValue() : [];
    // console.log(cartArray);

    cartArray.forEach(product => {
      price += product['price'] * product['qty'];
    })

    return price;
  }

  addToCart(product) {
    if(this.checkInCart(product)) return;

    let cartArr = this.getItem() ? this.getItem() : [];

    product.incart = 1;
    product.qty = 1;

    cartArr.push(product);

    let distinctCartArr = cartArr.filter((value, index, self) => {
      return cartArr.map(item => item.id).indexOf(value.id) === index;
    });

    localStorage.setItem('cart', JSON.stringify(distinctCartArr));
  }

  addItem(product) {
    let cartArr = this.getItem();
    let idx = cartArr.map(e => e.id).indexOf(product.id);

    cartArr[idx].qty += 1;
    cartArr[idx].instock -= 1;

    localStorage.setItem('cart', JSON.stringify(cartArr));
    this.cart.next(cartArr);
  }

  removeProduct(product) {
    let cartArr = this.getItem();
    let idx = cartArr.map(e => e.id).indexOf(product.id);

    cartArr[idx].qty -= 1;
    cartArr[idx].instock += 1;
    if(cartArr[idx].qty == 0) cartArr.splice(idx, 1);
    localStorage.setItem('cart', JSON.stringify(cartArr));
    this.cart.next(cartArr);
    // console.log('remove');
  }

  checkInCart(product) {
    let cartArr = this.getItem() ? this.getItem() : [];
    let idx = cartArr.map(e => e.id).indexOf(product.id);

    if(idx == -1) return false;

    return true;
  }

  getItem() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.cart.next(null);
  }
}
