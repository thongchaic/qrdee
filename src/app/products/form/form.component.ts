import { Component,Inject ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { ToastService } from '../../shared/services/toast.service';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent{
// getPicture
imageData: string;
@Input() useURI = true;



productForm: FormGroup = this.builder.group({
 code_product: ['', Validators.required],
 product_type_id: ['', Validators.required],
 product_th: ['', Validators.required],
 details_th: ['', Validators.required],
 price: ['', Validators.required],
 cost: ['', Validators.required],
 instock: ['', Validators.required],
 imageData: null
});



formType = 'CREATE' || 'EDIT';
imageSrc = '';
scan = false;
show_code_product = '';
product_category: any;
title = '';
product_types : any;

constructor(
 private route: ActivatedRoute,
 private router: Router,
 private productService: ProductService,
 private barcodeScanner: BarcodeScanner,
 private builder: FormBuilder,
 @Inject(Camera)  private camera: Camera,
 // private imagePicker: ImagePicker,
 @Inject(File)  private file: File,
 @Inject(WebView)  private webView: WebView,
 private toastService: ToastService,
 private loadingController: LoadingController,
 private navCtrl: NavController
) { }


// getPicture
getPicture(srcType: number,imageFileUri: any,file: any) {
 const options: CameraOptions = {
   quality: 100,
   destinationType: this.useURI ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
   encodingType: this.camera.EncodingType.JPEG,
   mediaType: this.camera.MediaType.PICTURE,
   sourceType: srcType,
   targetWidth: 800,
   targetHeight: 800,
 };

 this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   if (this.useURI) {
     // const temp = imageData.split('?');
     // this.imageData = temp[0];
     this.imageData = (window as any).Ionic.WebView.convertFileSrc(imageData);
     // this.loadPhoto(imageData); 
   } else {
     this.imageData = 'data:image/jpeg;base64,' + imageData;
     // this.loadPhoto(imageData);


     // this.file.resolveLocalFilesystemUrl(imageFileUri).then(entry => {
     //   entry['file'](file => {
     //     // this.readFile(file);
     //     const reader = new FileReader();

     //     reader.onloadend = () => {
     //       const imgBlob = new Blob([reader.result], { type: file.type });
     
     //       this.productForm.controls['imageData'].setValue(imgBlob);
     //     }
     
     //     reader.readAsArrayBuffer(file);

     //   })
     // })  
     
   }
 }, (err) => {
   console.log(err);
 });
}


 private loadPhoto(imageFileUri: any) {
 // this.file.resolveLocalFilesystemUrl(imageFileUri).then(entry => {
 //   entry['file'](file => {
 //     this.readFile(file);
 //   })
 // })
}

private readFile(file: any) {
 const reader = new FileReader();

 reader.onloadend = () => {
   const imgBlob = new Blob([reader.result], { type: file.type });

   this.productForm.controls['imageData'].setValue(imgBlob);
 }

 reader.readAsArrayBuffer(file);
}



ionViewWillEnter() {

this.productService.getProductCategory().subscribe((data:any) => this.product_types = data.data);

 if(this.route.snapshot.data.formType === 'CREATE') {
   this.formType = 'CREATE';
   this.title = 'เพิ่มสินค้า';
 } else {
   this.title = 'แก้ไขสินค้า';
   this.formType = 'EDIT';
   // console.log(this.route.snapshot.params['id']);
   this.productService.get(this.route.snapshot.params['id']).subscribe(data => {
     this.productForm.setValue({
       code_product: data.code_product,
       product_type_id: data.product_type_id,
       product_th: data.product_th,
       details_th: data.details_th,
       price: data.price,
       cost: data.cost,
       instock: data.instock,
       imageData: null
     });

      this.imageSrc = environment.url + data.thumbnail;
     console.log(this.imageSrc );
   });
 }
}

submit() {

 // console.log(this.productForm.value)
 if(this.formType === 'CREATE') {
   this.productService.createProduct(this.productForm.value).subscribe(res => {
     this.toastService.showToast('เพิ่มสินค้าเรียบร้อยแล้ว', 'top');
     this.router.navigateByUrl('/products');
   }, err => console.log(  
     this.toastService.showToast('รหัสสินค้านี้มีอยู่แล้ว', 'top')));
 } else {
   this.productService.updateProduct(this.productForm.value, this.route.snapshot.params['id']).subscribe(res => {
     this.toastService.showToast('แก้ไขสินค้าเรียบร้อยแล้ว', 'top');
     this.router.navigateByUrl('/products');
   }, err => console.log(err));


 }    
}

letScan() {
 const barcodeScannerOptions: BarcodeScannerOptions = {
   formats : "QR_CODE,EAN_13"
 };

 this.barcodeScanner.scan(barcodeScannerOptions).then((result: BarcodeScanResult) => {
   this.productForm.controls['code_product'].setValue(result.text);
   this.show_code_product = result.text;
 }).catch(err => {
   console.log('Error', err);
 });
}

// takePhoto() {


//   const options: CameraOptions = {
//     quality: 100,
//     destinationType: this.camera.DestinationType.FILE_URI,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType: this.camera.MediaType.PICTURE
//   }
 
//   this.camera.getPicture(options).then((imageData) => {
//     this.imageSrc = this.webView.convertFileSrc(imageData);
//     this.base64Image = "data:image/jpeg;base64," + imageData;
//     this.base64Image = this.imageSrc;
//   }, (err) => {
//     this.toastService.showToasts(this.base64Image, 'top');
//   });


 // this.camera.getPicture({
 //   quality: 100,
 //   destinationType: this.camera.DestinationType.FILE_URI,
 //   sourceType: this.camera.PictureSourceType.CAMERA,
 //   encodingType: this.camera.EncodingType.JPEG,
 //   cameraDirection: this.camera.Direction.FRONT,
 //   mediaType: this.camera.MediaType.PICTURE
 // }).then(
 //   imageData => {
 //     this.imageSrc = this.webView.convertFileSrc(imageData);
 //     // this.loadPhoto(imageData);   
 //     this.base64Image = "data:image/jpeg;base64," + imageData;
  
      
 //   },
 //   err => {
 //     console.log(err);
 //   }
 // );

 // const options: CameraOptions = {
 //   quality: 40,
 //   destinationType: this.camera.DestinationType.DATA_URL,
 //   encodingType: this.camera.EncodingType.JPEG,
 //   mediaType: this.camera.MediaType.PICTURE,
 //   allowEdit :true
 // }
 // this.camera.getPicture(options).then((ImageData) => {
 //   this.imageSrc = this.webView.convertFileSrc(ImageData);
 //   let base64Image = ImageData.replace(/(\r\n|\n|\r)/gm,"");
 //   this.imageSrc  = "data:image/jpeg;base64," + base64Image;
  
 // },(err) => {
 //   this.imageSrc = this.imageSrc+'/images/products/default.jpg';
 //   this.toastService.showToast('img err', 'top');
 //   console.log(JSON.stringify(err));
 // })
// }



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


}
