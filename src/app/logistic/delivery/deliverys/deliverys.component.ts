import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ToastService } from '../../../shared/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LogisticService } from '../../shared/logistic.service';
import { IonInfiniteScroll } from '@ionic/angular';
declare var google;

@Component({
  selector: 'app-deliverys',
  templateUrl: './deliverys.component.html',
  styleUrls: ['./deliverys.component.scss'],
})
export class DeliverysComponent{

 @ViewChild('mapElement',{static:false}) mapNativeElement: ElementRef;
directionsService = new google.maps.DirectionsService;
directionsDisplay = new google.maps.DirectionsRenderer;
  
  code_randoms = 0;
  store_id  = 0 ;
  searchcoeds = []; 
  searchcoed: any;
  page = 1;
  searchTerm = '';
  query: any = '';
  firstname: any;
  lastname: any;
  mobile_number:any;
  latitude :any; 
  longitude :any; 
  latitude_store :any; 
  longitude_store :any; 


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private geolocation: Geolocation,
    private fb: FormBuilder, 
     private http: HttpClient,
    private logistic:LogisticService,
  
  	) {
     this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params && params.special) {
        this.code_randoms = JSON.parse(params.special);
        console.log('code_randoms: ',this.code_randoms);

      }
    });

     }
  // ร้านค้า
// currentLocation: any = {
//     lat: 14.891540, 
//     lng: 103.493884,
//   };

// ลูกค้า
// destination: any = {
//     lat: 14.888054, 
//     lng: 103.488836,
//   };


// ลูกค้า
// destination: any = {
//     lat: this.latitude, 
//     lng: this.longitude,
//   };


  ngAfterViewInit(): void {
  const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
    zoom: 7,
    center: {lat:13.759058, lng: 100.492632}
  });


  var icon = {
         // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
            url:'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00D900',
            scaledSize: new google.maps.Size(50, 50), // scaled size
        };
        //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
    
        var marker = new google.maps.Marker({
            position: {lat: this.latitude, lng: this.longitude},
            map: map,
           icon: icon
          
        });

        const infoWindow = new google.maps.InfoWindow;
        const user = {
          lat: this.latitude,
          lng: this.longitude
        };
        infoWindow.setPosition(user);
        infoWindow.setContent('ลูกค้า');
        infoWindow.open(map);
        map.setCenter(user); 

       const infoWindows = new google.maps.InfoWindow;
         const store = {
          lat: this.latitude_store,
          lng: this.longitude_store
        };
        infoWindows.setPosition(store);
        infoWindows.setContent('ร้านค้า');
        infoWindows.open(map);
        map.setCenter(store); 

    
  this.directionsDisplay.setMap(map);
  this.calculateAndDisplayRoute();
}


calculateAndDisplayRoute() {
  // const that = this;
this.logistic.getAlls(this.code_randoms).subscribe(res => {
    this.code_randoms;

      this.latitude = res.products.data[0].latitude;
      this.longitude = res.products.data[0].longitude;
      this.latitude_store = res.products.data[0].latitude_store;
      this.longitude_store = res.products.data[0].longitude_store;

      
      console.log('ลูกค้า',this.latitude,this.longitude,'ร้านค้า',this.latitude_store,this.longitude_store);
  
  this.directionsService.route({
    //ร้านค้า
    origin: {lat: this.latitude_store, lng: this.longitude_store},
    // ลูกค้า
    destination:{lat: this.latitude, lng: this.longitude},
    travelMode: 'DRIVING',
  }, (response, status) => {
    if (status === 'OK') {
      this.directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
});
}

 ionViewWillEnter() {
     this.loadCode();
  }

loadCode() { 
  if(this.code_randoms) {
      this.logistic.getAlls(this.code_randoms).subscribe(res => {
        this.code_randoms;
        console.log(res);
        this.searchcoeds = res.products.data;
        this.firstname = res.products.data[0].firstname;
        this.lastname = res.products.data[0].lastname;
        this.page = 1;
        console.log( this.searchcoeds);
         console.log(this.firstname,this.lastname);
      });
  }
}

submit() {
        this.toastService.showToast('กำลังบันทึกข้อมูล', 'top');
        this.logistic.Show(this.firstname, this.lastname).subscribe(trn => {
          console.log(this.firstname,this.lastname );
         });
        this.router.navigateByUrl('/logistic/delivery/show');
    }
}
