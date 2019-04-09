import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { QRCodeModule } from 'angularx-qrcode';

import { HttpClientInterceptor } from './interceptors/httpclient.interceptor';
import { ToastService } from './services/toast.service';
import { TransactionService } from './services/transaction.service';
import { AlertService } from './services/alert.service';
import { QrService } from './services/qr.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // QRCodeModule,
    HttpClientModule
  ],
  providers: [
    ToastService,
    TransactionService,
    AlertService,
    QrService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }
  ]
})
export class SharedModule { }
