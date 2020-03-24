import { Component, Input,ViewChild,ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
import { AlertService } from '../../shared/services/alert.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute,NavigationExtras  } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';
import { LoadingController, NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CartService } from '../shared/cart.service';
declare var google;

@Component({
  selector: 'app-qrmodal',
  templateUrl: './qrmodal.component.html',
  styleUrls: ['./qrmodal.component.scss'],
})
export class QrmodalComponent{

  @Input() transaction;
  @Input() qr;
   
  verified : number ;
  code_randoms:any;
  latitude: any;
  longitude: any;
  latitude_store:any;
  longitude_store:any;
  firstname: any;
  lastname: any;
  mobile_number: any;
  store_distance:any;
  store_id : number = 0;
  promptpay: any;
  id:  number = 0;
  cart: any;
  price: number = 0;

  verifieds: any;

  @ViewChild('mapElement',{static:false}) mapNativeElement: ElementRef;

  constructor(
    private transactionService: TransactionService,
    private modalController: ModalController,
    private router: Router,
    private alertService: AlertService,
    private geolocation: Geolocation,
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private toastService: ToastService,
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private http: HttpClient,
    private cartService: CartService,
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.store_id = JSON.parse(params.special);
        console.log(params);
        console.log('store_id: ',this.store_id);

      }
    });
   }


  // ionViewWillEnter() {

  // }


  ngAfterViewInit(): void {
        this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp);

        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
       
        const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
          center: {lat: resp.coords.latitude, lng: resp.coords.longitude},
          zoom: 6,
        });

        var icon = {
         // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
            url:'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
            scaledSize: new google.maps.Size(50, 50), // scaled size
        };
        //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
        
        var marker = new google.maps.Marker({
            position: {lat: resp.coords.latitude, lng: resp.coords.longitude},
            map: map,
            icon: icon
        });

        const infoWindow = new google.maps.InfoWindow;
        const pos = {
          lat: this.latitude,
          lng: this.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('ตำแหน่งของคุณ.');
        infoWindow.open(map);
        map.setCenter(pos); 

        }).catch((error) => { 
      console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error);
    });
  
} 

 // latitude , longitude

  verifyTransaction(longitude,latitude,latitude_store,longitude_store,store_id) {
     if(this.store_id){
            this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
                this.promptpay =  res.data[0].promptpay;
                 console.log(res);
                 console.log(this.promptpay);

              this.transactionService.getUser().subscribe(res => {
                   console.log('user_map',this.latitude,this.longitude);
                   this.firstname = res.data.firstname;
                   this.lastname = res.data.lastname;
                   this.mobile_number = res.data.mobile_number; 
                   this.transaction.latitude = this.latitude;
                   this.transaction.longitude = this.longitude;
                   this.transaction.firstname = this.firstname ;
                   this.transaction.lastname = this.lastname ;
                   this.transaction.mobile_number = this.mobile_number;
                   this.transaction.latitude_store = this.latitude_store ;
                   this.transaction.longitude_store = this.longitude_store ;
                   this.transaction.promptpay = this.promptpay ;
                   this.transaction.store_id  = this.store_id ;
                    

                   this.transactionService.verifyTransaction(this.transaction).subscribe(res => {
                      this.closeModal(1);
                     
                       console.log(this.transaction);
                    });
              });
              });

               this.cartService.getStoreMaps(this.store_id).subscribe(res => {
                this.latitude_store = res.data[0].latitude;
                this.longitude_store = res.data[0].longitude;
                console.log('store_map',this.latitude_store,this.longitude_store );
               });
            }else{
              this.transactionService.verifyTransaction(this.transaction).subscribe(res => {
                      this.closeModal(1);

                       // this.router.navigateByUrl('/cart/order-qr');
                       console.log(this.transaction);
              });
            }

        
               this.alertService.showAlert({
                header: 'กดตกลงเพื่อยืนยันการจัดส่งสินค้า',
                sub_header: '',
                message: '',
                buttons: [
                  {
                    text: 'ยกเลิก',
                    role: 'cancel'
                  }, 
                 {
                    text: 'ตกลง',

                    handler: () => {
                      // if(this.store_id){ this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
                           // this.transactionService.orderProducts().subscribe(res => {
                           // this.verifieds = res.data.verified;
                           // console.log(this.verifieds);
                           //  });

                        this.transactionService.orderProducts().subscribe(res => {
                          console.log(res);
                            this.code_randoms = res.data.code_randoms;
                           console.log(this.code_randoms);
                             this.store_id = res.data.store_id;
                             console.log(this.store_id);
                          this.transactionService.getUser().subscribe(res => {
                            this.firstname = res.data.firstname;
                            this.lastname = res.data.lastname;
                            this.mobile_number = res.data.mobile_number;
                            this.transactionService.newTransactionOrder(this.firstname, this.lastname,this.mobile_number,this.store_id,this.code_randoms).subscribe(trn => {
                       
                            });
                          }); 
                        });

                      }
                    // }
                  }      
                ]
              });
 
 }
  async closeModal(status) {
    await this.modalController.dismiss(status);
  }
}
