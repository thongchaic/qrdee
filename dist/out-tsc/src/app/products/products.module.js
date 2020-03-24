import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ProductsPage } from './products.page';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ProductService } from './shared/product.service';
import { CartService } from '../cart/shared/cart.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ShowComponent } from './show/show.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
const routes = [
    {
        path: '',
        component: ProductsPage,
        children: [
            {
                path: '',
                component: ListComponent,
                data: { title: 'รายการสินค้า' }
            },
            {
                path: 'create',
                component: FormComponent,
                data: { title: 'นำเข้าสินค้า', formType: 'CREATE' }
            },
            {
                path: ':id/edit',
                component: FormComponent,
                data: { title: 'แก้ไขสินค้า', formType: 'EDIT' }
            },
            {
                path: ':id',
                component: ShowComponent,
                data: { title: 'รายละเอียดสินค้า' }
            },
            {
                path: 'show/customer',
                component: ShowCustomerComponent,
                data: { title: 'ขนส่ง' }
            },
        ]
    }
];
let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            SharedModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [
            ProductsPage,
            ListComponent,
            FormComponent,
            ShowComponent,
            ShowCustomerComponent,
        ],
        providers: [
            ProductService,
            CartService,
            BarcodeScanner,
            File,
            Camera,
            WebView
        ]
    })
], ProductsPageModule);
export { ProductsPageModule };
//# sourceMappingURL=products.module.js.map