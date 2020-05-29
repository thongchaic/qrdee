import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormControl } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';
declare var google;

@Component({
  selector: 'app-store-location',
  templateUrl: './store-location.component.html',
  styleUrls: ['./store-location.component.scss'],
})
export class StoreLocationComponent implements OnInit {

  @Input() latitude: any;
  @Input() longitude: any;
  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;

  constructor(
    private _modalCtrl: ModalController,
    private _geolocation: Geolocation,
    private _loading: LoadingController,
    private toastService:ToastService
  ) { }

  ngOnInit() {


  }
  ionViewDidEnter() {


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
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this._modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
