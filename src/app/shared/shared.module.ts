import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientInterceptor } from './interceptors/httpclient.interceptor';
import { ToastService } from './services/toast.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ToastService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }
  ]
})
export class SharedModule { }
