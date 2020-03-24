import { Component ,ElementRef,ViewChild,EventEmitter,Output} from '@angular/core';
import { CartService } from './shared/cart.service';
import { TransactionService } from '../shared/services/transaction.service';
import { ToastService } from '../shared/services/toast.service';
import { AlertService } from '../shared/services/alert.service';
import { ModalController } from '@ionic/angular';
import { QrmodalComponent } from './qrmodal/qrmodal.component';
import { QrService } from '../shared/services/qr.service';
import { ProductService } from '../products/shared/product.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute,NavigationExtras  } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
declare var google;
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  @Output() scanChange = new EventEmitter;


  product_code:any= '';
  product_all: any;
  productFound:boolean = false;
  searchTerm = '';
  query: any = '';
  page = 1;

  tab = 0;
  tab_titles = ["คำสั่งซื้อ","รับชำระเงิน"];


  barcodeScannerOptions: BarcodeScannerOptions = {
    formats : "QR_CODE,EAN_13"
  };


  usertype: string = '';
  cart: any;
  verified:number ;
  price: number = 0;
  promptpay : any ;
  store_distance:any;
  latitude :any;
  longitude:any;
  firstname: any;
  lastname: any;
  mobile_number: any;
  store_id : number = 0;
  latitude_store:any;
  longitude_store:any;

  products:any[] = [1,2,3];
  store:any;


  @ViewChild('mapElement',{static:false}) mapNativeElement: ElementRef;

  constructor(
    private cartService: CartService,
    private transactionService: TransactionService,
    private productService: ProductService,
    private toastService: ToastService,
    private alertService: AlertService,
    private qrService: QrService,
    private modalController: ModalController,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private geolocation: Geolocation,
    private barcodeScanner: BarcodeScanner,
    private builder: FormBuilder
  ) {

     // this.productService.getAll().subscribe(resp => {
     //   this.product_all = resp.products.data;
     //   alert(this.product_all);
     //    //console.log('product_all',this.product_all);
     // });

     this.store = JSON.parse(localStorage.getItem('store'));

     //alert(JSON.stringify(this.store));
     //alert(JSON.stringify(this.store));

    //
    // this.usertype = localStorage.getItem('usertype');
    //
    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    //   if (params && params.special) {
    //     this.store_id = JSON.parse(params.special);
    //     //console.log('store_id: ',this.store_id);
    //
    //   }
    // });

  }

  ionViewWillEnter() {
    this.getOrders();
    this.getProducts();
    // this.http.get<any>(`http://qrdee.co/api/v1/store`).subscribe(console.log);
    // this.test = localStorage.getItem('test');
  }

  ngAfterViewInit(): void {

    // this.geolocation.getCurrentPosition().then((resp) => {
    //
    // this.latitude = resp.coords.latitude;
    // this.longitude = resp.coords.longitude;
    //
    //     const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
    //       center: {lat: resp.coords.latitude, lng: resp.coords.longitude},
    //       zoom: 6,
    //     });
    //
    //
    //     var icon = {
    //      // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
    //         url:'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
    //         scaledSize: new google.maps.Size(50, 50), // scaled size
    //     };
    //     //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
    //     //code
    //     var marker = new google.maps.Marker({
    //         position: {lat: resp.coords.latitude, lng: resp.coords.longitude},
    //         map: map,
    //         icon: icon
    //     });
    //
    //     const infoWindow = new google.maps.InfoWindow;
    //     const pos = {
    //       lat: this.latitude,
    //       lng: this.longitude
    //     };
    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent('ตำแหน่งของคุณ.');
    //     infoWindow.open(map);
    //     map.setCenter(pos);
    //
    //     }).catch((error) => {
    //       //alert('เกิดข้อผิดพลาดในการรับตำแหน่ง');
    // });

}
changeTab(tab){
  this.tab = tab;
  if(this.tab == 0){
    this.getOrders();
    this.store_customers(this.store.id);
  }else{
    this.getProducts();
  }
}

getOrders(){
  this.cartService.getOrders(this.store.id).subscribe((data:any)=>{

  });
}
getProducts(){

}
addToCart(product){
  this.cartService.addToCart(product);
  this.toastService.showToast(`เพิ่ม xx ใส่ตะกร้าแล้ว`, 'top');
}



  newTransaction() {
    this.alertService.showAlert({
      header: 'คุณต้องการชำระเงินด้วย QR Code ใช่หรือไม่',
      sub_header: '',
      message: '',
      buttons: [
        {
          text: 'ยกเลิก',
           handler: () => {
              if(this.store_id){
                  this.transactionService.newTransaction(this.cart, this.price, this.latitude, this.longitude, this.firstname, this.lastname,this.mobile_number,this.latitude_store,this.longitude_store, this.store_id,this.promptpay, this.verified = 0).subscribe(trn => {
                    console.log(trn);
                     this.toastService.showToast('ยกเลิกการซื้อสินค้าแล้ว', 'top');
                  });
              }else{
                    this.transactionService.newTransactionStore(this.cart, this.price,this.verified = 0).subscribe(trn => {
                    this.toastService.showToast('ยกเลิกการซื้อสินค้าแล้ว', 'top');
                  });
              }
            },

          role: 'cancel',
        },
        {
          text: 'ตกลง',

          handler: () => {
            if(this.store_id){

               this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
                this.promptpay =  res.data[0].promptpay;
                 console.log(res);
                 console.log(this.promptpay);
              this.cartService.getStoreMaps(this.store_id).subscribe(res => {
                this.latitude_store = res.data[0].latitude;
                this.longitude_store = res.data[0].longitude;
                console.log('store_map',this.latitude_store,this.longitude_store );

              this.transactionService.getUser().subscribe(res => {
                  this.firstname = res.data.firstname;
                  this.lastname = res.data.lastname;
                  this.mobile_number = res.data.mobile_number;
                  this.store_id;


                  this.transactionService.newTransaction(this.cart, this.price, this.latitude, this.longitude, this.firstname, this.lastname,this.mobile_number,this.latitude_store,this.longitude_store, this.store_id,this.promptpay, this.verified = 1).subscribe(trn => {
                console.log('user_map',this.latitude,this.longitude);
                    this.qrService.generatePromptPayQRs(trn.data).subscribe(qr => {
                       this.QRModal(qr, trn);
                       // console.log(22);
                       // console.log(qr);
                    });

                  });
                 });
               });
              });
            }else{
               // this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
               //  this.promptpay =  res.data[0].promptpay;
               //   console.log(res);
               //   console.log(this.promptpay);
              this.transactionService.newTransactionStore(this.cart, this.price,this.verified = 1).subscribe(trn => {
               console.log(this.cart, this.price,this.verified);
                  this.qrService.generatePromptPayQRs(trn.data).subscribe(qr => {
                    this.QRModal(qr, trn);
                     // console.log(33);
                     // console.log(qr);
                 });

                  // });
               });
            }
          }
        }
      ]
    });
  }


  getCart() {
    this.cartService.getCart().subscribe(data => this.cart = data);
    this.price = this.cartService.getPrice();
    console.log(this.price);
  }

  addItem(product) {
    this.cartService.addItem(product);
    this.toastService.showToast(`เพิ่ม ${product.product_th} 1 ชิ้น`, 'top')
    this.getCart();
  }

  removeFromCart(product) {
    this.cartService.removeProduct(product);
    this.toastService.showToast(`ลบ ${product.product_th}`, 'top')
    this.getCart();
  }

// test
  search(product_code) {
     this.productService.getAll().subscribe(resp => {
           this.product_all = resp.products.data;
        console.log('product_all',this.product_all);

      });

      console.log("product_code",product_code);

      this.productService.getByProductCode(product_code).subscribe(product => {

        if(product.instock === 0) {
          this.toastService.showToast(`สินค้า ${product.product_th} ไม่มีในสต๊อคสินค้า`, 'top')
        }else{
          this.cartService.addToCart(product);
          this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
          this.getCart()
        }
     });

}


// search(product_code) {
//     const barcodeScannerOptions: BarcodeScannerOptions = {
//       formats : "QR_CODE,EAN_13"
//     };
//  this.productService.getByProductCode(this.product_code).subscribe(product => {
//     this.barcodeScanner.scan(barcodeScannerOptions).then((result: BarcodeScanResult) => {
//       this.product_code = result.text;
//  this.cartService.addToCart(product);
//           this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
//           this.getCart();
//     });
//       });

// }

 // letScan(product_code) {
 //    this.barcodeScanner.scan(this.barcodeScannerOptions).then((result: BarcodeScanResult) => {
 //      console.log(result);
 //      this.scanChange.emit(result.text);
 //      // this.product_all = this.product_code;
 //       this.product_code = this.scanChange.emit(result.text);


 //       this.productService.getByProductCode(this.product_code).subscribe(product => {
 //        if(product.instock === 0) {
 //          this.toastService.showToast(`สินค้า ${product.product_th} ไม่มีในสต๊อคสินค้า`, 'top')
 //        } else {
 //          this.cartService.addToCart(product);
 //          this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
 //          this.getCart();

 //      }
 //    });
 //      // this.scan;
 //      // this.presentAlert(result.text);
 //    }).catch(err => {
 //      console.log('Error', err);
 //    });
 //  }



getProduc() {
  this.productService.getAll().subscribe(resp => {
    this.product_all = resp.products.data;
    console.log('product_all',this.product_all);
  });
}

// letScan(product_code){
//     this.barcodeScanner.scan().then(barcodeData =>{
//       this.scanChange = barcodeData.text;
//       this.product_all = this.product_code;

//         this.productService.getByProductCode(product_code).subscribe(product => {
//         if(product.instock === 0) {
//           this.toastService.showToast(`สินค้า ${product.product_th} ไม่มีในสต๊อคสินค้า`, 'top')
//         } else {
//           this.cartService.addToCart(product);
//           this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
//           this.getCart();
//       }
//     });
//     })
//   }

  async QRModal(qr_data, trn_data) {
    const modal = await this.modalController.create({
      component: QrmodalComponent,
      componentProps: {
        'transaction': trn_data.data,
        'qr': qr_data.data
      }
    });


    modal.onDidDismiss()
      .then(status => {
        if(status.data == 1) {
          this.cartService.clearCart();
          this.getCart();
          this.toastService.showToast(`ชำระเงินเรียบร้อยแล้ว`, 'top');
        }
      });

    return await modal.present();
  }



  submit(){
        this.toastService.showToast('กำลังตรวจสอบข้อมูล', 'top');
        this.router.navigateByUrl('/customer');
  }

 store_customers(store_id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          special: JSON.stringify(this.store_id)
        }
    };
        this.router.navigate(['products'], navigationExtras);
    // console.log(id);
        console.log(navigationExtras);
  }
}
