import { Component, OnInit,ElementRef,ViewChild, Output} from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastService } from '../shared/services/toast.service';

declare var google;


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {


  @ViewChild('mapElement',{static:false}) mapElement: ElementRef;
  map: any;
  order: any;
  latitude = 14.8718084;
  longitude = 103.4962797;
  mylatitude = 14.8718084;
  mylongitude = 103.4962797;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private geolocation: Geolocation) {

      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.order = JSON.parse(params.special);
          alert(JSON.stringify(this.order));
          this.latitude = this.order.member.latitude;
          this.longitude = this.order.member.longitude;
        }
      });
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.geolocation.getCurrentPosition().then((resp) => {
        this.mylatitude = resp.coords.latitude;
        this.mylongitude = resp.coords.longitude;
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
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    marker.addListener('dragend', function() {
      this.latitude = marker.getPosition().lat();
      this.longitude = marker.getPosition().lng();
      this.map.setCenter(marker.getPosition());
    });
    let mymarker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(this.mylatitude, this.mylongitude),
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      }
    });
  }

}
