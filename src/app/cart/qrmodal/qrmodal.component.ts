import { Component, Input,ViewChild,ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionService } from 'src/app/shared/services/transaction.service';
// import { Router } from '@angular/router';
// import { AlertService } from '../../shared/services/alert.service';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { ActivatedRoute,NavigationExtras  } from '@angular/router';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { ToastService } from '../../shared/services/toast.service';
// import { LoadingController, NavController } from '@ionic/angular';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { CartService } from '../shared/cart.service';
declare var google;

@Component({
  selector: 'app-qrmodal',
  templateUrl: './qrmodal.component.html',
  styleUrls: ['./qrmodal.component.scss'],
})
export class QrmodalComponent{

  @Input() prompt_payload;
  @Input() promptpay;
  @Input() price;

  constructor(
    private transactionService: TransactionService,
    private modalController: ModalController,
    // private route: ActivatedRoute,
    // private builder: FormBuilder,
    // private toastService: ToastService,
    // private loadingController: LoadingController,
    // private navCtrl: NavController,
    // private http: HttpClient,
    // private cartService: CartService,
  ) {
    //this.store = JSON.parse(localStorage.getItem('store'));
   }

  ionViewWillEnter() {

  }


  ngAfterViewInit(): void {

  }


 forceDissmiss(status){
   this.closeModal(status);
 }
  async closeModal(status) {
    await this.modalController.dismiss(status);
  }
}
