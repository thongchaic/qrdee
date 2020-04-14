import { Component, OnInit } from '@angular/core';
import { Platform,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router  } from '@angular/router';
import { LoginStoreService } from './login/shared/login-store.service';
import { MQTTService } from 'ionic-mqtt';
import { v4 as uuidv4 } from 'uuid';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

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


  // appPages = [
  //   { title: 'หน้าแรก', url: '/cart', icon: 'home' },
  //   { title: 'สินค้า', url: '/products', icon: 'cube' },
  //   { title: 'นำเข้าสินค้า', url: '/products/create', icon: 'arrow-round-up' },
  //   { title: 'เพิ่มรูป', url: '/products/froms', icon: 'arrow-round-up' },
  //   { title: 'ข้อมูลร้าน', url: '/profile', icon: 'albums' },
  //   { title: 'ออเดอร์สินค้า', url: '/store-orders', icon: 'cart' },
  //   { title: 'เรียกคนส่งของ', url: '/store-logistic', icon: 'pin' },
  //   { title: 'ขนส่งสินค้า', url: '/logistic', icon: 'pin' },
  //   { title: 'สรุปการขาย', url: '/sell-stats', icon: 'albums' },
  //   { title: 'เลือกร้านค้า', url: '/customer', icon: 'albums' },
  //   { title: 'สถิติ', url: '/stats', icon: 'cart' },
  //   { title: 'ล็อคอิน', url: '/login', icon: 'pin' },
  //   { title: 'ออกจากระบบ', url: '/logout', icon: 'pin' },
  // ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private event : Events,
    private router: Router,
    private mqttService: MQTTService,
    private localNotifications: LocalNotifications,
    private _loginService: LoginStoreService
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

      this._mqttClient = this.mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPIC, this.MQTT_CONFIG);


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

    //this.initializeApp();

  }

  private _onConnectionLost(responseObject) {
    console.log('_onConnectionLost', responseObject);
    this._mqttClient = this.mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPIC, this.MQTT_CONFIG);

  }

  private _onMessageArrived(message) {

    console.log('message', message);
    this.localNotifications.schedule({
      id: 1,
      title: 'title',
      text: 'Single ILocalNotification',
      trigger: {in: 2, unit:ELocalNotificationTriggerUnit.SECOND }
    });


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
    });
  }
}
