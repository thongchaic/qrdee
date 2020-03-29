import { Component ,Inject} from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';
import { AlertService } from '../../shared/services/alert.service';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {


store_pic:any = null;

profileForm: FormGroup = this.builder.group({
    username: ['', Validators.required],
    promptpay: ['', Validators.required],
    mobile_number: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    store_name: ['', Validators.required],
    store_type_id: ['', Validators.required],
    store_pic: null
});

formType = 'EDIT';
title = '';
store_types : any;



constructor(
    private profileService:ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private builder: FormBuilder,
    private toastService: ToastService,
    private alertService: AlertService,
    @Inject(Camera)  private camera: Camera,
    @Inject(File)  private file: File,
    @Inject(WebView)  private webView: WebView

) {  }

ionViewWillEnter() {

      this.profileService.getStoreTypes().subscribe((data:any) => this.store_types = data.data);

      // if(this.route.snapshot.data.formType === 'EDIT') {
      //
      //   this.title = 'แก้ไขข้อมูล';
      //   this.formType = 'EDIT';
      //   this.profileService.getProfile().subscribe(data => {
      //     console.log(data);
      //   this.profileForm.setValue({
      //       username: data.data.username,
      //       promptpay: data.data.promptpay,
      //       mobile_number: data.data.mobile_number,
      //       firstname: data.data.firstname,
      //       lastname: data.data.lastname,
      //       store_name: data.data.store_name,
      //       store_type_id: data.data.store_type_id,
      //       store_pic: null
      //   });
      //
      //   if(data.data.store_pic){
      //     this.store_pic = 'https://qrdee.co/app/'+data.data.store_pic;
      //   }
      //
      //   });
      // }

 }


 selectPictures() {
    this.camera.getPicture({
      quality: 40,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      console.log("Image Selected => ");
      this.store_pic = 'data:image/jpeg;base64,' + imageData;
      this.profileForm.get('store_pic').patchValue(this.store_pic);
    }, (err) => {
      console.log("Image Error=>");
      console.log(err);
    })
  }

  getPicture() {
     this.camera.getPicture({
       quality: 40,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE
     }).then((imageData) => {
       this.store_pic = 'data:image/jpeg;base64,' + imageData;
       this.profileForm.get('store_pic').patchValue(this.store_pic);
     }, (err) => {
       console.log(err);
     })
   }

  // private loadPhoto(imageFileUri: any) {
  //   this.file.resolveLocalFilesystemUrl(imageFileUri).then(entry => {
  //     entry['file'](file => {
  //       this.readFile(file);
  //     })
  //   })
  // }
  //
  // private readFile(file: any) {
  //   const reader = new FileReader();
  //
  //   reader.onloadend = () => {
  //     const imgBlob = new Blob([reader.result], { type: file.type });
  //     this.profileForm.controls['image'].setValue(imgBlob);
  //   }
  //
  //   reader.readAsArrayBuffer(file);
  // }


 submit() {
     console.log(this.profileForm.value)
      this.alertService.showAlert({
      header: 'กำลังปรับปรุงข้อมูล',
      sub_header: '',
      message: '',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel'
        },
        {
          text: 'ตกลง',

          handler: () => {

          }
        }
      ]
    });


    if(this.formType === 'EDIT') {
      this.profileService.updateProfile(this.profileForm.value, this.route.snapshot.params['id']).subscribe(res => {
        this.toastService.showToast('แก้ไขเรียบร้อยแล้ว', 'top');
        this.router.navigateByUrl('/profile');

      }, err => console.log(err));
    }

  }

}
