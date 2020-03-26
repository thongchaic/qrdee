import { Component, OnInit } from '@angular/core';
import { LoginStoreService } from './shared/login-store.service';
import { Router  } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ModalController,Events } from '@ionic/angular';
import { ToastService } from '../shared/services/toast.service';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

   token:string ='';
   login:any = {};
   promptpay:string ='';
   password:string ='';
   // is_disabled:boolean = false;

   usertype:string ='';

  constructor(
  	private loginService: LoginStoreService,
  	private router: Router,
    public navCtrl: NavController,
  	private http: HttpClient,
  	private modalController: ModalController,
    private event : Events,
    private toastService: ToastService,
    private storage: Storage
  	) {

  }

  loginForm() {
    this.loginService.logintore(this.promptpay,this.password).subscribe(trn => {

      //alert(JSON.stringify(trn));
      localStorage.setItem('store', JSON.stringify(trn));
      if(trn.store_type_id == 5){
        this.router.navigateByUrl('/cart');
      }else if(trn.store_type_id == 4){
         this.router.navigateByUrl('/logistic');
      }

      this.event.publish('store:changed',trn);

      // console.log(trn);
      // this.email = trn.data;
      // this.token = trn.access_token;
      //
      // // console.log("test",this.token);
      // // console.log('access_token ' + this.token);
      // localStorage.setItem('access_token', this.token);
      // localStorage.setItem('usertype', trn.usertype);
      // // console.log('usertype' + trn.usertype);
      //
      // if(trn.usertype == 1){
      //         this.router.navigateByUrl('/cart');
      //  }
      //
      //  if(trn.usertype == 2){
      //         this.router.navigateByUrl('/logistic');
      //  }
      //  if(trn.usertype == 3){
      //         this.router.navigateByUrl('/customer');
      //  }

     });

  }



goRegister_store(){
 this.router.navigateByUrl('/register');
}

goRegister_logistic(){
 this.router.navigateByUrl('/register-logistic');
}

goRegister_customer(){
 this.router.navigateByUrl('/register-customer');
}

}
