import { Component,ElementRef,AfterViewInit,ViewChild } from '@angular/core';
import { StoreLogisticService } from './shared/store-logistic.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router,NavigationExtras  } from '@angular/router';


@Component({
  selector: 'app-store-logistic',
  templateUrl: './store-logistic.page.html',
  styleUrls: ['./store-logistic.page.scss'],
})
export class StoreLogisticPage{
    product_logistics :any;
    firstnames:any;
    delivery_statuss:any;
    delivery_types:any;
    mobile_numbers:any;
    
  constructor(
  private route: ActivatedRoute,
	private router: Router,
	private http: HttpClient,
	private storeLogisticService: StoreLogisticService,
  ) { }



 ionViewWillEnter() {
	this.loadData();
  }
  
  loadData() {
 

    this.storeLogisticService.getProductLogistic().subscribe((res:any) => {
      // console.log(res);

      this.product_logistics = res.data;
      // this.delivery_types = res.data[0].delivery_type.delivery_type_th;
      // this.delivery_statuss = res.delivery_status.delivery_status_th;
      // this.mobile_numbers = res.mobile_number;
      // console.log('ชื่อผู้ขนส่ง',this.firstnames);
      // console.log('สถานะขนส่ง',this.delivery_statuss);
      // console.log('ประเภทขนส่ง',this.delivery_types);
      // console.log('เบอร์โทร',this.firstna
      console.log(this.product_logistics);
    
    });
  // this.storeLogisticService.getProductLogistic().subscribe((data:any) => this.product_logistics = data.data); 
  // console.log(this.product_logistics);

} 




}
