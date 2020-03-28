import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

 baseUrl = `${ environment.api_url }/stats`;


constructor(
    private http: HttpClient,
) { }



get(id) {
    return this.http.get<any>(`https://qrdee.co/api/v2/stats/${id}`);
  }
getStats(id) {
    return this.http.get<any>(`https://qrdee.co/api/v2/sell_stats/${id}`);
  }
}
