import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  loading:any;

  constructor(public loadingCtrl: LoadingController) { }

  async showLoading(message="รอสักครู่"){


    this.loading = await this.loadingCtrl.create({
      message: message
    });
    await this.loading.present();

  }

  dismissLoading(){
    this.loading.dismiss();
  }
}
