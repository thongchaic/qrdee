import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { RegisterLogisticService } from './shared/register-logistic.service';
import { Router  } from '@angular/router';
import { ToastService } from '../shared/services/toast.service';
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
  // store_name :string='';
  email:string='';

  constructor(
   private router: Router,
   public registerService: RegisterLogisticService, 
    private toastService: ToastService,
  	) { }

  

	RegisterLlogistic(){
        this.registerService.registerlogistic(this.password,this.firstname,this.lastname,this.mobile_number,this.email,this.car_number).subscribe(trn => {
          console.log(trn);
           this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
          this.router.navigateByUrl('/login');
        });
	}
}
