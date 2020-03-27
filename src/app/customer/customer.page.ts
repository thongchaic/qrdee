import { Component,ViewChild ,AfterViewInit,ElementRef,NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UserService } from './shared/user.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastService } from '../shared/services/toast.service';
import { LoadingService } from '../shared/services/loading.service';
import { ActivatedRoute, Router,NavigationExtras  } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
// declare var google;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements AfterViewInit{

  tab:number = 0;
  latitude: any;
  longitude: any;
  member:any;
  stores:any[] = [];
  offset:number = 0;
  q = '';

  constructor(
    private geolocation: Geolocation,
    private userservice:UserService,
    private toastService:ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private builder: FormBuilder,
    private navCtrl: NavController,
    private loading: LoadingService
	){
    this.member = JSON.parse(localStorage.getItem('member'));
    this.latitude = this.member.latitude;
    this.longitude = this.member.longitude;
    console.log("list component called!!!");
    console.log(this.member);

  }

  ionViewWillEnter() {

  }
  ngAfterViewInit(): void {
    this.getCurrentPos();
  }



  getCurrentPos(){

    this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.loadStores();
    }).catch((error) => {
      alert("รับตำแหน่งปัจจุบันไม่ได้ ใช้ตำแหน่งล่าสุด");
      this.loadStores();
    });

  }

  loadStores(){
      //this.loading.showLoading();
      this.offset = this.stores.length;
      this.userservice.getStores(this.offset, this.latitude, this.longitude).subscribe((data:any)=>{
        //this.loading.dismissLoading();

        data.forEach(e => {
          this.stores.push(e)
        });
        console.log(this.stores);

      });
  }
  searchStores(q){

    if(q==""){
      this.loadStores();
      this.q = q;
    }

    if(this.q == q){

    }else{
      this.stores = [];
    }

    this.q = q;

    this.offset = this.stores.length;
    this.userservice.searchStores(q, this.offset, this.latitude, this.longitude).subscribe((data:any)=>{
      console.log(data);
      this.stores = data;
    });
  }
  infinitStores(e){
    console.log("Infinit => "+this.q);
    if(this.q == ""){
      console.log("Load Stores....");
      this.loadStores();
    }else{
      this.searchStores(this.q);
    }
  }

  viewStore(store){
    console.log(store);
  }



  changeTab(t){
    this.tab = t;

    if(this.tab == 0){
      this.stores = [];
      this.loadStores();
    }else{

    }
  }


}
