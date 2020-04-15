import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule /* other http imports */ } from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IonicMqttModule, MQTTService } from 'ionic-mqtt';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';

//ionic cordova run ios -lc -d --target="0D1FA3B0-AB5E-4F76-AB49-1E2D63774E7B"

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule,
   IonicModule.forRoot(),
   AppRoutingModule,
   HttpClientModule,
   IonicStorageModule.forRoot(),
   ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    File,
    Camera,
    MQTTService,
    LocalNotifications,
    BackgroundMode,
    Badge,
    // Push,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
