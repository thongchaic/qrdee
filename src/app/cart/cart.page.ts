import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/cart.service';
import { ProductService } from '../products/shared/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  cart: any;
  price: number = 0;

  constructor(
    private cartService: CartService,
  ) { }

  ionViewWillEnter() {
    this.getCart();
  }

  getCart() {
    this.cartService.getCart().subscribe(data => this.cart = data);
    this.price = this.cartService.getPrice();
  }

  removeFromCart(product) {
    this.cartService.removeProduct(product);
    this.getCart();
  }

}
