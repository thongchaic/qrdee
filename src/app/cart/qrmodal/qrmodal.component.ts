import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-qrmodal',
  templateUrl: './qrmodal.component.html',
  styleUrls: ['./qrmodal.component.scss'],
})
export class QrmodalComponent {
  @Input() transaction;
  // @Input() testQR;

  // qrcode: any;

  constructor(
    private modalController: ModalController
  ) { }

  ionViewWillEnter() {
    console.log(this.transaction);
    // this.qrcode = this.transaction.promptpay;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
