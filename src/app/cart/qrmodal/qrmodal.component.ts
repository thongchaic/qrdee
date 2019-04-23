import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-qrmodal',
  templateUrl: './qrmodal.component.html',
  styleUrls: ['./qrmodal.component.scss'],
})
export class QrmodalComponent {
  @Input() transaction;
  @Input() qr;

  // url = environment.url;

  constructor(
    private transactionService: TransactionService,
    private modalController: ModalController,
    private router: Router
  ) {
 
   }

  ionViewWillEnter() {

  }

  verifyTransaction() {
    this.transactionService.verifyTransaction(this.transaction).subscribe(res => {
      this.closeModal(1);
    });
  }

  async closeModal(status) {
    await this.modalController.dismiss(status);
  }

}
