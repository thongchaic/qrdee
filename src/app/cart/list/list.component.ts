import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router,NavigationExtras  } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

 @Input('cart') cart;
  @Output() removeFromCartChange = new EventEmitter;
  @Output() addItemChange = new EventEmitter;

  url = environment.url;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    // console.log(this.cart);
  }

  addItem(product) {
    this.addItemChange.emit(product);
  }

  removeFromCart(product) {
    this.removeFromCartChange.emit(product);
  }

}
