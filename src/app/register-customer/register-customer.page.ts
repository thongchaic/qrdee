import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { RegisterCustomerService } from './shared/register-customer.service';
import { Router  } from '@angular/router';
import { ToastService } from '../shared/services/toast.service';
@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.page.html',
  styleUrls: ['./register-customer.page.scss'],
})
export class RegisterCustomerPage{

   password:string='';
  repassword:string ='';
  firstname:string='';
  lastname:string='';
  // promptpay:string='';
  mobile_number:string='';
  // store_name :string='';
  email:string='';

  constructor(
   private router: Router,
   public registerService: RegisterCustomerService, 
    private toastService: ToastService,
  	) { }




  Register_customer(){
    this.registerService.registercustomer(this.password,this.firstname,this.lastname,this.mobile_number,this.email).subscribe(trn => {
          console.log(trn);
          this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
          this.router.navigateByUrl('/login');

    });
  }



}
