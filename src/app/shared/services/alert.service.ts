import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController
  ) { }

  async showAlert(options) {
    const alert = await this.alertController.create({
      header: options.header,
      subHeader: options.sub_header,
      message: options.message,
      buttons: options.buttons
    });

    await alert.present();
  }
}
