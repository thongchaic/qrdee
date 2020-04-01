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
    private storage: Storage,
    private _loading: LoadingController
  ) {

    let store = JSON.parse(localStorage.getItem('store'));
    if(store){
      console.log("already store =>");
      console.log(store);
      this.event.publish('store:changed',store);
      this.router.navigateByUrl('/cart');
    }


  }

  ionViewDidEnter() {

  }

  async loginForm() {
    const loading = await this._loading.create();
    await loading.present();

    await this.loginService.logintore(this.promptpay,this.password).subscribe(trn => {
      loading.dismiss();
      //alert(JSON.stringify(trn));
      // console.log(trn);
      //this.router.navigateByUrl('/cart');
      localStorage.setItem('store', JSON.stringify(trn));
      this.event.publish('store:changed',trn);
      this.router.navigateByUrl('/cart');

    }, err=>{
      loading.dismiss();
      alert("เบอร์โทร์ หรือรหัสผ่านไม่ถูกต้อง")
    });

  }

  goRegister_store(){
    console.log("Go register=====>");
    this.router.navigateByUrl('/register');
  }

  goRegister_logistic(){
    this.router.navigateByUrl('/register-logistic');
  }

  goRegister_customer(){
    console.log("Register customer");
    let member = JSON.parse(localStorage.getItem('member'));
    if(!member){
      console.log("member not set....");
      const member = {
        id:null,
        mobile_number:null,
        latitude:null,
        longitude:null,
        firstname:null,
        lastname:null
      }
      localStorage.setItem('member', JSON.stringify(member));
      console.log(member);
      this.router.navigateByUrl('/customer');
    }else{
      console.log("member already set....");
      this.router.navigateByUrl('/customer');
    }


  }

}
