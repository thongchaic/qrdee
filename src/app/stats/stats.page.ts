import { Component,ViewChild } from '@angular/core';
import { StatsService } from './shared/stats.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Chart } from 'chart.js';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage {

  @ViewChild('barChartD',{static:false}) barChartD;
  @ViewChild('barChartM',{static:false}) barChartM;
  @ViewChild('barChartY',{static:false}) barChartY;

  bars: any;
  colorArray: any;
  barPercentage:any;
  myLineChartD:any;
  myLineChartM:any;
  myLineChartY:any;
  res:any;
  stat_data:any;


 constructor(
  	private http: HttpClient,
    private _stats:StatsService,
    private _loading: LoadingController
  	) {

  }

  ionViewDidEnter() {
      //this.createBarChartD();
      // this.createBarChartM();
      // this.createBarChartY();
      this.loadChartData();
  }

  ionViewWillEnter(){

      // this._stats.getStats(JSON.parse(localStorage.getItem('store')).id).subscribe(res => {
      //   console.log(res);
      //   this.stat_data = res.data;
      //   this.daily = res.data.daily.total;
      //   this.hourly = res.data.hourly.total;
      //   this.monthly = res.data.monthly.total;
      //   this.year = res.data.year;
      //   this.dailys = res.data.daily;
      //   this.hourlys = res.data.hourly;
      //   this.monthlys = res.data.monthly;
      //   //this.createBarChartD();
      //
      // });
  }


  async loadChartData(){

    const _loading = await this._loading.create();
    await _loading.present();

    this._stats.getStats(JSON.parse(localStorage.getItem('store')).id).subscribe((res:any) => {

      console.log(res);
      this.stat_data = res.data;
      this.createBarChartD(res.data.hourly.data, res.data.hourly.label);
      this.createBarChartM(res.data.daily.data, res.data.daily.label);
      this.createBarChartY(res.data.monthly.data, res.data.monthly.label);
      _loading.dismiss();
    }, err=>{
      _loading.dismiss();
    });

  }

  createBarChartD(data, label) {

    this.myLineChartD = new Chart(this.barChartD.nativeElement, {
      type: 'line',
      data: {
          labels: label,
          datasets: [{
            label: 'รายได้/วัน',
            data: data,
            backgroundColor: 'rgb(255,184,184)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(255,138,138)',// array should have same number of elements as number of dataset
            borderWidth: 2
          }]
        },
      options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  }


  createBarChartM(data, label) {
    this.myLineChartM = new Chart(this.barChartM.nativeElement, {
      type: 'line',
      data: {
          labels: label,
          datasets: [{
            label:  'รายได้/เดือน',
            data: data,
            backgroundColor: 'rgb(255,184,184)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(255,138,138)',// array should have same number of elements as number of dataset
            borderWidth: 1
          }]
        },
      options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  }

  createBarChartY(data, label) {

    this.myLineChartY = new Chart(this.barChartY.nativeElement, {
      type: 'line',
      data: {
          labels:  label ,
          datasets: [{
            label: 'รายได้/ปี',
            data: data ,
            backgroundColor: 'rgb(255,184,184)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(255,138,138)',// array should have same number of elements as number of dataset
            borderWidth: 1
          }]
        },
      options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  }

}
