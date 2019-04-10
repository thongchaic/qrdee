import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  barcodeScannerOptions: BarcodeScannerOptions = {
    preferFrontCamera : true,
    showFlipCameraButton : true,
    formats : "QR_CODE,PDF_417"
  };

  constructor(
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {}

  letScan() {
    this.barcodeScanner.scan(this.barcodeScannerOptions).then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
