import { Component, OnInit } from '@angular/core';
import { RiderService } from './rider.service';
import {  LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RoutesComponent } from './routes/routes.component';
import { AlertService } from '../shared/services/alert.service';
import { ToastService } from '../shared/services/toast.service';
import { MQTTService } from 'ionic-mqtt';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.page.html',
  styleUrls: ['./riders.page.scss'],
})
export class RidersPage implements OnInit {


  orders:any[] = [];
  _mqttClient:any;
  isView = false;
  constructor(
    private rider: RiderService, 
    private _loading: LoadingController,
    private _modal: ModalController,
    private _alert: AlertService,
    private _toast: ToastService,
    private mqttService: MQTTService
  ) { }

  ngOnInit() {
   //'/qrdee/riders/broadcast'
   
  }
  ionViewDidEnter() {
    this.mqttConnect();
    this.loadRiderOrders();
  }

  mqttConnect(){
    if(this._mqttClient==null){
      let TOPIC: string[] = [];
      let MQTT_CONFIG: {
        host: string,
        port: number,
        username: string,
        password: string,
        protocol: string,
        path: string,
        clientId: string
      } = {
        host: "qrdee.co",
        port: 9001,
        username:"miot",
        password:"SrruMIoT@2019",
        protocol: "ws",
        path: "/ws",
        clientId: uuidv4()
      };
 
      TOPIC = ["/qrdee/riders/broadcast"];
      console.log("Connecting to mqtt....",TOPIC);
      console.log(MQTT_CONFIG);
      try{
        this._mqttClient = this.mqttService.loadingMqtt( (lost)=>{
          this._onConnectionLost(lost);
        }, (arrived)=>{
          this._onMessageArrived(arrived);
        }, TOPIC, MQTT_CONFIG);
 
      }catch(ee){
        console.log("MQTT connect errr....");
        this._mqttClient = null;
      }

    }
  }
  _onMessageArrived(message) {
    console.log(message);
    if(!this.isView){
      this.loadRiderOrders();
    }
  }
  _onConnectionLost(resp) {
    this._mqttClient==null
  }

  async loadRiderOrders(){
    this.mqttConnect();
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
    this.isView = true;
    const modal = await this._modal.create({
      component: RoutesComponent,
      componentProps: {
        'order': order,
        'type': type
      }
    });
    modal.onDidDismiss()
      .then(status => {
        this.isView = false;
        this.loadRiderOrders();
      });
    return await modal.present();

  }

}
