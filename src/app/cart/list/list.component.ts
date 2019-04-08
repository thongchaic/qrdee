import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input('cart') cart;
  @Output() removeFromCartChange = new EventEmitter;
  
  constructor(

  ) { }

  ngOnInit() {
    // console.log(this.cart);
  }

  removeFromCart(product) {
    this.removeFromCartChange.emit(product);
  }

}
