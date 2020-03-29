import { Component,ViewChild ,AfterViewInit,ElementRef,NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UserService } from './shared/user.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastService } from '../shared/services/toast.service';
import { ActivatedRoute, Router,NavigationExtras  } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { ModalController } from '@ionic/angular';
import { CartmodalComponent } from './cartmodal/cartmodal.component';
import { CustomerService } from './shared/customer.service';
import { MapmodalComponent } from './mapmodal/mapmodal.component';

declare var google;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements AfterViewInit{

  tab1 = false;
  tab2 = true;
  latitude: any;
  longitude: any;
  member:any;
  stores:any[] = [];
  offset:number = 0;
  q = '';
  member_cart:any[] = [];
  total_price = 0;
  notes:string = '';

  @ViewChild('mapElement',{static:false}) mapElement: ElementRef;
  map: any;

  constructor(
    private geolocation: Geolocation,
    private userservice:UserService,
    private toastService:ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private builder: FormBuilder,
    private navCtrl: NavController,
    private modalController: ModalController,
    private _loading: LoadingController,
    private callNumber: CallNumber
	){

    this.member = JSON.parse(localStorage.getItem('member'));
    this.latitude = this.member.latitude;
    this.longitude = this.member.longitude;

    console.log("list component called!!!");
    console.log(this.member);

    this.loadStores();
  }

  ionViewWillEnter() {

  }
  ngAfterViewInit(): void {
    //this.getCurrentPos();

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


  async loadStores(){
      const loading = await this._loading.create();
      await loading.present();

      this.offset = await this.stores.length;
      await this.userservice.getStores(this.offset, this.latitude, this.longitude).subscribe((data:any)=>{
        //this.loading.dismissLoading();

        data.forEach(e => {
          this.stores.push(e)
        });
        console.log(this.stores);
        loading.dismiss();

      }, err=>{
        loading.dismiss();
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
  calcTotalPrice(){
    this.total_price = 0;
    this.member_cart.forEach(e => {
        this.total_price += e.delivery_price;
        e.products.forEach(p => {
          this.total_price += p.price;
        });
    });

  }

  processPayment(){
    this.tab1 = true;
    this.tab2 = false;

    this.member_cart = JSON.parse(localStorage.getItem('member_cart'));
    console.log(this.member_cart);
    this.calcTotalPrice();

    if(this.mapElement){
      console.log("Element active");
      this.loadMap();
    }else{
      console.log("Element not active");
    }
  }

  loadMap() {


    localStorage.setItem("member_lat",this.latitude);
    localStorage.setItem("member_lng",this.longitude);

    let latLng = new google.maps.LatLng(this.latitude, this.longitude);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
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
      localStorage.setItem("member_lat",marker.getPosition().lat());
      localStorage.setItem("member_lng",marker.getPosition().lng());
      this.map.setCenter(marker.getPosition());
    });

  }

  placeOrder(){

    this.member_cart = JSON.parse(localStorage.getItem('member_cart'));
    this.latitude = localStorage.getItem('member_lat');
    this.longitude = localStorage.getItem('member_lng');


    console.log(this.member);

    this.userservice.placeOrder(this.member, this.member_cart, this.notes, this.latitude, this.longitude).subscribe((data:any)=>{
        console.log("res =====> ");
        console.log(data);


        localStorage.setItem('member',JSON.stringify( data.member ));
        localStorage.setItem('member_cart',JSON.stringify( [] ));

        this.member_cart = [];
        this.total_price = 0;

        this.toastService.showToast('ส่งคำสั่งซื้อเรียบร้อยแล้ว', 'top');
        this.changeTab(0);

    });

  }

  removeItem(store_id, product_id){
    let i = 0;
    this.member_cart.forEach(e => {
      if(e.id == store_id){
        let j = 0;
        e.products.forEach(p => {
            if(p.id == product_id){
              e.products.splice(j,1);
              console.log(store_id+" => "+e.products.length);
              if(e.products.length <= 0){
                this.member_cart.splice(i,1);
              }
            }
            j++;
        });
      }
      i++;
    });
    this.calcTotalPrice();
    localStorage.setItem('member_cart',JSON.stringify(this.member_cart));
  }

  callStore(mobile_number){
    this.callNumber.callNumber(`${mobile_number}`, true)
      .then(res => {  })
      .catch(err => { alert(JSON.stringify(err)); });
  }

  viewStore(store){
    //console.log(store);
    this.cartModal(store);
  }

  async cartModal(store) {

    const modal = await this.modalController.create({
      component: CartmodalComponent,
      componentProps: {
        'store': store
      }
    });
    modal.onDidDismiss()
      .then(status => {
        console.log("dismis => ");
        console.log(status);

        if(status.data == 3){
          this.processPayment();
        }

      });
    return await modal.present();

  }

  changeTab(t){

    if(t == 0){
      this.tab1 = false;
      this.tab2 = true;
      this.stores = [];
      this.loadMapModal();
    }else{
      this.tab1 = true;
      this.tab2 = false;
      this.processPayment();
    }
  }

  async loadMapModal() {
    const modal = await this.modalController.create({
      component: MapmodalComponent
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    this.latitude = await data.latitude;
    this.longitude = await data.longitude;

    await(this.loadStores());
  }


}
