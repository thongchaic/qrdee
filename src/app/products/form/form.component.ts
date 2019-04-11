import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  form;
  formType = 'CREATE' || 'EDIT';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private barcodeScanner: BarcodeScanner,
    private builder: FormBuilder
  ) { }

  ionViewWillEnter() {
    console.log(this.route.snapshot.data['formType'])
  }

  scan() {

  }

  buildForm() {
    this.form = this.builder.group({
      code_product: [''],
      // store_id: [],
      // product_category_id: [],      
      product_th: [''],
      details_th: [''],
      price: [],
      cost: [],
      instock: [],
      image: null
    });
  }

}
