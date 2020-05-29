import { Component, OnInit } from '@angular/core';
import { RiderService } from './rider.service';
import {  LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RoutesComponent } from './routes/routes.component';
import { AlertService } from '../shared/services/alert.service';
import { ToastService } from '../shared/services/toast.service';
@Component({
  selector: 'app-riders',
  templateUrl: './riders.page.html',
  styleUrls: ['./riders.page.scss'],
})
export class RidersPage implements OnInit {


  orders:any[] = [];

  constructor(
    private rider: RiderService, 
    private _loading: LoadingController,
    private _modal: ModalController,
    private _alert: AlertService,
    private _toast: ToastService
  ) { }

  ngOnInit() {
   
  }
  ionViewDidEnter() {
    this.loadRiderOrders();
  }
  async loadRiderOrders(){

    const loading = await this._loading.create();
    await loading.present();


    this.rider.loadRideOrders().subscribe((data:any)=>{
      loading.dismiss();

      console.log(data);
      this.orders = data;
    }, err=>{
      loading.dismiss();

      console.log(err);
    });
  }

  acceptOrder(order){
    console.log("accept...");

    this._alert.showAlert({
      header: `ยืนยันรับส่งสินค้า`,
      sub_header: 'ถ้ายืนยันจะไม่สามารถยกเลิกหน้าที่ส่งสินค้าได้',
      message: '',
      buttons: [
        {
          text: 'ยกเลิก',
           handler: () => {
              this._toast.showToast('ยกเลิกการส่ง','top');
              this.loadRiderOrders();
            },
          role: 'cancel',
        },
        {
          text: 'ตกลง',
  
          handler: () => {
              this.rider.acceptToRide(order.items, 1).subscribe((data:any)=>{
                console.log(data);
                if(data.code<0){
                  alert("รายการส่งสินค้านี้ถูกจองไปแล้ว")
                  this.loadRiderOrders();
                }else{
                  this.dispRouth(order, 1);
                }
              }, err=>{
                console.log(err);
              });
            }
          }
        ]
      });



    






  }
  viewOrder(order){
    console.log("view...");
    this.dispRouth(order, 0);

  }

  async dispRouth(order, type){

    const modal = await this._modal.create({
      component: RoutesComponent,
      componentProps: {
        'order': order,
        'type': type
      }
    });
    modal.onDidDismiss()
      .then(status => {
        this.loadRiderOrders();
      });
    return await modal.present();

  }


}
