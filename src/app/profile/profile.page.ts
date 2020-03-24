import { Component } from '@angular/core';
import { ProfileService } from './shared/profile.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  store:any;
  url = environment.url;
  constructor(
  	private profileservice: ProfileService,
    private route: ActivatedRoute,
     private http: HttpClient,
  	){}

  ionViewWillEnter() {
	this.loadProfile();
  }

   loadProfile() {
    // this.http.get<any>(`http://qrdee.co/api/v1/store`).subscribe(console.log);
    this.profileservice.getProfiles().subscribe(res => {
        this.store = res.data;
        console.log(this.store);
        });

   }

}
 

