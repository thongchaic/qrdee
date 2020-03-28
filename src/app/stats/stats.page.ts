import { Component,ViewChild } from '@angular/core';
import { StatsService } from './shared/stats.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Chart } from 'chart.js';


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


// monthly:number = 0;
stat_data:any = [];
daily:any = [];
hourly:any = [];
monthly:any = [];
dailys:any = [];
hourlys:any = [];
monthlys:any = [];
year:any = [];

hourlyData:any = [];
dailyData:any = [];
monthlyData:any = [];


hourlyLabel:any = [];
dailyLabel:any = [];
monthlyLabel:any = [];

 constructor( 
  	private http: HttpClient,
    private Ststs:StatsService
  	) {
    
  }

   ionViewDidEnter() {
    this.createBarChartD();
    this.createBarChartM();
     this.createBarChartY();

  }


  ionViewWillEnter(){
      this.Ststs.getStats(JSON.parse(localStorage.getItem('store')).id).subscribe(res => {
        console.log(res);
        this.stat_data = res.data;
        this.daily = res.data.daily.total;
        this.hourly = res.data.hourly.total;
        this.monthly = res.data.monthly.total;
        this.year = res.data.year;
        this.dailys = res.data.daily;
        this.hourlys = res.data.hourly;
        this.monthlys = res.data.monthly;
        // console.log('รายได้วันนี้ hourly',this.hourlys);
        // console.log('รายได้เดือนนี้ daily' , this.dailys);
        // console.log('รายได้ปีนี้ monthly' , this.monthlys);
        // console.log('ปี year' , this.year);
      }); 
  }

  createBarChartD() {
    this.Ststs.getStats(JSON.parse(localStorage.getItem('store')).id).subscribe(res => {
        this.hourlyData = res.data.hourly.data;
        this.hourlyLabel = res.data.hourly.label;
        console.log('data รายได้วันนี้ hourly',this.hourlyData);
        console.log('Label hourly',this.hourlyLabel);
 this.myLineChartD = new Chart(this.barChartD.nativeElement, {
    type: 'line',
    data: {
        labels: this.hourlyLabel,
        datasets: [{
          label: 'รายได้',
          data: this.hourlyData,
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
  });
}


createBarChartM() {
 this.Ststs.getStats(JSON.parse(localStorage.getItem('store')).id).subscribe(res => {
        this.dailyData = res.data.daily.data;
        this.dailyLabel = res.data.daily.label;
        console.log('data รายได้เดือนนี้ daily',this.dailyData);
        console.log('Label daily',this.dailyLabel);
 this.myLineChartM = new Chart(this.barChartM.nativeElement, {
    type: 'line',
    data: {
        labels: this.dailyLabel,
        datasets: [{
          label:  'รายได้',
          data: this.dailyData,
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
  });
}


createBarChartY() {
 this.Ststs.getStats(JSON.parse(localStorage.getItem('store')).id).subscribe(res => {
        this.monthlyData = res.data.monthly.data;
        this.monthlyLabel = res.data.monthly.label;
        console.log('data รายได้ปีนี้ monthly',this.monthlyData);
        console.log('Label monthly',this.monthlyLabel);

 this.myLineChartY = new Chart(this.barChartY.nativeElement, {
    type: 'line',
    data: {
        labels:  this.monthlyLabel ,
        datasets: [{
          label: 'รายได้',
          data: this.monthlyData ,
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
 });
}


}
