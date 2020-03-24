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
