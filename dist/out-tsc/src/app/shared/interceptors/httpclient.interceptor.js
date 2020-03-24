import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpResponse, } from '@angular/common/http';
import { map } from 'rxjs/operators';
let HttpClientInterceptor = class HttpClientInterceptor {
    constructor(storage) {
        this.storage = storage;
        this.access_token = '';
        localStorage.getItem('access_token');
        console.log(localStorage.getItem('access_token'));
    }
    intercept(request, next) {
        // const token: string = 'Bearer YkVNRDBITDc2TTBFMDFzZldiT2xMa09DQ1BYYUQxMjFjZzVWR3poZ3JWTlVyR2lkNERqbnR6blRXdFFHaVp5SlR6blFVdFZjaTRqTDQ1UnhyMHRjeEs1VnVrdzM3cDFLSUw1bWZtd1J0d1ZPODV5V0hlb3FvZWQxSWJSaGowZEg=';
        const token = 'Bearer ' + localStorage.getItem('access_token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': token
                }
            });
        }
        return next.handle(request).pipe(map((event) => {
            if (event instanceof HttpResponse) {
            }
            return event;
        }));
    }
};
HttpClientInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Storage])
], HttpClientInterceptor);
export { HttpClientInterceptor };
//# sourceMappingURL=httpclient.interceptor.js.map