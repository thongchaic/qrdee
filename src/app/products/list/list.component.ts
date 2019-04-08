import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Product } from '../shared/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input('products') products;
  @Output() searchChange = new EventEmitter();
  @Output() addToCartChange = new EventEmitter();
  @Output() loadDataChange = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  search(query) {
    this.searchChange.emit(query);
  }

  addToCart(product: Product) {
    this.addToCartChange.emit(product);
  }

  loadData(infiniteScroll: IonInfiniteScroll) {
    this.loadDataChange.emit(infiniteScroll);
  }

}
