import { Component, OnInit,ElementRef,ViewChild, Output, Input} from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute,NavigationExtras  } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { QrmodalComponent } from '../qrmodal/qrmodal.component';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { CartService } from '../shared/cart.service';


declare var google;

@Component({
  selector: 'app-dvrmodal',
  templateUrl: './dvrmodal.component.html',
  styleUrls: ['./dvrmodal.component.scss'],
})
export class DvrmodalComponent {

  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;
  latitude = 14.8718084;
  longitude = 103.4962797;
  mylatitude = 14.8718084;
  mylongitude = 103.4962797;

  @Input() order;
  store:any;
  payload:any;


  constructor(
    private router: Router,
    private alertService: AlertService,
    private geolocation: Geolocation,
    private modalController: ModalController,
    private cartService: CartService,
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) {

    this.store = JSON.parse(localStorage.getItem('store'));


  }
  openQR(price){
    console.log(this.order);
    this.transactionService.genQR(this.store.promptpay, price).subscribe((data:any)=>{
      this.payload = data;
      this.QRModal(data.price, data.promptpay, data.prompt_payload);
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
          //ok
          //alert("ToTRN");
          this.transactionService.insertTransaction([], this.payload.prompt_payload, this.payload.price, this.store.id).subscribe((data:any)=>{
            //alert(JSON.stringify(data));
          });

        }else{

        }
      });

    return await modal.present();
  }

  ngAfterViewInit(): void {




  }
  ionViewDidEnter() {

    this.geolocation.getCurrentPosition().then((resp) => {
        this.mylatitude = resp.coords.latitude;
        this.mylongitude = resp.coords.longitude;
    });

    try{
      if(this.order.length > 0){
        this.latitude = this.order[0].latitude;
        this.longitude = this.order[0].longitude;
      }else{
        this.latitude = this.order.member.latitude;
        this.longitude = this.order.member.longitude;
      }
    }catch(e){
      this.latitude = this.order.member.latitude;
      this.longitude = this.order.member.longitude;
    }


    this.loadMap();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(this.latitude, this.longitude);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    marker.addListener('click', function() {
      //alert("clicked");
      window.open(`geo://${this.latitude},${this.longitude}`,`_system`);
    });

    // let mymarker = new google.maps.Marker({
    //   map: this.map,
    //   animation: google.maps.Animation.DROP,
    //   position: new google.maps.LatLng(this.mylatitude, this.mylongitude),
    //   icon: {
    //     url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    //   }
    // });

  }
  callRider(){
    this.cartService.callRider(this.store.id, this.order.member_id ).subscribe((data:any)=>{
      console.log(data);
      this.closeModal(2);

    }, err=>{
      
    });

  }

  forceDissmiss(val){
    this.closeModal(val);
  }

  async closeModal(status) {
    await this.modalController.dismiss(status);
  }

}
