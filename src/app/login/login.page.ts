import { Component } from '@angular/core';
import { LoginStoreService } from './shared/login-store.service';
import { Router  } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ModalController,Events } from '@ionic/angular';
import { ToastService } from '../shared/services/toast.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

   token:string ='';
   login:any = {};
   promptpay:string ='0843928454';
   password:string ='cs';
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
    private storage: Storage,
    private _loading: LoadingController
  ) {

  }

  async loginForm() {
    const loading = await this._loading.create();
    await loading.present();

    await this.loginService.logintore(this.promptpay,this.password).subscribe(trn => {

      //alert(JSON.stringify(trn));
      loading.dismiss();
      console.log(trn);
      localStorage.setItem('store', JSON.stringify(trn));
      const member = {
        id:null,
        mobile_number:trn.mobile_number,
        latitude:trn.latitude,
        longitude:trn.longitude,
        firstname:trn.firstname,
        lastname:trn.lastname
      }
      localStorage.setItem('member', JSON.stringify(member));
      this.event.publish('store:changed',trn);
      this.router.navigateByUrl('/cart');

    }, err=>{
      loading.dismiss();
    });

  }

  goRegister_store(){
    this.router.navigateByUrl('/register');
  }

  goRegister_logistic(){
    this.router.navigateByUrl('/register-logistic');
  }

  goRegister_customer(){

    //this.router.navigateByUrl('/register-customer');
  }

}
