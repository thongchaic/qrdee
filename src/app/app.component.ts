import { Component, OnInit } from '@angular/core';
import { Platform,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router  } from '@angular/router';
import { LoginStoreService } from './login/shared/login-store.service';
import { MQTTService } from 'ionic-mqtt';
import { v4 as uuidv4 } from 'uuid';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import {Observable} from "rxjs";
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Badge } from '@ionic-native/badge/ngx';


export declare enum ELocalNotificationTriggerUnit{
    SECOND = 'second',
    MINUTE = 'minute'
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  store:any = null;
  member:any = null;
  notify_id = 1;
  interval_id = 9;

  private _mqttClient: any;
  private TOPIC: string[] = [];
  private MQTT_CONFIG: {
    host: string,
    port: number,
    username: string,
    password: string,
    protocol: string,
    path: string,
    clientId: string
  } = {
    host: "qrdee.co",
    port: 9001,
    username:"miot",
    password:"SrruMIoT@2019",
    protocol: "ws",
    path: "/ws",
    clientId: uuidv4()
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private event : Events,
    private router: Router,
    private mqttService: MQTTService,
    public localNotifications: LocalNotifications,
    private _loginService: LoginStoreService,
    private backgroundMode: BackgroundMode,
    private badge: Badge
    // private push: Push
  ) {
    // this.currentStore = this._loginService.currentStoreValue;

    localStorage.setItem('background','0');
    localStorage.setItem('orders',JSON.stringify([]));

    console.log("=================START======================");
    this.event.subscribe('store:changed',trn=>{
       this.store = trn;
       //this.currentStore = trn;
       this.reInit(trn);
    });


    let store = JSON.parse(localStorage.getItem('store'));
    if(store){
      this.reInit(store);
    }

    this.initializeApp();




  }
  reInit(store){

      console.log("Received broadcast ===>");
      console.log(store);
      this.store = JSON.parse(localStorage.getItem('store'));
      localStorage.setItem('store', JSON.stringify(store));
      console.log(this.store);
      this.member = JSON.parse(localStorage.getItem('member'));
      console.log(this.member);
      this.TOPIC = ['/qrdee/store/'+store.id];

      if(!this.member){
          const member = {
            id:null,
            mobile_number:this.store.mobile_number,
            latitude:this.store.latitude,
            longitude:this.store.longitude,
            firstname:this.store.firstname,
            lastname:this.store.lastname
          }
          localStorage.setItem('member', JSON.stringify(member));
      }else{
          this.member.mobile_number = this.store.mobile_number;
          this.member.latitude = this.store.latitude;
          this.member.longitude = this.store.longitude;
          this.member.firstname = this.store.firstname;
          this.member.lastname = this.store.lastname;
          localStorage.setItem('member', JSON.stringify(this.member));
      }

      this._mqttClient = this.mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPIC, this.MQTT_CONFIG);

      this.localNotifications.schedule({
        title: 'ยินดีต้อนรับสู่ QRDee'
      });

    //this.initializeApp();

  }

  _onConnectionLost(responseObject) {
    console.log('_onConnectionLost');
    //console.log(responseObject);
  //  this._mqttClient = this.mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPIC, this.MQTT_CONFIG);

  }

  _onMessageArrived(message) {


    try{

      if(localStorage.getItem('background') == '0'){
        alert("มีคำสั่งซื้อมาใหม่ "+message.payloadString+" บาท");
      }else{
        //console.log("Background mode is on.....");
        //console.log(message);
        let tmp = JSON.parse(localStorage.getItem('orders'));
        tmp.push(message);
        localStorage.setItem('orders',JSON.stringify(tmp));
      }

    }catch(e){
      console.log('.e');
      console.log(e);
    }


 }
  showNotification(price){
    this.localNotifications.schedule({
      title: 'มีคำสั่งซื้อมาใหม่ '+price+" บาท"
    });
  }
  trackOrders(){

    console.log("tracking orders..."+localStorage.getItem('background'));
    let orders = JSON.parse(localStorage.getItem('orders'));
    //console.log(orders);
    orders.forEach(e => {
      this.showNotification(e.payloadString);
      this.badge.increase(1);
    });
    localStorage.setItem('orders',JSON.stringify([]));

  }

  ngOnInit() {
    // this._loginService.currentStore.subscribe(store => {
    //   console.log("INIT===>");
    //   console.log(store);
    //   this.store = store
    // });
    // console.log("_______app.ngOnInit=>_");
    // console.log(JSON.parse(localStorage.getItem('store')));
    // if(localStorage.getItem('store')){
    //   this.store = JSON.parse(localStorage.getItem('store'));
    // }
  }

  ionViewWillEnter() {
    // console.log("_______app.ionViewWillEnter=>_");
    // console.log(JSON.parse(localStorage.getItem('store')));
  }


  login(){
    console.log("____login))))");
     this.router.navigate(['login']);
  }

   home(){
     this.badge.clear();
      this.router.navigate(['cart']);
   }

   logout(){
     this.store = null;
     localStorage.removeItem('store');
     this.router.navigateByUrl('/login');
     // this._loginService.logout();
   }
   product(){
       this.router.navigate(['products']);
   }
   postproduct(){
       this.router.navigate(['/products/create']);
   }
     // img
   postproductimg(){
       this.router.navigate(['/products/imgs']);
   }

   profile(){
       this.router.navigate(['profile']);
   }

   logistic(){
       this.router.navigate(['logistic']);
   }

   customer(){
       this.router.navigate(['customer']);
   }

   stats(){
       this.router.navigate(['stats']);
   }

   sell(){
       this.router.navigate(['sell-stats']);
   }

   delivery(){
       this.router.navigate(['store-logistic']);
   }

    order(){
       this.router.navigate(['store-orders']);
   }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //this.pushPermission();
      this.backgroundMode.on('activate').subscribe(() => {

        console.log('activated');
        localStorage.setItem('background','1');
        localStorage.setItem('orders',JSON.stringify([]));
        this.interval_id = setInterval(()=>{
            this.trackOrders();
       }, 5000);

      });
      this.backgroundMode.on('deactivate').subscribe(() => {
        console.log('deactivated');
        localStorage.setItem('background','0');
        clearInterval(this.interval_id);
        //setInterval(this.trackOrders, 2000);
      });
      this.backgroundMode.enable();
      //setInterval(this.trackOrders, 3000);
      // this.showNotification();


    });
  }
}
