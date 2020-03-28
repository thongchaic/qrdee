import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
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

  latitude:number = 14.8718084;
  longitude:number = 103.4962797;


  constructor(
    private _modalCtrl: ModalController,
    private _geolocation: Geolocation,
    private _loading: LoadingController) { }

  ngOnInit() {


  }

  ngAfterViewInit(): void {
    //this.getCurrentPos();
    this.member = JSON.parse(localStorage.getItem('member'));


     this._geolocation.getCurrentPosition().then((resp) => {

        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.loadMap();

     }).catch((error) => {

       this.latitude = this.member.latitude;
       this.longitude = this.member.longitude;
       this.loadMap();
     });


  }

  dismissModal() {

    this.latitude = localStorage.getItem('select_lat');
    this.longitude = localStorage.getItem('select_lng');

    console.log("Dismiss => "+this.latitude+" / "+this.longitude);

    this._modalCtrl.dismiss({ latitude: this.latitude, longitude: this.longitude });
  }

  accept() {

    this.latitude = localStorage.getItem('select_lat');
    this.longitude = localStorage.getItem('select_lng');

    console.log("Accept => "+this.latitude+" / "+this.longitude);

    this._modalCtrl.dismiss({ latitude: this.latitude, longitude: this.longitude });
  }

  loadMap() {

    localStorage.setItem("select_lat", this.latitude )
    localStorage.setItem("select_lng", this.longitude );


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

      localStorage.setItem("select_lat",marker.getPosition().lat());
      localStorage.setItem("select_lng",marker.getPosition().lng());

      this.map.setCenter(marker.getPosition());
    });
  }

}
