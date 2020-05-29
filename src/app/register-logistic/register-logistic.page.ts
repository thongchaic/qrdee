import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { RegisterLogisticService } from './shared/register-logistic.service';
import { Router  } from '@angular/router';
import { ToastService } from '../shared/services/toast.service';
import { UserService } from '../shared/user.service';



@Component({
  selector: 'app-register-logistic',
  templateUrl: './register-logistic.page.html',
  styleUrls: ['./register-logistic.page.scss'],
})
export class RegisterLogisticPage  {

  password:string='';
  repassword:string ='';
  firstname:string='';
  lastname:string='';
  car_number:string='';
  mobile_number:string='';
  //email:string='';

  constructor(
   private router: Router,
   public registerService: RegisterLogisticService,
    private toastService: ToastService,
    private user: UserService
  	) { }



	RegisterLlogistic(){

    console.log(this.password, this.repassword, this.firstname, this.lastname, this.car_number, this.mobile_number);
    if(this.password != this.repassword){
      this.toastService.showToast("รหัสผ่านไม่ตรงกัน", 'top');
      return;
    }
    this.registerService.registerlogistic(this.password,this.firstname,this.lastname,this.mobile_number,this.car_number).subscribe(rider => {
    
      console.log(rider);
      this.user.storeUser(rider, 2);

      let member = this.user.getMember();//JSON.parse(localStorage.getItem('member'));
      if(!member){
          const member = {
            id:null,
            mobile_number:rider.mobile_number,
            latitude:14.8718084,
            longitude:103.4962797,
            firstname:rider.firstname,
            lastname:rider.lastname
          }
          this.user.storeMember(member);
      }

      //  this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
        this.router.navigateByUrl('/riders');
    });


	}
}
