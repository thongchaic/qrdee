import { Component } from '@angular/core';
import { LoginStoreService } from './shared/login-store.service';
import { Router  } from '@angular/router';
import { NavController, LoadingController, ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ModalController,Events } from '@ionic/angular';
import { ToastService } from '../shared/services/toast.service';
import { Storage } from '@ionic/storage';
import { UserService } from '../shared/user.service';
import { TranslateService } from '@ngx-translate/core';


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
    private _loading: LoadingController,
    private _user: UserService,
    public _actionSheetController: ActionSheetController,
    private _translate: TranslateService
  ) {

    // let store = JSON.parse(localStorage.getItem('store'));
    // if(store){
    //   //console.log("already store =>");
    //   //console.log(store);
    //   this.event.publish('store:changed',store);
    //   this.router.navigateByUrl('/cart');
    // }

    // let rider = JSON.parse(localStorage.getItem('rider'));
    // if(rider){
    //   this.event.publish('rider:changed',rider);
    //   this.router.navigateByUrl('/riders');
    // }

    let user = this._user.storeOrRider();
    if(user.rider){
      this.router.navigateByUrl('/riders');
    }else if(user.store){
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
       console.log(trn);
      //this.router.navigateByUrl('/cart');
      // localStorage.setItem('store', JSON.stringify(trn));
      // this.event.publish('store:changed',trn);

      this._user.storeUser(trn,1);

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
    // let member = JSON.parse(localStorage.getItem('member'));
    let member = this._user.getMember();
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
      this._user.storeMember(member);
      // localStorage.setItem('member', JSON.stringify(member));
      // console.log(member);
      this.router.navigateByUrl('/customer');
    }else{
      console.log("member already set....");
      this.router.navigateByUrl('/customer');
    }

  }
}
