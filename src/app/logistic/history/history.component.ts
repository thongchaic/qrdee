import { Component } from '@angular/core';
import { LogisticService } from '../shared/logistic.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {

  delivery:any;
    // delivery_pic = '';
    url = environment.url;
  constructor( 
    private http: HttpClient,
    private logistic:LogisticService,
    private _translate: TranslateService
    ) {
    console.log('history');
  }

ionViewWillEnter() {
	this.loadProfile();
	 // this.historyservice.getHistory().subscribe(console.log)
	
}

loadProfile() {

   this.logistic.getProfile().subscribe(res => {
        this.delivery = res.data;
        console.log( this.delivery = res.data);
        });


}
 


}
