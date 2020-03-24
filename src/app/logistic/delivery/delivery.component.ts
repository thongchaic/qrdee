import { Component,ViewChild ,AfterViewInit,ElementRef,OnInit} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LogisticService } from '../shared/logistic.service';
declare var google;

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit, AfterViewInit {

  @ViewChild('mapElement',{static:false}) mapNativeElement: ElementRef;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
   searchcodes = [];  
  page = 1;
  code_randoms = '';
  query: any = '';
  currentLocation: any = {
    lat: 0,
    lng: 0
  };

  constructor(
    private fb: FormBuilder, 
    private geolocation: Geolocation,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpClient,
    private logistic:LogisticService,
    ){
    this.createDirectionForm();
    }

  ngOnInit() {
  }

search_code(code_randoms) {
      let navigationExtras: NavigationExtras = {
      queryParams: {
          special: JSON.stringify(this.code_randoms)
        }
    };
        this.router.navigate(['/logistic/delivery/deliverys'], navigationExtras);
        console.log(navigationExtras);

  }
// "HhFDVy2E"
search(query) {
  if(query){
     console.log(query);
    this.code_randoms = query;
  }
  // else{
  //    // console.log(query);
  //   this.code_randoms = query;
  //    this.toastService.showToast('รหัสไม่ถูกต้อง', 'top');
  // } 
}

  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
     this.geolocation.getCurrentPosition().then((resp) => {
       console.log(resp);
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
    });
     
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      center: {lat: 14.87386661912914, lng: 103.5601327971068}
    });

    var icon = {
         // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
            url:'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
            scaledSize: new google.maps.Size(50, 50), // scaled size
        };
        //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
        
        var marker = new google.maps.Marker({
            position: {lat: 14.87386661912914, lng: 103.5601327971068},
            map: map,
            icon: icon
        });


    this.directionsDisplay.setMap(map);
  }

  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: this.currentLocation,
      destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('คำขอเส้นทางล้มเหลวเนื่องจาก' + status);
      }
    });
  }


  submit() {
        this.toastService.showToast('กำลังตรวจสอบข้อมูล', 'top');
        this.router.navigateByUrl('/logistic/delivery/deliverys');
     
    }
    
  

}