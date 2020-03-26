import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LogoutService } from './shared/logout.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute,NavigationExtras  } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { ToastService } from '../shared/services/toast.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage{

  constructor(
  	public toastController: ToastController,
    private http: HttpClient,
    private logoutservice: LogoutService,
    private router: Router,
    private storage: Storage,
    private toastService: ToastService,
  	) {

  	 }

  	 save(){
        localStorage.removeItem('access_token');
        localStorage.removeItem('usertype');
        this.toastService.showToast('คุณได้ออกจากระบบแล้ว', 'top');
        this.router.navigateByUrl('/login');
  	 }

}
