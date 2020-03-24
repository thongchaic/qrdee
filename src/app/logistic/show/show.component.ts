import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LogisticService } from '../shared/logistic.service';
import { AlertController } from '@ionic/angular';
import { ToastService } from '../../shared/services/toast.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent{

   delivery_show:any;
   firstname:any;
   lastname:any;
   deliveryshows= []; 
   updated_at:string;
  constructor(
 	  private http: HttpClient,
    private logistic:LogisticService,
    private alertController: AlertController,
    private toastService: ToastService,
  	) { }

 ionViewWillEnter() {
  this.loadLogistic();
 
}

loadLogistic() {
  
    this.logistic.getDeliveryShow().subscribe(res => {
          this.deliveryshows = res.products;
              console.log(res); 
            
            });
    
 }

// ionViewWillEnter(){
// 	 this.logistic.getDeliveryShow().subscribe(res => {
// 	 	     this.deliveryshows = res.products;
//                 // this.firstname = res.products[0].firstname;
//                 // this.lastname = res.products[0].lastname;
//                 // this.updated_at = res.products[0].updated_at;

//               console.log(res); 
            
//             });
//   }


  deleteLogistic(id){
    this.presentAlertConfirmDelete(id);
 }

  async presentAlertConfirmDelete(id) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'คุณต้องการลบประวัติการส่งสินค้าหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'ตกลง',
          handler: () => {
            this.logistic.deleteLogistic(id).subscribe(() => {
              this.toastService.showToast(`ลบประวัติการส่งสินค้าเรียบร้อยแล้ว`, 'top');
               this.loadLogistic();
            })
          }
        }
      ]
    });

    await alert.present();
  }

}
