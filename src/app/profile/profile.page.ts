import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import { ProfileService } from './shared/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';


declare var google;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;
  latitude = 14.8718084;
  longitude = 103.4962797;

  store:any;
  store_types:any;

  constructor(
  	private profileservice: ProfileService,
    private geolocation: Geolocation,
    private route: ActivatedRoute
  ){

    this.store = JSON.parse(localStorage.getItem('store'));
    localStorage.setItem("store_lat",this.store.latitude);
    localStorage.setItem("store_lng",this.store.longitude);
    //alert(JSON.stringify(this.store));
  }

  ionViewWillEnter() {
	   //this.loadProfile();
     this.loadStoreTypes();
  }


  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
        this.store.latitude = resp.coords.latitude;
        this.store.longitude = resp.coords.longitude;
        this.loadMap();
    });
    this.loadMap();

  }
  submit(){
    this.store.latitude = localStorage.getItem('store_lat');
    this.store.longitude = localStorage.getItem('store_lng');
    localStorage.setItem('store', JSON.stringify(this.store));

    console.log(this.store);

    this.profileservice.updateProfile(this.store,this.store.id).subscribe((data:any)=>{
      console.log(data);
      const member = {
        mobile_number:this.store.mobile_number,
        latitude:this.store.latitude,
        longitude:this.store.longitude,
        firstname:this.store.firstname,
        lastname:this.store.lastname
      }
      localStorage.setItem('member', JSON.stringify(member));
      console.log(member);
      localStorage.removeItem('store_lat');
      localStorage.removeItem('store_lng');
    });
  }
  loadStoreTypes(){
    this.profileservice.getStoreTypes().subscribe((data:any)=>{
      this.store_types = data;
      console.log(this.store_types);
    })

  }
  loadMap() {

    let latLng = new google.maps.LatLng(this.store.latitude, this.store.longitude);
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

      localStorage.setItem("store_lat",marker.getPosition().lat());
      localStorage.setItem("store_lng",marker.getPosition().lng());

      this.map.setCenter(marker.getPosition());
    });

  }


   // loadProfile() {
   //  this.profileservice.getProfiles().subscribe(res => {
   //      this.store = res.data;
   //      console.log(this.store);
   //      });
   // }

}
