import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  productForm: FormGroup = this.builder.group({
    code_product: ['', Validators.required],
    product_th: ['', Validators.required],
    details_th: ['', Validators.required],
    price: ['', Validators.required],
    cost: ['', Validators.required],
    instock: ['', Validators.required],
    image: null
  });
  formType = 'CREATE' || 'EDIT';
  imageSrc = '';
  scan = false;
  show_code_product = '';

  // validation_messages = {
  //   'code_product': [
  //     { type: 'required', message: 'กรุณาระบุรหัสสินค้า' },
  //   ],
  //   'product_th': [
  //     { type: 'required', message: 'กรุณาระบุชื่อสินค้า' }
  //   ],
  //   'details_th': [
  //     { type: 'required', message: 'กรุณาระบุรายละเอียดสินค้า' },
  //   ],
  //   'price': [
  //     { type: 'required', message: 'กรุณาระบุราคาสินค้า' }
  //   ],
  //   'cost': [
  //     { type: 'required', message: 'กรุณาระบุต้นทุนสินค้า' },
  //   ],
  //   'instock': [
  //     { type: 'required', message: 'กรุณาระบุจำนวนสินค้า' },
  //   ]
  // }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private barcodeScanner: BarcodeScanner,
    private builder: FormBuilder,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private file: File,
    private webView: WebView,
    private toastService: ToastService
  ) { }

  ionViewDidLoad() {
    console.log(this.route.snapshot.data['formType'])
  }

  ionViewWillEnter() {
    // this.buildForm();
  }

  submit() {
    console.log(this.productForm.value)
    this.productService.post(this.productForm.value).subscribe(console.log);
    // this.productService.post(this.productForm.value).subscribe(console.log);
    // console.log(this.productForm.value);
    // this.loadPhoto(this.productForm.controls['image'].value);
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

  takePhoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      // cameraDirection: this.camera.Direction.FRONT,
      // mediaType: this.camera.MediaType.PICTURE
    }).then(
      imageData => {
        this.imageSrc = this.webView.convertFileSrc(imageData);
        this.loadPhoto(imageData);
        // this.loadPhoto(imageData);
        // this.productForm.controls['image'].setValue(imageData);
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
      // cameraDirection: this.camera.Direction.FRONT,
      // mediaType: this.camera.MediaType.PICTURE
    }).then(
      imageData => {
        this.imageSrc = this.webView.convertFileSrc(imageData);
        this.loadPhoto(imageData);
        // this.loadPhoto(imageData);
        // this.productForm.controls['image'].setValue(imageData);
      },
      err => {
        console.log(err);
      }
    );
    // this.imagePicker.getPictures({
    //   maximumImagesCount: 1,
    //   quality: 100
    // }).then(
    //   imageData => {        
    //     this.imageSrc = this.webView.convertFileSrc(imageData[0]);
    //     // this.loadPhoto(imageData[0]);
    //     this.productForm.controls['image'].setValue(imageData[0]);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
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
      const formData = new FormData;
      const imgBlob = new Blob([reader.result], { type: file.type });

      this.productForm.controls['image'].setValue(imgBlob);

      // formData.append('image', imgBlob, file.name);
      // formData.append('code_product', this.productForm.get('code_product').value);
      // formData.append('product_th', this.productForm.get('product_th').value);
      // formData.append('details_th', this.productForm.get('details_th').value);
      // formData.append('price', this.productForm.get('price').value);
      // formData.append('cost', this.productForm.get('cost').value);
      // formData.append('instock', this.productForm.get('instock').value);

      // this.postData(formData);
    }

    reader.readAsArrayBuffer(file);
  }

  private postData(formData) {
    // console.log(this.productForm.value);
    // console.log(formData.get('image'));
    // console.log(formData.get('code_product'));
    // console.log(formData.get('product_th'));
    // console.log(formData.get('details_th'));
    // console.log(formData.get('price'));
    // console.log(formData.get('cost'));
    // console.log(formData.get('instock'));
    // this.productService.post(formData).subscribe(console.log);
  }

  // buildForm() {
  //   this.productForm = this.builder.group({
  //     code_product: [''],
  //     product_th: [''],
  //     details_th: [''],
  //     price: [''],
  //     cost: [''],
  //     instock: [''],
  //     image: null
  //   });
  // }

  toggleScan() {
    this.scan = !this.scan;
  }

}
