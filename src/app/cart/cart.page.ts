import { Component } from '@angular/core';
import { CartService } from './shared/cart.service';
import { TransactionService } from '../shared/services/transaction.service';
import { ToastService } from '../shared/services/toast.service';
import { AlertService } from '../shared/services/alert.service';
import { ModalController } from '@ionic/angular';
import { QrmodalComponent } from './qrmodal/qrmodal.component';
import { QrService } from '../shared/services/qr.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  cart: any;
  price: number = 0;

  constructor(
    private cartService: CartService,
    private transactionService: TransactionService,
    private toastService: ToastService,
    private alertService: AlertService,
    private qrService: QrService,
    private modalController: ModalController
  ) { }

  ionViewWillEnter() {
    this.getCart();
  }

  newTransaction() {
    this.alertService.showAlert({
      header: 'คุณต้องการชำระเงินด้วย QR Code ใช่หรือไม่',
      sub_header: '',
      message: '',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel'
        },
        {
          text: 'ตกลง',
          handler: () => {
            // this.qrService.generateQRCode().then(function(success) {
            // this.QRModal();
            // })
            this.transactionService.newTransaction(this.cart, this.price).subscribe(trn => {
              this.qrService.generatePromptPayQR(trn.data).subscribe(qr => {
                this.QRModal(qr);
              });              
            });
          }
        }        
      ]
    });
    
  }

  getCart() {
    this.cartService.getCart().subscribe(data => this.cart = data);
    this.price = this.cartService.getPrice();
  }

  removeFromCart(product) {
    this.cartService.removeProduct(product);
    this.toastService.showToast(`ลบ ${product.product_th}`, 'bottom')
    this.getCart();
  }

  async QRModal(response) {
    const modal = await this.modalController.create({
      component: QrmodalComponent,
      componentProps: {
        'transaction': response.data
      }
    });

    return await modal.present();
  }

}
