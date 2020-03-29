import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import { ProfileService } from './shared/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastService } from '../shared/services/toast.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit{

  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;
  // latitude = 14.8718084;
  // longitude = 103.4962797;

  form: FormGroup;
  store:any;
  store_types:any;
  store_pic = '';

  constructor(
  	private profileservice: ProfileService,
    private geolocation: Geolocation,
    private toastService:ToastService,
    private route: ActivatedRoute,
    private camera: Camera,
    private _formBuilder: FormBuilder,
    private _loading: LoadingController
  ){


    //alert(JSON.stringify(this.store));
  }

  ngOnInit() {
    this.store = JSON.parse(localStorage.getItem('store'));
    console.log(this.store);
    this.store_pic = this.store.store_pic;

    localStorage.setItem("store_lat",this.store.latitude);
    localStorage.setItem("store_lng",this.store.longitude);


    this.loadStoreTypes();
    this.buildForm();


    this.latitude.patchValue( this.store.latitude );
    this.longitude.patchValue( this.store.longitude );

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
    this.loadMap();

  }

  async submit(){

    this.latitude.patchValue( localStorage.getItem('store_lat') );
    this.longitude.patchValue( localStorage.getItem('store_lng') );

    console.log(this.form.value);


    const loading = await this._loading.create();
    await loading.present();

    await this.profileservice.updateProfile(this.form.value, this.store.id)
      .subscribe((data: any) => {

        console.log(data);

        localStorage.setItem('store', JSON.stringify({
          id: data.id,
          store_name: data.store_name,
          promptpay: data.promptpay,
          access_token: data.access_token,
          mobile_number: data.mobile_number,
          delivery_price: data.delivery_price,
          firstname: data.firstname,
          lastname: data.lastname,
          store_type_id: data.store_type_id,
          latitude: data.latitude,
          longitude: data.longitude,
          store_pic: data.store_pic
        }));

        localStorage.setItem('member', JSON.stringify({
          id: null,
          mobile_number: data.mobile_number,
          latitude: data.latitude,
          longitude: data.longitude,
          firstname: data.firstname,
          lastname: data.lastname
        }));

        loading.dismiss();
        this.toastService.showToast(`ปรับปรุงข้อมูลเรียบร้อยแล้ว`, 'top');
      }, (err) => {
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
    })
  }

  loadMap() {

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
    this.form = this._formBuilder.group({
      store_name: this.store.store_name,
      promptpay: this.store.promptpay,
      mobile_number: this.store.mobile_number,
      delivery_price: this.store.delivery_price,
      firstname: this.store.firstname,
      lastname: this.store.lastname,
      store_type_id: this.store.store_type_id,
      latitude: this.store.latitude,
      longitude: this.store.longitude,
      store_pic: null
    });
  }

  get latitude() { return this.form.get('latitude') as FormControl }
  get longitude() { return this.form.get('longitude') as FormControl }

}
