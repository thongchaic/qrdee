import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormControl } from '@angular/forms';

declare var google;

@Component({
  selector: 'app-mapmodal',
  templateUrl: './mapmodal.component.html',
  styleUrls: ['./mapmodal.component.scss'],
})
export class MapmodalComponent implements OnInit {

  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;

  constructor(private _modalCtrl: ModalController, private _geolocation: Geolocation) { }

  ngOnInit() {
    this._geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.loadMap(resp.coords.latitude, resp.coords.longitude);
     }).catch((error) => {
       const lat = localStorage.getItem('store_lat');
       const lng = localStorage.getItem('store_lng');

       this.loadMap(lat, lng);

      //  console.log('Error getting location', error);
     });
  }

  dismissModal() {
    this._modalCtrl.dismiss({ latitude: localStorage.getItem('store_lat'), longitude: localStorage.getItem('store_lng') });
  }

  accept() {
    this._modalCtrl.dismiss({ latitude: localStorage.getItem('select_lat'), longitude: localStorage.getItem('select_lng') });
  }

  loadMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng);
    
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


      // this.latitude.setValue(marker.getPosition().lat());
      // this.longitude.setValue(marker.getPosition().lng());
      // this.latitude.patchValue(marker.getPosition().lat());
      // this.longitude.patchValue(marker.getPosition().lng());

      localStorage.setItem("select_lat",marker.getPosition().lat());
      localStorage.setItem("select_lng",marker.getPosition().lng());

      this.map.setCenter(marker.getPosition());
    });
  }

}
