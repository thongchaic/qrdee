import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Output() scanChange = new EventEmitter;

  barcodeScannerOptions: BarcodeScannerOptions = {
    formats : "QR_CODE,EAN_13"
  };

  constructor(
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {}

  letScan() {
    this.barcodeScanner.scan(this.barcodeScannerOptions).then((result: BarcodeScanResult) => {
      console.log(result);
      this.scanChange.emit(result.text);
      // this.presentAlert(result.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
