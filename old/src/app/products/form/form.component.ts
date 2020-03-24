import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
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
export class FormComponent {

  productForm: FormGroup = this.builder.group({
    code_product: ['', Validators.required],
    product_category_id: ['', Validators.required],
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
  product_category: any;
  title = '';

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
    private router: Router,
    private productService: ProductService,
    private barcodeScanner: BarcodeScanner,
    private builder: FormBuilder,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private file: File,
    private webView: WebView,
    private toastService: ToastService,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) { }

  ionViewWillEnter() {
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
          product_category_id: data.product_category_id,
          product_th: data.product_th,
          details_th: data.details_th,
          price: data.price,
          cost: data.cost,
          instock: data.instock,
          image: null
        });

        this.imageSrc = environment.url + data.thumbnail;
      });
    }
    this.productService.getProductCategory().subscribe(data => this.product_category = data);
  }

  submit() {
    // console.log(this.productForm.value)
    if(this.formType === 'CREATE') {
      this.productService.createProduct(this.productForm.value).subscribe(res => {
        this.toastService.showToast('เพิ่มสินค้าเรียบร้อยแล้ว', 'top');
        this.router.navigateByUrl('/products');
      }, err => console.log(err));
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

      this.productForm.controls['image'].setValue(imgBlob);
    }

    reader.readAsArrayBuffer(file);
  }

}
