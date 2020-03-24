import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
// import { Product } from '../shared/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss'],
})
export class ShowCustomerComponent  {

  product: any;
  url = environment.url;
  id = 0;
  usertype : any = '';

  customers :any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  	) { 
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params && params.special) {
        this.id = JSON.parse(params.special);
        console.log('id: ',this.id);

      }
    });
    
    this.usertype = localStorage.getItem('usertype');
  }

  
   ionViewWillEnter() {
    this.loadProductcustomer();
    this.loadProduct();
  }


  loadProductcustomer() {
    this.productService.getAllproduct(this.id).subscribe(data => {
      this.customers = data.products[0];
       // console.log(data);
      console.log(this.customers);


    });
  }

 loadProduct() {
    this.productService.get(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      // this.product = data;
      console.log( data);
    });
  }


store_customer(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          special: JSON.stringify(id)
        }
    };
        this.router.navigate(['products'], navigationExtras);
    // console.log(id);
        console.log(navigationExtras);
}
}
