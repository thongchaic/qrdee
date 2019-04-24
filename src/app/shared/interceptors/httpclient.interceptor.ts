import { Injectable } from '@angular/core';
import { 
  HttpInterceptor, 
  HttpRequest, 
  HttpResponse, 
  HttpHandler, 
  HttpEvent, 
  HttpErrorResponse 
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = 'Bearer djk0eXRPMDF5MVl2NWlHSXdRUEF5OGJTMFpvUXdUR1c1Vnl5UWtoQVRTWUx4eDBLaE9LQTQzRWVtbjI4cUVvQzFGTEt6YkFvMGV1NDRDbGY0WENCRzdqQ3J2a0NtblJsOVVITjZmSG5Tb1VqS2NCQ2JPb2ltRmd6TXFucHFlNmk=';

    if(token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token
        }
      });
    }
    
    // if(!request.headers.has('Content-Type')) {
    //   request = request.clone({
    //     setHeaders: {
    //       'Content-type': 'application/json'
    //     }
    //   });
    // }

    // request = request.clone({
    //   headers: request.headers.set('Accept', 'application/json')
    // });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {

        // if(event instanceof HttpResponse) {
        //   console.log('event-->>>', event);
        // }

        return event;
      }),
      // catchError((error: HttpErrorResponse) => {
      //   if(error.status === 401) {
          
      //   }
      // });
    );
  }
}
