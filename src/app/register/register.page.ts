import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
// import { RegisterStoreService } from './shared/register-store.service';
import { RegisterStoreService } from './shared/register-store.service';
import { Router  } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { ViewChild } from '@angular/core';
import { ToastService } from '../shared/services/toast.service';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

//declare var google;
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  password:string='';
  repassword:string ='';
  firstname:string='';
  lastname:string='';
  promptpay:string='';
  mobile_number:string='';
  store_name :string='';
  email:string='';
  latitude:any='';
  longitude:any='';

  map: GoogleMap;
  @ViewChild('mapElements',{static:false}) mapNativeElement: ElementRef;
  constructor(
   // public navCtrl: NavController,
   private router: Router,
   public registerService: RegisterStoreService,
   private geolocation: Geolocation,
   private toastService: ToastService,
  	) { }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp);

        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        // const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        //   center: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        //   zoom: 6,
        // });

        //
        // var icon = {
        //     url:'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
        //     scaledSize: new google.maps.Size(50, 50), // scaled size
        // };
        // var marker = new google.maps.Marker({
        //     position: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        //     map: map,
        //     icon: icon
        // });
        //
        // const infoWindow = new google.maps.InfoWindow;
        // const pos = {
        //   lat: this.latitude,
        //   lng: this.longitude
        // };
        // infoWindow.setPosition(pos);
        // infoWindow.setContent('ตำแหน่งของคุณ.');
        // infoWindow.open(map);
        // map.setCenter(pos);
        //console.log(google);
        this.loadMap();


        }).catch((error) => {
          console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error);
    });
  }

  // loadMap() {
  //   let latLng = new google.maps.LatLng(this.latitude, this.longitude);
  //   this.map = new google.maps.Map(this.mapNativeElement.nativeElement, {
  //     zoom: 15,
  //     center: latLng,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     mapTypeControl: false,
  //     zoomControl: false,
  //     streetViewControl: false,
  //     fullscreenControl: false,
  //   });
  //   new google.maps.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     position: latLng
  //   });
  // }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDkySMtx7QzROqwXuiS34R6Lll3056cWQQ',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDkySMtx7QzROqwXuiS34R6Lll3056cWQQ'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('mapElements', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

  // loadMap() {
  //     console.log("loadMap");
  //     this.map = GoogleMaps.create('mapElements', {})
  //     this.map.on(GoogleMapsEvent.MAP_READY).subscribe((m) => {
  //       console.log(m)
  //       // Access user's current position
  //         // let latLng = new LatLng(this.latitude, this.longitude);
  //         //
  //         // // create a marker on your current location
  //         // this.map.addMarker({
  //         //   position: latLng,
  //         //   title: "My Location"
  //         // }).then(() => {
  //         //   // move to camera position to current location
  //         //   this.map.moveCamera({ target: latLng, zoom: 12 })
  //         // })
  //
  //     })
  //   }

Register_store(latitude,longitude){
    this.registerService.registerstore(this.password,this.firstname,this.lastname,this.promptpay,this.mobile_number,this.store_name,this.email,this.latitude,this.longitude).subscribe(trn => {
          console.log(trn);
          console.log(this.latitude,this.longitude);
          this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
          this.router.navigateByUrl('/login');
   });
  }
}
