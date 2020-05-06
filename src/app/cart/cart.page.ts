import { Component ,ElementRef,ViewChild,EventEmitter,Output} from '@angular/core';
import { CartService } from './shared/cart.service';
import { TransactionService } from '../shared/services/transaction.service';
import { ToastService } from '../shared/services/toast.service';
import { AlertService } from '../shared/services/alert.service';
import { ModalController } from '@ionic/angular';
import { QrmodalComponent } from './qrmodal/qrmodal.component';
import { DvrmodalComponent } from './dvrmodal/dvrmodal.component';
import { QrService } from '../shared/services/qr.service';
import { ProductService } from '../products/shared/product.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute,NavigationExtras  } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
// import { CallNumber } from '@ionic-native/call-number';
import { CallNumber } from '@ionic-native/call-number/ngx';
//import { CallNumber } from '@ionic-native/call-number';
import { LoadingController } from '@ionic/angular';
import { Badge } from '@ionic-native/badge/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Events } from '@ionic/angular';

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


  products:any[] = [];
  orders:any[] = [];
  store:any;
  prompt_payload:any;



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
    private builder: FormBuilder,
    private _loading: LoadingController,
    private callNumber: CallNumber,
    private badge: Badge,
    private event : Events
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
    this.event.subscribe('store:orders',trn=>{
       this.getOrders();
    });

  }

  ionViewWillEnter() {
     // this.getOrders();
     // this.getProducts();
  }
  ionViewDidEnter() {
    this.store = JSON.parse(localStorage.getItem('store'));
    this.getOrders();
    this.getProducts();

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
  }else{
    this.getProducts();
  }
}

async getOrders(){
  const loading = await this._loading.create();
  await loading.present();

  this.cartService.getOrders(this.store.id).subscribe((data:any)=>{
    this.orders = data;
    console.log(this.orders);
    loading.dismiss();
    this.badge.clear();
  }, err=>{
    loading.dismiss();
  });
}
async getProducts(){
  const loading = await this._loading.create();
  await loading.present();

  this.cartService.getProducts(this.store.id).subscribe((data:any)=>{
    this.products = data;
    loading.dismiss();
  }, err=>{
    loading.dismiss();
  });
}

addToCart(product){
  this.cartService.addToCart(product);
  this.getCart();
}

getCart() {
  this.cartService.getCart().subscribe(data => this.cart = data);
  this.price = this.cartService.getPrice();
  console.log(this.price);
}

addItem(product) {
  this.cartService.addItem(product);
  this.getCart();
}

removeFromCart(product) {
  this.cartService.removeProduct(product);
  this.getCart();
}
onKeyUp(event){


  this.cartService.clearCart();
  this.getCart();
  this.price = event.target.value;
}
makeClall(mnumber){
  this.callNumber.callNumber(`${mnumber}`, true)
    .then(res => {  })
    .catch(err => { alert(JSON.stringify(err)); });
}
deleteOrder(member_id){
  this.alertService.showAlert({
    header: `ท่านต้องการลบคำสั่งซื้อนี้จริงหรือไม่?`,
    sub_header: '',
    message: '',
    buttons: [
      {
        text: 'ยกเลิก',
         handler: () => {

           this.getOrders();

          },
        role: 'cancel',
      },
      {
        text: 'ตกลง',

        handler: () => {

            this.cartService.deleteOrder(this.store.id,member_id).subscribe((data:any)=>{
              this.getOrders();
            },err=>{
              //alert(JSON.stringify(err));
            });

          }
        }
      ]
    });
  }
  async QRModal(price, promptpay, prompt_payload) {
    const modal = await this.modalController.create({
      component: QrmodalComponent,
      componentProps: {
        'price': price,
        'promptpay': promptpay,
        'prompt_payload': prompt_payload
      }
    });
    modal.onDidDismiss()
      .then(status => {
        if(status.data == 1) {
          this.transactionService.insertTransaction(this.products, this.prompt_payload, this.price, this.store.id).subscribe((data:any)=>{
            this.cartService.clearCart();
            this.getCart();
          });
        }else{
          this.getCart();
        }
      });
    return await modal.present();
  }
  delivery(order){
    this.dvrModal(order);
  }
  async dvrModal(order) {
    const modal = await this.modalController.create({
      component: DvrmodalComponent,
      componentProps: {
        'order': order
      }
    });
    modal.onDidDismiss().then(status => {
      if(status.data == 1){
        this.cartService.completeOrder(this.store.id,order.member_id).subscribe((data:any)=>{
          this.getOrders();
        });
      }else{

          console.log("Find riders.....");


      }
    });
    return await modal.present();
  }

  newTransaction() {
    this.transactionService.genQR(this.store.promptpay, this.price).subscribe((data:any)=>{
      this.prompt_payload = data.prompt_payload;
      this.QRModal(data.price, data.promptpay, data.prompt_payload);
    });

    // this.alertService.showAlert({
    //   header: `สร้าง QR หมายเลข ${this.store.promptpay} จำนวน ${this.price} บาท?`,
    //   sub_header: '',
    //   message: '',
    //   buttons: [
    //     {
    //       text: 'ยกเลิก',
    //        handler: () => {
    //           this.cartService.clearCart();
    //           this.getCart();
    //         },
    //       role: 'cancel',
    //     },
    //     {
    //       text: 'ตกลง',
    //       handler: () => {
    //
    //         this.transactionService.genQR(this.store.promptpay, this.price).subscribe((data:any)=>{
    //           this.prompt_payload = data.prompt_payload;
    //           this.QRModal(data.price, data.promptpay, data.prompt_payload);
    //         });
    //
    //       }
    //     }
    //   ]
    // });

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
  }
}
