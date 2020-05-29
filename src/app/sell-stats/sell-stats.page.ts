import { Component, OnInit,ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SellStatsService } from './shared/sell-stats.service';
import { ToastService } from '../shared/services/toast.service';
import { Router,NavigationExtras  } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sell-stats',
  templateUrl: './sell-stats.page.html',
  styleUrls: ['./sell-stats.page.scss'],
})
export class SellStatsPage implements OnInit {

 sellstatss:any;

  page = 1;

  constructor(
    private sellstats: SellStatsService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private toastService: ToastService,
    private router: Router,
    private _translate: TranslateService
  	) {
  
     }

  ngOnInit() {
  }


  ionViewWillEnter() {
  this.loadsell();
 
} 

loadsell() {
   this.sellstats.orders().subscribe((data:any) => {
      this.sellstatss = data.products;
      // this.page = 1;
     console.log(data);
      console.log(this.sellstatss);
   });

}
 loadData(infiniteScroll: IonInfiniteScroll) {
    this.sellstats.orders().subscribe((data:any) => {
      this.sellstatss = data.products;

  this.page++;
    // this.sellstats.orders(this.page).subscribe(res => {
      if(Object.keys(data).length === 0 && data.constructor === Object) {
        infiniteScroll.disabled = true;
      }
      setTimeout(() => {
        this.sellstatss = this.sellstatss.concat(data.products);    
        infiniteScroll.complete();

        if(this.page >= data['last_page']) {
          infiniteScroll.disabled = true;
        }
      }, 500);
    });
 // });
}
}
