import { Component } from '@angular/core';
import { Platform,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

   usertype: string = '';

    appPages = [ 
    { title: 'หน้าแรก', url: '/cart', icon: 'home' },
    { title: 'สินค้า', url: '/products', icon: 'cube' },
    { title: 'นำเข้าสินค้า', url: '/products/create', icon: 'arrow-round-up' },
    { title: 'เพิ่มรูป', url: '/products/froms', icon: 'arrow-round-up' },
    { title: 'ข้อมูลร้าน', url: '/profile', icon: 'albums' },
    { title: 'ออเดอร์สินค้า', url: '/store-orders', icon: 'cart' },
    { title: 'เรียกคนส่งของ', url: '/store-logistic', icon: 'pin' },
    { title: 'ขนส่งสินค้า', url: '/logistic', icon: 'pin' },
    { title: 'สรุปการขาย', url: '/sell-stats', icon: 'albums' },
    { title: 'เลือกร้านค้า', url: '/customer', icon: 'albums' },
    { title: 'สถิติ', url: '/stats', icon: 'cart' },
    { title: 'ล็อคอิน', url: '/login', icon: 'pin' },
    { title: 'ออกจากระบบ', url: '/logout', icon: 'pin' },
  ]; 



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private event : Events,
    private router: Router,
  ) {

    this.event.subscribe('user:changed',type=>{
       this.usertype = type
     });
    this.usertype = localStorage.getItem('usertype');
    console.log(this.usertype);  


    this.initializeApp();
  }

   login(){
     this.router.navigate(['login']);
  }
 
   home(){
      this.router.navigate(['cart']);
   }

   logout(){
      this.router.navigate(['logout']);
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


   store(){
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
