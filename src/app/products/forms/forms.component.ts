import { Component,ViewChild ,AfterViewInit,ElementRef,NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormsService } from '../shared/forms.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastService } from '../../shared/services/toast.service';
import { ActivatedRoute, Router,NavigationExtras  } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
declare var google;
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent  {

// ตัวแปร
  
	title = '';
	latitude: any;
	longitude: any;
	
    url = environment.url;
	
@ViewChild('mapElement',{static:false}) mapNativeElement: ElementRef;

    constructor(
		private geolocation: Geolocation,
		private productServices:FormsService,
		private toastService:ToastService,
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpClient,
		private builder: FormBuilder,
		private loadingController: LoadingController,
		private navCtrl: NavController
		){}
	
store_distancess:any;



ngAfterViewInit(): void {
        this.geolocation.getCurrentPosition().then((resp) => {
				console.log(resp);
				this.latitude = resp.coords.latitude;
				this.longitude = resp.coords.longitude;
				const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
					center: {lat: resp.coords.latitude, lng: resp.coords.longitude},
					zoom: 6,
				});
				
				const infoWindow = new google.maps.InfoWindow;
				const pos = {lat: this.latitude,lng: this.longitude};
				infoWindow.setPosition(pos);
				infoWindow.setContent('ตำแหน่งของคุณ.');
				infoWindow.open(map);
                map.setCenter(pos); 
        
				this.loadStoreDistance();
		    }).catch((error) => { 
			console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error); 
		});		    
} 

    // store_id = 0 ;
store_product(id) {
	      let navigationExtras: NavigationExtras = {
          queryParams: {
              special: JSON.stringify(id)
           }
    };
    this.router.navigate(['products'], navigationExtras);
	console.log('id',id);
    console.log('navigationExtras',navigationExtras);

}




loadStoreDistance() {
 this.productServices.getStoredistances(this.latitude,this.longitude).subscribe((data:any) => {
		 this.store_distancess = data.data;
    //  console.log('tesssst',this.latitude,this.longitude);
    console.log('รายชื่อร้านค้า',this.store_distancess);
    console.log('ตำแหน่งลูกค้า',this.latitude,this.longitude);
   });
}

}
  

  

