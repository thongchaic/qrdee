import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import { ProfileService } from './shared/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastService } from '../shared/services/toast.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoadingController, Events } from '@ionic/angular';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   ILatLng,
//   Marker
// } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

declare var google;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit{

  // latitude = 14.8718084;
  // longitude = 103.4962797;

  form: FormGroup;
  store:any;
  store_types:any;
  store_pic = '';
  // map: GoogleMap;
  // marker: Marker;
  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;


  constructor(
  	private profileservice: ProfileService,
    private geolocation: Geolocation,
    private toastService:ToastService,
    private route: ActivatedRoute,
    private camera: Camera,
    private _formBuilder: FormBuilder,
    private event : Events,
    private platform: Platform,
    private _loading: LoadingController,
    private _translate: TranslateService
  ){


    //alert(JSON.stringify(this.store));
  }

  async ngOnInit() {


    this.store = JSON.parse(localStorage.getItem('store'));
    console.log(this.store);
    this.store_pic = this.store.store_pic;

    if(this.store_pic){
      this.store_pic = 'https://qrdee.co/app/'+this.store_pic;
    }

    // localStorage.setItem("store_lat",this.store.latitude);
    // localStorage.setItem("store_lng",this.store.longitude);
    //
    //await this.platform.ready();
    this.buildForm();
    await this.loadStoreTypes();


    // this.latitude.patchValue( this.store.latitude );
    // this.longitude.patchValue( this.store.longitude );

  }
  async ionViewDidEnter() {
    await this.loadStoreTypes();
    this.loadMap();
  }


  // ionViewWillEnter() {
	   //this.loadProfile();
    //  this.loadStoreTypes();
  // }


  ngAfterViewInit(): void {
    // this.geolocation.getCurrentPosition().then((resp) => {
    //     this.store.latitude = resp.coords.latitude;
    //     this.store.longitude = resp.coords.longitude;
    //     this.loadMap();
    // });


  }

  async submit(){

    this.latitude.patchValue( localStorage.getItem('store_lat') );
    this.longitude.patchValue( localStorage.getItem('store_lng') );

    //console.log(this.form.value);


    const loading = await this._loading.create();
    await loading.present();

    await this.profileservice.updateProfile(this.form.value, this.store.id)
      .subscribe((data: any) => {

        console.log("Profile Resp0nse===>");

        console.log(data);
        //
        // localStorage.setItem('store', JSON.stringify({
        //   id: data.id,
        //   store_name: data.store_name,
        //   promptpay: data.promptpay,
        //   access_token: data.access_token,
        //   mobile_number: data.mobile_number,
        //   delivery_price: data.delivery_price,
        //   firstname: data.firstname,
        //   lastname: data.lastname,
        //   store_type_id: data.store_type_id,
        //   latitude: data.latitude,
        //   longitude: data.longitude,
        //   store_pic: data.store_pic
        // }));


        this.event.publish('store:changed',data);

        loading.dismiss();
        this.toastService.showToast(`ปรับปรุงข้อมูลเรียบร้อยแล้ว`, 'top');
      }, (err) => {
        console.log(err);
        this.toastService.showToast(JSON.stringify(err), 'top');
        loading.dismiss()
      })
    // this.store.latitude = localStorage.getItem('store_lat');
    // this.store.longitude = localStorage.getItem('store_lng');
    // localStorage.setItem('store', JSON.stringify(this.store));

    // console.log(this.store);

    // this.profileservice.updateProfile(this.store,this.store.id).subscribe((data:any)=>{
    //   console.log(data);

    //   const member = {
    //     mobile_number:this.store.mobile_number,
    //     latitude:this.store.latitude,
    //     longitude:this.store.longitude,
    //     firstname:this.store.firstname,
    //     lastname:this.store.lastname
    //   }
    //   localStorage.setItem('member', JSON.stringify(member));
    //   console.log(member);
    //   localStorage.removeItem('store_lat');
    //   localStorage.removeItem('store_lng');
    //   this.toastService.showToast(`ปรับปรุงข้อมูลเรียบร้อยแล้ว`, 'top');
    // });
  }

  loadStoreTypes(){
    this.profileservice.getStoreTypes().subscribe((data:any)=>{
      this.store_types = data;
      console.log(this.store_types);
    })
  }

  loadMap() {



   //    this.map = GoogleMaps.create('map_canvas2', {
   //     camera: {
   //        target: {
   //          lat: this.store.latitude,
   //          lng: this.store.longitude
   //        },
   //        zoom: 12
   //      },
   //     gestures: {
   //        scroll: true,
   //        tilt: true,
   //        rotate: true,
   //        zoom: true
   //    }
   //   });
   //
   //
   //
   //
   // this.marker = this.map.addMarkerSync({
   //   position: {
   //     lat: this.store.latitude,
   //     lng: this.store.longitude
   //   }
   // });
   // console.log(this.marker);
   //
   // this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe((params: any[]) => {
   //    const cameraPosition: any = params[0];
   //    this.store.latitude = cameraPosition.target.lat;
   //    this.store.longitude = cameraPosition.target.lng;
   //
   //    //this.marker.position = cameraPosition.target;
   //    this.latitude.patchValue( this.store.latitude );
   //    this.longitude.patchValue( this.store.longitude );
   //
   //    console.log(this.store.latitude+" / "+this.store.longitude);
   //    this.marker.setPosition(cameraPosition.target);
   //  });


   localStorage.setItem("store_lat", this.latitude.value );
   localStorage.setItem("store_lng", this.longitude.value);

    let latLng = new google.maps.LatLng(this.latitude.value, this.longitude.value);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    let marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    marker.addListener('dragend', function() {

      //this.form.get('latitude').patchValue( marker.getPosition().lat() );
      // this.longitude.patchValue(marker.getPosition().lng());

      localStorage.setItem("store_lat",marker.getPosition().lat());
      localStorage.setItem("store_lng",marker.getPosition().lng());

      this.map.setCenter(marker.getPosition());
    });

  }

  selectPictures() {
    this.camera.getPicture({
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((image) => {

      console.log("store_pic selected..... =>");
      this.store_pic = 'data:image/jpeg;base64,' + image;
      this.form.get('store_pic').patchValue(this.store_pic);
      // console.log(base64Image);
      // this.preview = base64Image;
      // this.form.get('photo').patchValue(base64Image);
    }, (err) => {
      console.log(err);
    })
  }

  getPicture() {
     this.camera.getPicture({
       quality: 50,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE
     }).then((image) => {
       this.store_pic = 'data:image/jpeg;base64,' + image;
       this.form.get('store_pic').patchValue(this.store_pic);
       // console.log(base64Image);
       // this.preview = base64Image;
       // this.form.get('photo').patchValue(base64Image);
     }, (err) => {
       console.log(err);
     })
   }


  buildForm() {
    if(!this.store.free_delivery_price){
      this.store.free_delivery_price = 300;
    }
    this.form = this._formBuilder.group({
      store_name: this.store.store_name,
      store_name_en: this.store.store_name,
      promptpay: this.store.promptpay,
      mobile_number: this.store.mobile_number,
      delivery_price: this.store.delivery_price,
      free_delivery_price: this.store.free_delivery_price,
      firstname: this.store.firstname,
      lastname: this.store.lastname,
      firstname_en: this.store.firstname,
      lastname_en: this.store.lastname,
      store_type_id: this.store.store_type_id,
      latitude: this.store.latitude,
      longitude: this.store.longitude,
      store_pic: null
    });
  }

  get latitude() { return this.form.get('latitude') as FormControl }
  get longitude() { return this.form.get('longitude') as FormControl }

}
