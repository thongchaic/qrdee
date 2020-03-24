import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { CartService } from './shared/cart.service';
import { TransactionService } from '../shared/services/transaction.service';
import { ToastService } from '../shared/services/toast.service';
import { AlertService } from '../shared/services/alert.service';
import { ModalController } from '@ionic/angular';
import { QrmodalComponent } from './qrmodal/qrmodal.component';
import { QrService } from '../shared/services/qr.service';
import { ProductService } from '../products/shared/product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormBuilder } from '@angular/forms';
let CartPage = class CartPage {
    constructor(cartService, transactionService, productService, toastService, alertService, qrService, modalController, http, router, route, geolocation, barcodeScanner, builder) {
        this.cartService = cartService;
        this.transactionService = transactionService;
        this.productService = productService;
        this.toastService = toastService;
        this.alertService = alertService;
        this.qrService = qrService;
        this.modalController = modalController;
        this.http = http;
        this.router = router;
        this.route = route;
        this.geolocation = geolocation;
        this.barcodeScanner = barcodeScanner;
        this.builder = builder;
        this.scanChange = new EventEmitter;
        this.product_code = '';
        this.productFound = false;
        // product_code:  any;
        this.searchTerm = '';
        this.query = '';
        this.page = 1;
        this.barcodeScannerOptions = {
            formats: "QR_CODE,EAN_13"
        };
        this.usertype = '';
        this.price = 0;
        this.store_id = 0;
        this.productService.getAll().subscribe(resp => {
            this.product_all = resp.products.data;
            console.log('product_all', this.product_all);
        });
        this.usertype = localStorage.getItem('usertype');
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.special) {
                this.store_id = JSON.parse(params.special);
                console.log('store_id: ', this.store_id);
            }
        });
    }
    ionViewWillEnter() {
        this.getCart();
        this.http.get(`http://qrdee.co/api/v1/store`).subscribe(console.log);
        // this.test = localStorage.getItem('test');
    }
    ngAfterViewInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp);
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                zoom: 6,
            });
            var icon = {
                // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
                url: 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
                scaledSize: new google.maps.Size(50, 50),
            };
            //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
            var marker = new google.maps.Marker({
                position: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                map: map,
                icon: icon
            });
            const infoWindow = new google.maps.InfoWindow;
            const pos = {
                lat: this.latitude,
                lng: this.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('ตำแหน่งของคุณ.');
            infoWindow.open(map);
            map.setCenter(pos);
            // this.loadStoreDistance();
        }).catch((error) => {
            console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error);
        });
    }
    newTransaction() {
        this.alertService.showAlert({
            header: 'คุณต้องการชำระเงินด้วย QR Code ใช่หรือไม่',
            sub_header: '',
            message: '',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: () => {
                        if (this.store_id) {
                            this.transactionService.newTransaction(this.cart, this.price, this.latitude, this.longitude, this.firstname, this.lastname, this.mobile_number, this.latitude_store, this.longitude_store, this.store_id, this.promptpay, this.verified = 0).subscribe(trn => {
                                console.log(trn);
                                this.toastService.showToast('ยกเลิกการซื้อสินค้าแล้ว', 'top');
                            });
                        }
                        else {
                            this.transactionService.newTransactionStore(this.cart, this.price, this.verified = 0).subscribe(trn => {
                                this.toastService.showToast('ยกเลิกการซื้อสินค้าแล้ว', 'top');
                            });
                        }
                    },
                    role: 'cancel',
                },
                {
                    text: 'ตกลง',
                    handler: () => {
                        if (this.store_id) {
                            this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
                                this.promptpay = res.data[0].promptpay;
                                console.log(res);
                                console.log(this.promptpay);
                                this.cartService.getStoreMaps(this.store_id).subscribe(res => {
                                    this.latitude_store = res.data[0].latitude;
                                    this.longitude_store = res.data[0].longitude;
                                    console.log('store_map', this.latitude_store, this.longitude_store);
                                    this.transactionService.getUser().subscribe(res => {
                                        this.firstname = res.data.firstname;
                                        this.lastname = res.data.lastname;
                                        this.mobile_number = res.data.mobile_number;
                                        this.store_id;
                                        this.transactionService.newTransaction(this.cart, this.price, this.latitude, this.longitude, this.firstname, this.lastname, this.mobile_number, this.latitude_store, this.longitude_store, this.store_id, this.promptpay, this.verified = 1).subscribe(trn => {
                                            console.log('user_map', this.latitude, this.longitude);
                                            this.qrService.generatePromptPayQRs(trn.data).subscribe(qr => {
                                                this.QRModal(qr, trn);
                                                // console.log(22);
                                                // console.log(qr);
                                            });
                                        });
                                    });
                                });
                            });
                        }
                        else {
                            // this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
                            //  this.promptpay =  res.data[0].promptpay;
                            //   console.log(res);
                            //   console.log(this.promptpay);
                            this.transactionService.newTransactionStore(this.cart, this.price, this.verified = 1).subscribe(trn => {
                                console.log(this.cart, this.price, this.verified);
                                this.qrService.generatePromptPayQRs(trn.data).subscribe(qr => {
                                    this.QRModal(qr, trn);
                                    // console.log(33);
                                    // console.log(qr);
                                });
                                // }); 
                            });
                        }
                    }
                }
            ]
        });
    }
    getCart() {
        this.cartService.getCart().subscribe(data => this.cart = data);
        this.price = this.cartService.getPrice();
        console.log(this.price);
    }
    addItem(product) {
        this.cartService.addItem(product);
        this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
        this.getCart();
    }
    removeFromCart(product) {
        this.cartService.removeProduct(product);
        this.toastService.showToast(`ลบ ${product.product_th}`, 'top');
        this.getCart();
    }
    // test
    search(product_code) {
        this.productService.getAll().subscribe(resp => {
            this.product_all = resp.products.data;
            console.log('product_all', this.product_all);
        });
        console.log("product_code", product_code);
        this.productService.getByProductCode(product_code).subscribe(product => {
            if (product.instock === 0) {
                this.toastService.showToast(`สินค้า ${product.product_th} ไม่มีในสต๊อคสินค้า`, 'top');
            }
            else {
                this.cartService.addToCart(product);
                this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
                this.getCart();
            }
        });
    }
    // search(product_code) {
    //     const barcodeScannerOptions: BarcodeScannerOptions = {
    //       formats : "QR_CODE,EAN_13"
    //     };
    //  this.productService.getByProductCode(this.product_code).subscribe(product => {
    //     this.barcodeScanner.scan(barcodeScannerOptions).then((result: BarcodeScanResult) => {
    //       this.product_code = result.text;
    //  this.cartService.addToCart(product);
    //           this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
    //           this.getCart();
    //     });
    //       });
    // }
    // letScan(product_code) {
    //    this.barcodeScanner.scan(this.barcodeScannerOptions).then((result: BarcodeScanResult) => {
    //      console.log(result);
    //      this.scanChange.emit(result.text);
    //      // this.product_all = this.product_code;
    //       this.product_code = this.scanChange.emit(result.text);
    //       this.productService.getByProductCode(this.product_code).subscribe(product => {
    //        if(product.instock === 0) {
    //          this.toastService.showToast(`สินค้า ${product.product_th} ไม่มีในสต๊อคสินค้า`, 'top')
    //        } else {
    //          this.cartService.addToCart(product);
    //          this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
    //          this.getCart();
    //      }      
    //    });
    //      // this.scan;
    //      // this.presentAlert(result.text);
    //    }).catch(err => {
    //      console.log('Error', err);
    //    });
    //  }
    getProduc() {
        this.productService.getAll().subscribe(resp => {
            this.product_all = resp.products.data;
            console.log('product_all', this.product_all);
        });
    }
    // letScan(product_code){
    //     this.barcodeScanner.scan().then(barcodeData =>{ 
    //       this.scanChange = barcodeData.text;
    //       this.product_all = this.product_code;
    //         this.productService.getByProductCode(product_code).subscribe(product => {
    //         if(product.instock === 0) {
    //           this.toastService.showToast(`สินค้า ${product.product_th} ไม่มีในสต๊อคสินค้า`, 'top')
    //         } else {
    //           this.cartService.addToCart(product);
    //           this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
    //           this.getCart();
    //       }      
    //     });
    //     })
    //   }
    QRModal(qr_data, trn_data) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: QrmodalComponent,
                componentProps: {
                    'transaction': trn_data.data,
                    'qr': qr_data.data
                }
            });
            modal.onDidDismiss()
                .then(status => {
                if (status.data == 1) {
                    this.cartService.clearCart();
                    this.getCart();
                    this.toastService.showToast(`ชำระเงินเรียบร้อยแล้ว`, 'top');
                }
            });
            return yield modal.present();
        });
    }
    submit() {
        this.toastService.showToast('กำลังตรวจสอบข้อมูล', 'top');
        this.router.navigateByUrl('/customer');
    }
    store_customers(store_id) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(this.store_id)
            }
        };
        this.router.navigate(['products'], navigationExtras);
        // console.log(id);
        console.log(navigationExtras);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], CartPage.prototype, "scanChange", void 0);
__decorate([
    ViewChild('mapElement', { static: false }),
    __metadata("design:type", ElementRef)
], CartPage.prototype, "mapNativeElement", void 0);
CartPage = __decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.page.html',
        styleUrls: ['./cart.page.scss'],
    }),
    __metadata("design:paramtypes", [CartService,
        TransactionService,
        ProductService,
        ToastService,
        AlertService,
        QrService,
        ModalController,
        HttpClient,
        Router,
        ActivatedRoute,
        Geolocation,
        BarcodeScanner,
        FormBuilder])
], CartPage);
export { CartPage };
//# sourceMappingURL=cart.page.js.map