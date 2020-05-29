import { Component, OnInit,ElementRef,ViewChild, Output, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { TransactionService } from '../../shared/services/transaction.service';
import { RiderService } from '../rider.service';

declare var google;




@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent implements OnInit {


  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;

  @Input('type') type;
  @Input('order') order;

  prompt_payload:any = '';


  constructor(
    private _modal: ModalController,
    private _call: CallNumber,
    private _transaction: TransactionService,
    private _rider: RiderService
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    console.log(this.type);
    console.log(this.order);

    let total_price = this.calPrice();
    if(total_price<this.order.store.free_delivery_price){
      total_price += this.order.store.delivery_price;
    }

    console.log("GenQR=>",this.order.store.promptpay, " : ", total_price);
    this._transaction.genQR(this.order.store.promptpay, total_price).subscribe((data:any)=>{
      console.log(data);
      this.prompt_payload = data.prompt_payload;
    }, err=>{

    });


    this.loadMap();
  }
  calPrice(){
    let total_price = 0;
    this.order.items.forEach(e => {
      total_price += (e.price * e.qty)
    });
    return total_price;
  }
  loadMap() {

    let latLng = new google.maps.LatLng(this.order.store.latitude, this.order.store.longitude);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    let store_marker = new google.maps.Marker({
      map: this.map,
      label:"ร้าน",
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    let rider_marker = new google.maps.Marker({
      map: this.map,
      label:"ผู้รับ",
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(this.order.member.latitude, this.order.member.longitude)
    });

  }
  startCall(mobile_number){

    this._call.callNumber(`${mobile_number}`, true)
    .then(res => {  })
    .catch(err => { alert(JSON.stringify(err)); });


  }

  finishedDelivery(){
    this._rider.acceptToRide(this.order.items,2).subscribe((data:any)=>{
      this.forceDissmiss(0);
    }, err=>{
      alert("บันทึกข้อมูลไม่ได้ โปรดลองอีกครั้ง!");
      //this.forceDissmiss(-1);
    });
  }

  forceDissmiss(status){
    this._modal.dismiss(status);
  }

}
