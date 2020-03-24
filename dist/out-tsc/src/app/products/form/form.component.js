import { __decorate, __metadata, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { ToastService } from '../../shared/services/toast.service';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
let FormComponent = class FormComponent {
    constructor(route, router, productService, barcodeScanner, builder, camera, 
    // private imagePicker: ImagePicker,
    file, webView, toastService, loadingController, navCtrl) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.barcodeScanner = barcodeScanner;
        this.builder = builder;
        this.camera = camera;
        this.file = file;
        this.webView = webView;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.productForm = this.builder.group({
            code_product: ['', Validators.required],
            product_type_id: ['', Validators.required],
            product_th: ['', Validators.required],
            details_th: ['', Validators.required],
            price: ['', Validators.required],
            cost: ['', Validators.required],
            instock: ['', Validators.required],
            // thumbnail: ['', Validators.required],
            thumbnail: null
        });
        this.formType = 'CREATE' || 'EDIT';
        this.imageSrc = '';
        this.scan = false;
        this.show_code_product = '';
        this.title = '';
    }
    ionViewWillEnter() {
        this.productService.getProductCategory().subscribe((data) => this.product_types = data.data);
        if (this.route.snapshot.data.formType === 'CREATE') {
            this.formType = 'CREATE';
            this.title = 'เพิ่มสินค้า';
        }
        else {
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
                    // thumbnail: data.instock,
                    thumbnail: null
                });
                this.imageSrc = environment.url + data.thumbnail;
            });
        }
    }
    submit() {
        // console.log(this.productForm.value)
        if (this.formType === 'CREATE') {
            this.productService.createProduct(this.productForm.value).subscribe(res => {
                this.toastService.showToast('เพิ่มสินค้าเรียบร้อยแล้ว', 'top');
                this.router.navigateByUrl('/products');
            }, err => console.log(this.toastService.showToast('รหัสสินค้านี้มีอยู่แล้ว', 'top')));
        }
        else {
            this.productService.updateProduct(this.productForm.value, this.route.snapshot.params['id']).subscribe(res => {
                this.toastService.showToast('แก้ไขสินค้าเรียบร้อยแล้ว', 'top');
                this.router.navigateByUrl('/products');
            }, err => console.log(err));
        }
    }
    letScan() {
        const barcodeScannerOptions = {
            formats: "QR_CODE,EAN_13"
        };
        this.barcodeScanner.scan(barcodeScannerOptions).then((result) => {
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
        }).then(imageData => {
            this.imageSrc = this.webView.convertFileSrc(imageData);
            this.loadPhoto(imageData);
        }, err => {
            console.log(err);
        });
    }
    selectPhoto() {
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        }).then(imageData => {
            this.imageSrc = this.webView.convertFileSrc(imageData);
            this.loadPhoto(imageData);
        }, err => {
            console.log(err);
        });
    }
    loadPhoto(imageFileUri) {
        this.file.resolveLocalFilesystemUrl(imageFileUri).then(entry => {
            entry['file'](file => {
                this.readFile(file);
            });
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgBlob = new Blob([reader.result], { type: file.type });
            this.productForm.controls['thumbnail'].setValue(imgBlob);
        };
        reader.readAsArrayBuffer(file);
    }
};
FormComponent = __decorate([
    Component({
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.scss'],
    }),
    __param(5, Inject(Camera)),
    __param(6, Inject(File)),
    __param(7, Inject(WebView)),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        ProductService,
        BarcodeScanner,
        FormBuilder,
        Camera,
        File,
        WebView,
        ToastService,
        LoadingController,
        NavController])
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form.component.js.map