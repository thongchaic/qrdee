import { Component,ViewChild ,AfterViewInit,ElementRef,NgZone, ViewEncapsulation } from '@angular/core';
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
import { Platform } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerPage implements AfterViewInit{

  tab1 = true;
  tab2 = false;
  tab3 = false;
  latitude:any = 14.883043;
  longitude:any = 103.4928108;
  firstname:any;
  mobile_number:any;
  member:any;
  stores:any[] = [];
  carts:any[] = [];
  offset:number = 0;
  q = '';
  member_cart:any[] = [];
  total_price = 0;
  notes:string = '';
  rate = 3;

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  @ViewChild('map',{static:false}) mapElement: ElementRef;
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
    private platform: Platform,
    private callNumber: CallNumber
	){


    localStorage.setItem('member_cart',JSON.stringify(this.member_cart));
    this.member = JSON.parse(localStorage.getItem('member'));
    if(this.member){
      this.latitude = this.member.latitude;
      this.longitude = this.member.longitude;
      this.mobile_number = this.member.mobile_number;
      this.firstname = this.member.firstname;
      console.log("list component called!!!");
      console.log(this.member);
    }


  }
  ionViewDidEnter() {
    console.log("customer did enter....");

  }

  ionViewWillEnter() {

  }
  async ngOnInit() {
    await this.platform.ready();
    this.loadStores();
    //this.loadMap();

    //this.changeTab(0);
  }
  ngAfterViewInit(): void {
    //this.getCurrentPos();

  }

  rateStore(e){
    console.log(e);
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

  async loadMyOrder(){

    console.log(this.member);
    if(!this.member.id){
      return;
    }
    const loading = await this._loading.create();
    await loading.present();
    await this.userservice.myOrder(this.member.id).subscribe((data:any)=>{
      loading.dismiss();
      console.log(data);
      this.carts = data;
    }, err=>{
      loading.dismiss();
      console.log(err);
    });

  }


  async loadStores(scrolled=false){


      if(this.latitude == null || this.longitude == null){
        this.loadMapModal();
        return;
      }



      const loading = await this._loading.create();
      await loading.present();

      this.offset = await this.stores.length;

      console.log(this.offset+", "+this.latitude+", "+this.longitude);
      await this.userservice.getStores(this.offset, this.latitude, this.longitude).subscribe((data:any)=>{
        //this.loading.dismissLoading();

        data.forEach(e => {
          let f = this.stores.find( t => t.id == e.id);
          if(!f){
            this.stores.push(e);
          }

        });

        loading.dismiss();
        if(scrolled){
          this.infiniteScroll.complete();
        }

      }, err=>{
        loading.dismiss();
        if(scrolled){
          this.infiniteScroll.complete();
        }
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
    }, err=>{
      console.log(err);
    });
  }

  infinitStores(event){



    if(this.q == ""){
      console.log("Load Stores....");
      this.loadStores(true);
    }else{
      this.searchStores(this.q);
    }
      //
      // setTimeout(() => {
      // console.log('Done');
      // this.infiniteScroll.complete();
      //
      //
      // }, 500);


  }

  calcTotalPrice(){
    this.total_price = 0;
    this.member_cart.forEach(e => {
        console.log(e);
        //this.total_price += e.delivery_price;
        let store_price = 0;
        e.products.forEach(p => {
          store_price += p.price;
        });
        if(store_price >= e.free_delivery_price){
          this.total_price += store_price;
        }else{
          this.total_price += store_price + e.delivery_price
        }
    });
  }

   processPayment(c){
     console.log("C="+c);
     let x = document.getElementById('map');
     if(!x && c < 100){
       setTimeout( () => {
           console.log("Not ready");
           let k = c + 1;
           this.processPayment(k);
       }, 100);
       return;
     }
     if(!x){
       alert("กดปุ่มคำสั่งซื้ออีกครั้ง");
     }


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
      localStorage.setItem("member_lat",marker.getPosition().lat());
      localStorage.setItem("member_lng",marker.getPosition().lng());
      this.map.setCenter(marker.getPosition());
    });
    this.map.setCenter( latLng );
    //console.log(this.map);

    //  google.maps.event.addListener(this.map, "idle", function(){
    //   google.maps.event.trigger(this.map, 'resize');
    // });
    // google.maps.event.trigger(this.map, 'resize');
    // this.map.setZoom( this.map.getZoom() );
    // this.map.resize();
  }

  async placeOrder(){

    this.member_cart = JSON.parse(localStorage.getItem('member_cart'));
    this.latitude = localStorage.getItem('member_lat');
    this.longitude = localStorage.getItem('member_lng');

    //this.member = JSON.parse(localStorage.getItem('member'));

    this.member.mobile_number = this.mobile_number;
    this.member.firstname = this.firstname;

    console.log(this.member);
    localStorage.setItem('member',JSON.stringify( this.member ));

    const loading = await this._loading.create();
    await loading.present();


    await this.userservice.placeOrder(this.member, this.member_cart, this.notes, this.latitude, this.longitude).subscribe((data:any)=>{

        loading.dismiss();
        console.log("res =====> ");
        console.log(data);


        this.member = data.member;
        localStorage.setItem('member',JSON.stringify( this.member ));
        localStorage.setItem('member_cart',JSON.stringify( [] ));

        this.member_cart = [];
        this.total_price = 0;

        this.toastService.showToast('ส่งคำสั่งซื้อเรียบร้อยแล้ว', 'top');
        this.changeTab(2);

    },err=>{
      this.toastService.showToast('คำสั่งซื้อผิดพลาด โปรดลองอีกครั้ง', 'top');
      console.log(err);
      loading.dismiss();
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

    console.log("call= >"+mobile_number);
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
          this.changeTab(1);
        }

      });
    return await modal.present();

  }

  changeTab(t){

    if(t == 0){
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.stores = [];
      this.loadMapModal();
    }else if (t == 1){
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.processPayment(0);
    }else{
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.loadMyOrder();
    }
  }

  async loadMapModal() {
    const modal = await this.modalController.create({
      component: MapmodalComponent
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    console.log(data);
    this.latitude = await data.latitude;
    this.longitude = await data.longitude;

    await(this.loadStores());
  }


}
