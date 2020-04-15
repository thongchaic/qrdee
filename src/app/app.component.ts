import { Component, OnInit } from '@angular/core';
import { Platform,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router  } from '@angular/router';
import { LoginStoreService } from './login/shared/login-store.service';
import { MQTTService } from 'ionic-mqtt';
import { v4 as uuidv4 } from 'uuid';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
// import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';


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

    // public backgroundMode: BackgroundMode,
    // private push: Push
  ) {
    // this.currentStore = this._loginService.currentStoreValue;

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

    //this.backgroundMode.enable();
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
        // text: 'Single ILocalNotification',
        // trigger: {in: 2, unit:ELocalNotificationTriggerUnit.SECOND }
      });

    //this.initializeApp();

  }

  _onConnectionLost(responseObject) {
    console.log('_onConnectionLost');
    console.log(responseObject);
  //  this._mqttClient = this.mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPIC, this.MQTT_CONFIG);

  }

  _onMessageArrived(message) {


    try{


      alert("มีคำสั่งซื้อมาใหม่ "+message.payloadString+" บาท");
      // localStorage.setItem('orders', JSON.stringify(message));
      // console.log(" BG => "+localStorage.getItem('orders'));
      //console.log(message);

      // if(!this.background){
      //   console.log('message');
      //   console.log(message);
      //   alert("มีคำสั่งซื้อมาใหม่ "+message.payloadString+" บาท");
      // }else{
      //   console.log("Background.....");
      //   console.log(message);
      // }

      // this.localNotifications.schedule({
      //   id: 1,
      //   title: 'ยินดีต้อนรับสู่ QRDee',
      //   // text: 'Single ILocalNotification',
      //   trigger: {in: 2, unit:ELocalNotificationTriggerUnit.SECOND }
      // });
      //this.showNotification();

    }catch(e){
      console.log('message.e');
      console.log(e);
    }


 }
  // showNotification(){
  //   this.localNotifications.schedule({
  //     id: this.notify_id,
  //     title: 'ยินดีต้อนรับสู่'
  //   });
  //   this.notify_id++;
  //   //
  //   // this.platform.ready().then(() => {
  //   //
  //   // });
  // }
  trackOrders(){
    // if(this.orders > 0){
    //   this.orders = 0;
    //   this.showNotification();
    // }

    // try{
    //   console.log("tracking orders....");
    //   this.showNotification();
    // }catch(e){
    //   console.log("tracking orders error...");
    //   console.log(e);
    // }

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
     // this.localNotifications.schedule({
     //   id: 1,
     //   title: 'title',
     //   // text: 'Single ILocalNotification',
     //   // trigger: {in: 2, unit:ELocalNotificationTriggerUnit.SECOND }
     // });

     //this.showNotification();

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

  // pushPermission(){
  //   this.push.hasPermission()
  //   .then((res: any) => {
  //
  //     if (res.isEnabled) {
  //       console.log('We have permission to send push notifications');
  //
  //       this.push.listChannels().then((channels) => console.log('List of channels', channels))
  //
  //
  //       const options: PushOptions = {
  //         android: {},
  //         ios: {
  //           alert: 'true',
  //           badge: true,
  //           sound: 'false'
  //         },
  //         windows: {},
  //         browser: {
  //           pushServiceURL: 'http://push.api.phonegap.com/v1/push'
  //         }
  //       }
  //
  //       const pushObject: PushObject = this.push.init(options);
  //       //
  //       // pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
  //       //
  //       // pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
  //       //
  //       // pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  //
  //     } else {
  //       console.log('We do not have permission to send push notifications');
  //     }
  //
  //   });
  //
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //this.pushPermission();
      //
      // this.backgroundMode.on('activate').subscribe(() => {
      //   console.log('activated');
      //   //this.interval_id = setInterval(this.trackOrders, 3000);
      // });
      // this.backgroundMode.on('deactivate').subscribe(() => {
      //   console.log('deactivated');
      //   //clearInterval(this.interval_id);
      //   //setInterval(this.trackOrders, 2000);
      // });
      // this.backgroundMode.enable();
      // //setInterval(this.trackOrders, 3000);
      // this.showNotification();


    });
  }
}
