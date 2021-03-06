import { Component, OnInit } from '@angular/core';
import { Platform,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { LoginStoreService } from './login/shared/login-store.service';
import { MQTTService } from 'ionic-mqtt';
import { v4 as uuidv4 } from 'uuid';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import {Observable} from "rxjs";
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { Network } from '@ionic-native/network/ngx';
import { UserService } from './shared/user.service';
import { TranslateService } from '@ngx-translate/core';

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
  user:any = null;



  notify_id = 1;
  interval_id = 0;
  interval_lo = 0;
  mqtt_refresh = 0;
  background = false;
  hungry_internet = false;

  private _mqttClient: any = null;


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
    private badge: Badge,
    private network: Network,
    private _user: UserService,
    private _translate: TranslateService
    // private push: Push
  ) {
    this._translate.setDefaultLang(localStorage.getItem('lang') || 'th');
    // this.currentStore = this._loginService.currentStoreValue;

    // localStorage.setItem('background','0');
    // localStorage.setItem('orders',JSON.stringify([]));

    // console.log("=================START======================");
    // this.event.subscribe('store:changed',trn=>{
    //    this.store = trn;
    //    //this.currentStore = trn;
    //    this.reInit(trn);
    // });

    this.router.events.subscribe((event: RouterEvent) => {
      if(event.url){
        console.log(event.url);
        this.user = this._user.storeOrRider();
        console.log(this.user);
        if(this.user.store){
          this.reInit();
        }
      }
    });

    this.user = this._user.storeOrRider();


    // let store = JSON.parse(localStorage.getItem('store'));
    if(this.user.store){

      this.reInit();
      this.networkMon();
      
      this.localNotifications.schedule({
        title: 'ยินดีต้อนรับสู่ QRDee'
      });

    }
    this.initializeApp();

  }

  reInit(){

      this.store = this._user.getStore();
      // localStorage.setItem('store', JSON.stringify(store));
      // console.log(this.store);

      this.member = this._user.getMember();//JSON.parse(localStorage.getItem('member'));
      //console.log(this.member);

      if(!this.member){
          const member = {
            id:null,
            mobile_number:this.store.mobile_number,
            latitude:this.store.latitude,
            longitude:this.store.longitude,
            firstname:this.store.firstname,
            lastname:this.store.lastname
          }
          this._user.storeMember(member);
          //localStorage.setItem('member', JSON.stringify(member));
      }
      // else{
      //       this.member.mobile_number = this.store.mobile_number;
      //       this.member.latitude = this.store.latitude;
      //       this.member.longitude = this.store.longitude;
      //       this.member.firstname = this.store.firstname;
      //       this.member.lastname = this.store.lastname;
      //       this._user.storeMember(this.member);
      //       //localStorage.setItem('member', JSON.stringify(this.member));
      //   }
      this.mqttConnect();
      

  }

  _onConnectionLost(responseObject) {
      console.log('_onConnectionLost '+this.background);

      this._mqttClient = null;
      // if(this.interval_lo <=0){
      //   this.interval_lo = setInterval(()=>{
      //     console.log("_onConnectionLost.interval..."+this.interval_lo);
      //     this.mqttConnect();
      //   }, 2000);
      // }


  }

  _onMessageArrived(message) {

    try{

      console.log(this.background);

      if(message.destinationName == "/qrdee/store/broadcast"){
        this.showBroadcastNotification(message.payloadString);
      }else{
        this.showNotification(message.payloadString);
        this.badge.increase(1);
        this.router.navigate(['cart']);
        this.event.publish('store:orders',message);

      }
    }catch(e){
      console.log('.e');
      console.log(e);
    }
 }

 mqttConnect(){
   if(this.store && this._mqttClient==null){
     let TOPIC: string[] = [];
     let MQTT_CONFIG: {
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

     TOPIC = ["/qrdee/store/"+this.store.id,
     "/qrdee/store/broadcast"];
     console.log("Connecting to mqtt....",TOPIC);
     console.log(MQTT_CONFIG);
     try{
       this._mqttClient = this.mqttService.loadingMqtt( (lost)=>{
         this._onConnectionLost(lost);
       }, (arrived)=>{
         this._onMessageArrived(arrived);
       }, TOPIC, MQTT_CONFIG);

     }catch(ee){
       console.log("MQTT connect errr....");
       this._mqttClient = null;
       //this.mqttConnect();
     }

   }
   // else{
   //
   //   console.log("_mqttClient not null ["+this.interval_id+"]");
   //   try{
   //     console.log("Try .. sendMessage");
   //     this.mqttService.sendMessage('/qrdee/ping','0');
   //     // if(!this.background){
   //       // if(this.interval_lo>0){
   //       //   console.log("stop interval "+this.interval_lo);
   //       //   clearInterval(this.interval_lo);
   //       //   this.interval_lo = 0;
   //       //   this.hungry_internet = false;
   //       // }
   //     // }
   //   }catch(eee){
   //     console.log("sendMessage error ... ", eee);
   //     this.interval_lo = 0;
   //     this._mqttClient = null;
   //     this._onConnectionLost(null);
   //   }
   //
   // }

 }
 // onBackground(){
 //   if(this.interval_lo>0){
 //
 //     if(!this.hungry_internet){
 //       this.showBroadcastNotification("เชื่อมต่ออินเทอร์เน็ตไม่ได้");
 //       this.hungry_internet = !this.hungry_internet;
 //     }
 //
 //   }
 // }

  showNotification(price){
    this.localNotifications.schedule({
      title: 'มีคำสั่งซื้อมาใหม่ '+price+" บาท"
    });
  }
  showBroadcastNotification(title){
    this.localNotifications.schedule({
      title: title
    });
  }
  // trackOrders(){
  //
  //   console.log("tracking orders..."+localStorage.getItem('background'));
  //   let orders = JSON.parse(localStorage.getItem('orders'));
  //   this.mqttConnect();
  //   orders.forEach(e => {
  //     this.showNotification(e.payloadString);
  //     this.badge.increase(1);
  //   });
  //   localStorage.setItem('orders',JSON.stringify([]));
  //
  // }

  ngOnInit() {
    console.log("_______app.ngOnInit=>_");
    this.mqttConnect();
  }

  login(){
    console.log("____login))))");
     this.router.navigate(['login']);
  }

  orderList(){
    this.router.navigate(['riders']);
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
  networkMon(){

    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this._mqttClient = null;
      alert("ไม่มีการเชื่อมต่ออินเทอร์เน็ต");
    });

    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.mqttConnect();
      // setTimeout(() => {
      //   console.log("connection type = "+this.network.type);
      //   //this.mqttConnect();
      //   if (this.network.type === 'wifi') {
      //     console.log('we got a wifi connection, woohoo!');
      //   }
      // }, 3000);
    });

  }




  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.backgroundMode.on('activate').subscribe(() => {
      //   console.log('activated');
      //   this.background = true;
      //   this.mqttConnect();
      //   // this.interval_id = setInterval(()=>{
      //   //   console.log("backgroundMode.interval..."+this.interval_id);
      //   //   //this.onBackground();
      //   // }, 3000);
      //   //this.networkMon();

      // });

      // this.backgroundMode.on('deactivate').subscribe(() => {
      //   console.log('deactivated....');
      //   this.background = false;
      //   this.mqttConnect();
      //   // if(this.interval_id>0){
      //   //   console.log("stop interval "+this.interval_id);
      //   //   clearInterval(this.interval_id);
      //   //   this.interval_id = 0;
      //   // }
      // });

      // this.backgroundMode.enable();

    });
  }
}
