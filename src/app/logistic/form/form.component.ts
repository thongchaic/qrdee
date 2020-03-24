import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';
import { LogisticService } from '../shared/logistic.service';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent{

 logisticForm  : FormGroup = this.builder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    // age: ['', Validators.required],
    mobile_number: ['', Validators.required],
    // address: ['', Validators.required],
    car_number: ['', Validators.required],
    delivery_type_id: ['', Validators.required],
    delivery_status_id: ['', Validators.required],
    image: null
});

formType = 'EDIT';
title = '';
delivery_types : any;
delivery_status : any;
imageSrc = '';

  constructor(
    private builder: FormBuilder,
    private logisticService:LogisticService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private loadingController: LoadingController,
    private navCtrl: NavController,
     @Inject(Camera) private camera: Camera,
     @Inject(File) private file: File,
     @Inject(WebView) private webView: WebView,
    // private imagePicker: ImagePicker,
    ) { }

 ionViewWillEnter() {
      this.logisticService.getDeliveryType().subscribe((data:any) => this.delivery_types = data.data);
     this.logisticService.getDeliveryStatu().subscribe((data:any) => this.delivery_status = data.data);
     if(this.route.snapshot.data.formType === 'EDIT') {
        this.title = 'แก้ไขข้อมูล';
        this.formType = 'EDIT';
        // console.log(this.route.snapshot.params['id']);
         // console.log(this.profileForm.value);
         // this.http.get<any>(`http://qrdee.co/api/v1/profile`).subscribe(console.log); 
        this.logisticService.getProfile().subscribe(data => {
        this.logisticForm.setValue({
         
          firstname: data.data.firstname,
          lastname:data.data.lastname,
          // age: data.data.age,
          mobile_number:data.data.mobile_number,
          // address: data.data.address,
          car_number:data.data.car_number,
          delivery_type_id:data.data.delivery_type_id,
          delivery_status_id:data.data.delivery_status_id,
          image: null
      });
         this.imageSrc = environment.url + data.data.delivery_pic;
         console.log(this.imageSrc);
      });
    }
 }
 submit() {
     console.log(this.logisticForm.value)
    if(this.formType === 'EDIT') {
      this.logisticService.updateLogistic(this.logisticForm.value, this.route.snapshot.params['id']).subscribe(res => {
        this.toastService.showToast('แก้ไขเรียบร้อยแล้ว', 'top');
        this.router.navigateByUrl('/logistic/history');
      }, err => console.log(err));
    }
    
  }


takePhoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      cameraDirection: this.camera.Direction.FRONT,
      mediaType: this.camera.MediaType.PICTURE
    }).then(
      imageData => {
        this.imageSrc = this.webView.convertFileSrc(imageData);
        this.loadPhoto(imageData);
      },
      err => {
        console.log(err);
      }
    );
  }
  
 selectPhoto() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }).then(
      imageData => {
        this.imageSrc = this.webView.convertFileSrc(imageData);
        this.loadPhoto(imageData);
      },
      err => {
        console.log(err);
      }
    );
  }

  private loadPhoto(imageFileUri: any) {
    this.file.resolveLocalFilesystemUrl(imageFileUri).then(entry => {
      entry['file'](file => {
        this.readFile(file);
      })
    })
  }

  private readFile(file: any) {
    const reader = new FileReader();

    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], { type: file.type });

      this.logisticForm.controls['image'].setValue(imgBlob);
    }

    reader.readAsArrayBuffer(file);
  }

}
