import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<[]>(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

  constructor() { }

  getCart() {
    this.cart.next(JSON.parse(localStorage.getItem('cart')));
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
    let cartArr = this.getItem() ? this.getItem() : [];

    product.qty = 1;
    product.instock -= 1;

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

  getItem() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
  }
}
