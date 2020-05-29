import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  async showToast(message: string, position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: message,
      position: position,
      duration: 1000,
      color: 'dark'
    });

    toast.present();
  }
  async showLongToast(message: string, position: 'top' | 'bottom' | 'middle') {

    const toast = await this.toastController.create({
      header: 'ไม่มีผู้ตอบรับส่งสินค้า',
      message: message,
      color: 'dark',
      position: 'top',
      buttons: [
         {
          text: 'ปิด',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
    // const toast = await this.toastController.create({
    //   message: message,
    //   position: position,
    //   duration: 30000,
    //   color: 'dark'
    // });

    // toast.present();
  }


  async showToasts(message: string, position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: message,
      position: position,
      duration: 1000,
      color: '#FFFFFF'
    });

    toast.present();
  }



  // hideToast() {

  // }
}
