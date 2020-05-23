import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { RegisterStoreService } from './shared/register-store.service';
import { Router  } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastService } from '../shared/services/toast.service';
import { ModalController,Events } from '@ionic/angular';

// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   ILatLng,
//   Circle,
//   Marker,
//   Spherical
// } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  password:string='';
  repassword:string ='';
  promptpay:string='';
  store_name :string='';
  latitude:any='';
  longitude:any='';
  dummyMarker:any;
  // map: GoogleMap;
  // marker: Marker;
  //
  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;


  constructor(
   // public navCtrl: NavController,
     private router: Router,
     public registerService: RegisterStoreService,
     private geolocation: Geolocation,
     private toastService: ToastService,
     private event : Events,
     private platform: Platform,
    private _loading: LoadingController
   ) { }

   async ngOnInit() {
     // Since ngOnInit() is executed before `deviceready` event,
     // you have to wait the event.
     this.latitude = 14.8718084;
     this.longitude = 103.4962797;
     await this.platform.ready();
     //this.loadGPS();
   }

  ngAfterViewInit(): void {
    // this.latitude = 14.8718084;
    // this.longitude = 103.4962797;
    // this.loadGPS();
  }

  ionViewDidEnter() {
    this.latitude = 14.8718084;
    this.longitude = 103.4962797;
    this.loadGPS();
    // this.dummyMarker = document.getElementById("centerMarkerImg");
  }
   async loadGPS(){
     console.log("Loading GPS....");
     const loading = await this._loading.create();
     await loading.present();
     this.geolocation.getCurrentPosition().then((resp) => {
       console.log(resp);
       loading.dismiss();
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.loadMap();
    }, err=>{
      console.log("GPS error dismiss....")
      loading.dismiss();
      this.loadMap();
    });
   }
   loadMap() {

   //
   //   if(!this.map){
   //     this.map = GoogleMaps.create('map_canvas', {
   //      camera: {
   //         target: {
   //           lat: this.latitude,
   //           lng: this.longitude
   //         },
   //         zoom: 12
   //       },
   //      gestures: {
   //         scroll: true,
   //         tilt: true,
   //         rotate: true,
   //         zoom: true
   //     }
   //    });
   //
   //    console.log("create new map .....");
   //
   //  }else{
   //    console.log("map already exists....");
   //  }
   //
   //
   //
   // this.marker = this.map.addMarkerSync({
   //   position: {
   //     lat: this.latitude,
   //     lng: this.longitude
   //   }
   // });
   // console.log(this.marker);
   //
   // this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe((params: any[]) => {
   //    const cameraPosition: any = params[0];
   //    this.latitude = cameraPosition.target.lat;
   //    this.longitude = cameraPosition.target.lng;
   //    this.marker.setPosition(cameraPosition.target);
   //    //this.marker.position = cameraPosition.target;
   //    console.log(this.latitude+" / "+this.longitude);
   //  });

    //
    //


    localStorage.setItem("regis_lat", this.latitude);
    localStorage.setItem("regis_lng", this.longitude);
    let latLng = new google.maps.LatLng(this.latitude, this.longitude);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    let marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    marker.addListener('dragend', function() {
      localStorage.setItem("regis_lat",marker.getPosition().lat());
      localStorage.setItem("regis_lng",marker.getPosition().lng());
      this.map.setCenter(marker.getPosition());
    });

  }

  async registStore(){

      if( (this.password != this.repassword) || this.password.trim() == ""){
        alert("รหัสผ่านไม่ตรงกัน/โปรดระบุรหัสผ่าน");
        return;
      }else if(this.promptpay == ""){
        alert("กรุณาระบุ promptpay");
        return;
      }else if(this.store_name == ""){
        alert("กรุณาระบุ ชื่อร้าน");
        return;
      }
      //alert("Register");
      const loading = await this._loading.create();
      await loading.present();
      
      this.latitude = localStorage.getItem('regis_lat');
      this.longitude = localStorage.getItem('regis_lng');

      console.log("Register with =>> "+this.latitude+" / "+this.longitude);


      this.registerService.registerstore(this.password,this.promptpay,this.store_name,this.latitude,this.longitude,5).subscribe(trn => {
          loading.dismiss();
          localStorage.setItem('store', JSON.stringify(trn));
          this.event.publish('store:changed',trn);
          this.router.navigateByUrl('/cart');

      }, err=>{
        loading.dismiss();
        alert("สมัครไม่สำเร็จ โปรดลองอีกครั้ง");
        this.router.navigateByUrl('/login');
      });
  }
}
