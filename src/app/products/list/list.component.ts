import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ToastService } from '../../shared/services/toast.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { CartService } from 'src/app/cart/shared/cart.service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router,NavigationExtras  } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
 
  url = environment.url;
  products = [];
  page = 1;
  store_id = 0;
  usertype : any = '';
  searchTerm = '';
  query: any = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastService: ToastService,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  	 this.usertype = localStorage.getItem('usertype');
    
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params && params.special) {
        this.store_id = JSON.parse(params.special);
        console.log('store_id: ',this.store_id);

      }
    });

   }

 ionViewWillEnter() {
     this.loadProducts();
    
  }

  loadProducts() { 

     if(this.store_id) {
        this.productService.getAllS(this.store_id).subscribe(res => {
        console.log(res);
        this.products = res.products.data;
        this.checkProducts(this.products);
        this.page = 1;
        });
    }else {

        this.productService.getAll().subscribe(res => {
        console.log(res);
        this.products = res.products.data;
        this.checkProducts(this.products);
        this.page = 1;
        });
    }


        // this.productService.getAll().subscribe(res => {
        // console.log(res);
        // this.products = res.products.data;
        // // this.checkProducts(this.products);
        // this.page = 1;
        // });
  
} 



user_customer(id) {
     let navigationExtras: NavigationExtras = {
      queryParams: {
          special: JSON.stringify(id)
        }
    };
        this.router.navigate(['/products/show/customer'], navigationExtras);
    // console.log(id);
        console.log(navigationExtras);

  }


search(query) {
  
  if(this.store_id){
      console.log(query);
      // console.log(store_id);

    this.searchTerm = query;
    this.productService.searchs(this.store_id,query, 1).subscribe(res => {
        console.log(this.products);
        this.products =  res.data;
        this.checkProducts(this.products);
        this.page = 1;
    });

  }else{
       console.log(query);
      // console.log(store_id);
    this.searchTerm = query;
    this.productService.search(query, 1).subscribe(res => {
       console.log(this.products)
      this.products = res.data;
      this.checkProducts(this.products);
      this.page = 1;
    });

  }

  

}


  addToCart(product) {
    this.cartService.addToCart(product);
    this.toastService.showToast(`เพิ่ม ${product.product_th} ลงในตะกร้า`, 'top');
  }

  loadData(infiniteScroll: IonInfiniteScroll) {
     if(this.store_id){
    this.page++;
    this.productService.searchs(this.store_id,this.searchTerm, this.page).subscribe(res => {
      if(Object.keys(res).length === 0 && res.constructor === Object) {
        infiniteScroll.disabled = true;
      }
      setTimeout(() => {
        this.products = this.products.concat(res.data);    
        this.checkProducts(this.products);   
        infiniteScroll.complete();

        if(this.page >= res['last_page']) {
          infiniteScroll.disabled = true;
        }
      }, 500);
    });


  }else{

    this.page++;
    this.productService.search(this.searchTerm, this.page).subscribe(res => {
      if(Object.keys(res).length === 0 && res.constructor === Object) {
        infiniteScroll.disabled = true;
      }
      setTimeout(() => {
        this.products = this.products.concat(res.data);    
        this.checkProducts(this.products);   
        infiniteScroll.complete();

        if(this.page >= res['last_page']) {
          infiniteScroll.disabled = true;
        }
      }, 500);
    });

  }
}

  checkProducts(products) {
    if(this.products){
      this.store_id;
    products.forEach(product => {
      if(this.cartService.checkInCart(product)) {
        console.log(this.store_id);
        product.incart = 1;
      } else {
        product.incart = 0;
      }

      if(product.instock == 0) {
        product.allowAdd = 0;
      } else {
        product.allowAdd = 1;
      }
    });

}
  }


 deleteProduct(id) {
    this.presentAlertConfirmDelete(id);
  }

async presentAlertConfirmDelete(id) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'คุณต้องการลบสินค้าชิ้นนี้ใช่หรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'ตกลง',
          handler: () => {
            this.productService.deleteProduct(id).subscribe(() => {
              this.toastService.showToast(`ลบสินค้าเรียบร้อยแล้ว`, 'top');
              this.loadProducts();
            })
          }
        }
      ] 
    });

    await alert.present();
  }


   submit(store_id) {
           let navigationExtras: NavigationExtras = {
              queryParams: {
                  special: JSON.stringify(this.store_id)
                }
            };
        this.router.navigate(['/cart'], navigationExtras);
        console.log(navigationExtras);
        // this.router.navigateByUrl('/cart');
     
    }
    

}
