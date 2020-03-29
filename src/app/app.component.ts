import { Component, OnInit } from '@angular/core';
import { Platform,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router  } from '@angular/router';
import { LoginStoreService } from './login/shared/login-store.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  store:any;
  currentStore: any;

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
    private _loginService: LoginStoreService
  ) {

    // this.currentStore = this._loginService.currentStoreValue;

    this.event.subscribe('store:changed',trn=>{
       this.store = trn;

       this.reInitAll();

    });

    this.reInitAll();

  }
  reInitAll(){

    try{
      JSON.parse(localStorage.getItem('member'));
    }catch(e){
      const member = {
        id:null,
        mobile_number:null,
        latitude:14.8718084,
        longitude:103.4962797,
        firstname:null,
        lastname:null
      }
      localStorage.setItem('member', JSON.stringify(member));
    }

    try{
      this.store = JSON.parse(localStorage.getItem('store'));
    }catch(e){
      localStorage.removeItem('store');
      this.router.navigateByUrl('/login');
    }

    try{
      JSON.parse(localStorage.getItem('member_cart'));
    }catch(e){
      localStorage.setItem('member_cart',JSON.stringify([]));
    }

    this.initializeApp();

  }

  ngOnInit() {
    this._loginService.currentStore.subscribe(store => this.currentStore = store)
  }

  ionViewWillEnter() {
    console.log('main luanch..')
  }


   login(){
     this.router.navigate(['login']);
  }

   home(){
      this.router.navigate(['cart']);
   }

   logout(){
     this._loginService.logout();
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
