import { __decorate, __metadata, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';
import { AlertService } from '../../shared/services/alert.service';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
let FormComponent = class FormComponent {
    constructor(profileService, route, router, http, builder, toastService, alertService, camera, 
    // private imagePicker: ImagePicker,
    file, webView) {
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.builder = builder;
        this.toastService = toastService;
        this.alertService = alertService;
        this.camera = camera;
        this.file = file;
        this.webView = webView;
        this.imageSrc = '';
        this.profileForm = this.builder.group({
            username: ['', Validators.required],
            promptpay: ['', Validators.required],
            mobile_number: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            store_name: ['', Validators.required],
            store_type_id: ['', Validators.required],
            image: null
        });
        this.formType = 'EDIT';
        this.title = '';
    }
    ionViewWillEnter() {
        this.profileService.getStoreTypes().subscribe((data) => this.store_types = data.data);
        if (this.route.snapshot.data.formType === 'EDIT') {
            this.title = 'แก้ไขข้อมูล';
            this.formType = 'EDIT';
            this.profileService.getProfile().subscribe(data => {
                this.profileForm.setValue({
                    username: data.data.username,
                    promptpay: data.data.promptpay,
                    mobile_number: data.data.mobile_number,
                    firstname: data.data.firstname,
                    lastname: data.data.lastname,
                    store_name: data.data.store_name,
                    store_type_id: data.data.store_type_id,
                    image: null
                });
                this.imageSrc = environment.url + data.data.store_pic;
                // console.log(this.imageSrc);
            });
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
            this.profileForm.controls['image'].setValue(imgBlob);
        };
        reader.readAsArrayBuffer(file);
    }
    submit() {
        console.log(this.profileForm.value);
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
        if (this.formType === 'EDIT') {
            this.profileService.updateProfile(this.profileForm.value, this.route.snapshot.params['id']).subscribe(res => {
                this.toastService.showToast('แก้ไขเรียบร้อยแล้ว', 'top');
                this.router.navigateByUrl('/profile');
            }, err => console.log(err));
        }
    }
};
FormComponent = __decorate([
    Component({
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.scss'],
    }),
    __param(7, Inject(Camera)),
    __param(8, Inject(File)),
    __param(9, Inject(WebView)),
    __metadata("design:paramtypes", [ProfileService,
        ActivatedRoute,
        Router,
        HttpClient,
        FormBuilder,
        ToastService,
        AlertService,
        Camera,
        File,
        WebView])
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form.component.js.map