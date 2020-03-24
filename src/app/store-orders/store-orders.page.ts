import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OrderService } from './shared/order.service';
import { ToastService } from '../shared/services/toast.service';
import { Router,NavigationExtras  } from '@angular/router';
import { StoreLogisticService } from '../store-logistic/shared/store-logistic.service';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-store-orders',
  templateUrl: './store-orders.page.html',
  styleUrls: ['./store-orders.page.scss'],
})
export class StoreOrdersPage{

  product_logistics:any;
  orders:any;
  code_randoms:any;
  hideMe: boolean = false;

  constructor(
    private storeorderService: OrderService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private toastService: ToastService,
    private router: Router,
    // private storeLogisticService: StoreLogisticService,
    public modalCtrl: ModalController,
  ) { }

  hide() {
    // this.hideMe = true;
    this.hideMe= !this.hideMe;
  }
 


 ionViewWillEnter() {
  this.loadOrder();
  this.storeLogistic();
 
}


flag = false
cancelPopover(e){
  this.flag = true
}

loadOrder() {
  
   this.storeorderService.order().subscribe(data=>{
     this.orders = data.products;
     console.log('orders',this.orders);
   });

 
    
 }


 storeLogistic() { 
   
     this.storeorderService.getProductLogistic().subscribe((data:any) => {
     this.product_logistics = data.data
     console.log(this.product_logistics);
     }); 
     
 }

 deleteOrder(id){
    this.presentAlertConfirmDelete(id);
 }

  async presentAlertConfirmDelete(id) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'คุณต้องการลบออเดอร์สินค้านี้หรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'ตกลง',
          handler: () => {
            this.storeorderService.deleteOrder(id).subscribe(() => {
              this.toastService.showToast(`ลบออเดอร์สินค้าเรียบร้อยแล้ว`, 'top');
               this.loadOrder();
            })
          }
        }
      ]
    });

    await alert.present();
  }

order_store_product(code_randoms) {
     let navigationExtras: NavigationExtras = {
      queryParams: {
          special: JSON.stringify(code_randoms)
        }
    };
        this.router.navigate(['store-orders/storeorder/code_randoms'], navigationExtras);
    // console.log(code_randoms);
        console.log(navigationExtras);

  }



}
