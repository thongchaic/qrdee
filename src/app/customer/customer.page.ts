import { Component,ViewChild ,AfterViewInit,ElementRef,NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UserService } from './shared/user.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastService } from '../shared/services/toast.service';
import { ActivatedRoute, Router,NavigationExtras  } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
declare var google;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements AfterViewInit{
	formType = 'update';
	title = '';
	latitude: any;
	longitude: any;
	users: any;
	store_distance:any;
    url = environment.url;
	hideMe: boolean = false;


@ViewChild('mapElement',{static:false}) mapNativeElement: ElementRef;
    constructor(
		private geolocation: Geolocation,
		private userservice:UserService,
		private toastService:ToastService,
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpClient,
		private builder: FormBuilder,
		private loadingController: LoadingController,
		private navCtrl: NavController
		){}

ngAfterViewInit(): void {
                this.geolocation.getCurrentPosition().then((resp) => {
				// console.log(resp);
				this.latitude = resp.coords.latitude;
				this.longitude = resp.coords.longitude;
				const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
					center: {lat: resp.coords.latitude, lng: resp.coords.longitude},
					zoom: 6,
				});
				var icon = {url:'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
				scaledSize: new google.maps.Size(50, 50), // scaled size
				};
				var marker = new google.maps.Marker({
						position: {lat: resp.coords.latitude, lng: resp.coords.longitude},
						map: map,
						icon: icon
				});
				const infoWindow = new google.maps.InfoWindow;
				const pos = {lat: this.latitude,lng: this.longitude};
				infoWindow.setPosition(pos);
				infoWindow.setContent('ตำแหน่งของคุณ.');
				infoWindow.open(map);
				map.setCenter(pos); 
				// this.loadStoreDistance();

				this.userservice.getStoreDistance(this.latitude,this.longitude).subscribe((data:any) => {
					this.store_distance = data.data;
					console.log('รายชื่อร้านค้า',this.store_distance);
					console.log('ตำแหน่งลูกค้า',this.latitude,this.longitude);
				});
            //    console.log(this.latitude,this.longitude);
		    }).catch((error) => { 
			console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error); 
		});
		    
} 
  
hide() {
	// this.hideMe = true;
	this.hideMe= !this.hideMe;
  }


    // store_id = 0 ;
store_product(id) {
	let navigationExtras: NavigationExtras = {
	    queryParams: {
	    special: JSON.stringify(id)
    }
    };
    this.router.navigate(['products'], navigationExtras);
	// console.log(id);
    console.log(navigationExtras);

}

// loadStoreDistance() {
// 	 this.userservice.getStoreDistance(this.latitude,this.longitude).subscribe((data:any) => {
// 		 this.store_distance = data.data;
// 		 console.log('tesssst',this.latitude,this.longitude);
// 	 });
// } 



}   





