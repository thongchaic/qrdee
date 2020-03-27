import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse ,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  access_token:string ='';

  constructor(
  private storage: Storage
  ) {
    localStorage.getItem('access_token');
    console.log( localStorage.getItem('access_token'));
  }

  intercept(request: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
     // const token: string = 'Bearer YkVNRDBITDc2TTBFMDFzZldiT2xMa09DQ1BYYUQxMjFjZzVWR3poZ3JWTlVyR2lkNERqbnR6blRXdFFHaVp5SlR6blFVdFZjaTRqTDQ1UnhyMHRjeEs1VnVrdzM3cDFLSUw1bWZtd1J0d1ZPODV5V0hlb3FvZWQxSWJSaGowZEg=';
      const token: string = 'Bearer ' +localStorage.getItem('access_token');

    if(token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token
        }
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse) {
        }
        return event;
      }),
    );
  }
}
