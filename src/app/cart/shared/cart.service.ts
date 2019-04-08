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
      price += product['cost'] * product['qty'];      
    })

    return price;
  }

  removeProduct(product) {
    let cartArray = new Array();
    cartArray = this.cart.getValue();
    
    const index = cartArray.map(item => item.id).indexOf(product.id);

    cartArray[index].qty -= 1;
    if(cartArray[index].qty == 0) cartArray.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartArray));
    // console.log('remove');
  }
}
