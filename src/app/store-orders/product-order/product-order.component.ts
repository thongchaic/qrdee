import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss'],
})
export class ProductOrderComponent implements OnInit {

     code_randoms:any;
     product_orders:any;
  constructor(
   private orderService: OrderService,
    private route: ActivatedRoute,
    private _translate: TranslateService
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params && params.special) {
        this.code_randoms = JSON.parse(params.special);
        console.log('code_randoms: ',this.code_randoms);

      }
    });
  }


  ionViewWillEnter() {
    this.loadProduct();
  }

  loadProduct() {
   this.orderService.OrderStore(this.code_randoms).subscribe(data => {
     this.product_orders = data.data;
       console.log('ออเดอร์',this.product_orders);
   });
  }



  ngOnInit() {}
}
