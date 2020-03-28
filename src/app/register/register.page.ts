import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { RegisterStoreService } from './shared/register-store.service';
import { Router  } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastService } from '../shared/services/toast.service';
import { ModalController,Events } from '@ionic/angular';

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
  @ViewChild('mapElement',{static:false}) mapElement: ElementRef;
  map: any;
  constructor(
   // public navCtrl: NavController,
   private router: Router,
   public registerService: RegisterStoreService,
   private geolocation: Geolocation,
   private toastService: ToastService,
   private event : Events,
   ) { }

  ngAfterViewInit(): void {
    this.latitude = 14.8718084;
    this.longitude = 103.4962797;
    this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.loadMap();
    });
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

  registStore(){

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

      this.latitude = localStorage.getItem('regis_lat');
      this.longitude = localStorage.getItem('regis_lng');

      this.registerService.registerstore(this.password,this.promptpay,this.store_name,this.latitude,this.longitude,5).subscribe(trn => {

          localStorage.removeItem('regis_lat');
          localStorage.removeItem('regis_lng');
          localStorage.setItem('store', JSON.stringify(trn));
          this.event.publish('store:changed',trn);
          const member = {
            id:null,
            mobile_number:trn.mobile_number,
            latitude:trn.latitude,
            longitude:trn.longitude,
            firstname:trn.firstname,
            lastname:trn.lastname
          }

          localStorage.setItem('member', JSON.stringify(member));
          console.log(member);

          this.router.navigateByUrl('/cart');

      }, err=>{
        alert("Network error!");
      });
  }
}
