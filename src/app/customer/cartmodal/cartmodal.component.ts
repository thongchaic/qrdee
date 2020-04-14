import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { ProductService } from '../../products/shared/product.service';
import { ToastService } from '../../shared/services/toast.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cartmodal',
  templateUrl: './cartmodal.component.html',
  styleUrls: ['./cartmodal.component.scss'],
})
export class CartmodalComponent implements OnInit {

  @Input() store;
  products:any[] = [];
  member_cart:any[] = [];
  pick_count:number = 0;
  rate:any = 3;

  constructor(
    private productService: ProductService,
    private toastService: ToastService,
    private event : Events,
    private modalController: ModalController,
    public alertController: AlertController
  ) {
    console.log(this.store);
    this.member_cart =  JSON.parse(localStorage.getItem('member_cart'));
    this.calcPickCount();


  }
  ngOnInit() {
    //console.log(this.store);
  }

  ngAfterViewInit(): void {
    this.loadProducts();
  }
  selectItem(product){
      let store = null;
      this.member_cart.forEach(e => {
        if(e.id == this.store.id){
          store = e;
        }
      });
      if(store){
        store.products.push(product);
      }else{
        store = this.store;
        store.products = [product];
        this.member_cart.push(this.store);
      }
      console.log(this.member_cart);
      localStorage.setItem('member_cart',JSON.stringify(this.member_cart));
      this.toastService.showToast('เก็บสินค้าลงตะกร้าแล้ว', 'top');
      this.calcPickCount();
  }

  calcPickCount(){
    this.pick_count = 0;
    this.member_cart.forEach(e => {
      this.pick_count += e.products.length;
    });
  }

  loadProducts(){
    //https://qrdee.co/api/v2/products/294
    this.productService.getProducts(this.store.id).subscribe((data:any)=>{
      console.log(data);
      this.products = data;
      //console.log(this.member_cart);
    });

  }


  async commentPrompt(){
    // const alert = await this.alertController.create({
    //   header: 'ความเห็น',
    //   inputs: [
    //     {
    //       // name: 'name1',
    //       type: 'text',
    //       placeholder: 'Placeholder 1'
    //     },
    //     {
    //       // name: 'name2',
    //       type: 'text',
    //       id: 'name2-id',
    //       value: 'hello',
    //       placeholder: 'Placeholder 2'
    //     },
    //     // multiline input.
    //     {
    //       // name: 'paragraph',
    //       id: 'paragraph',
    //       type: 'textarea',
    //       placeholder: 'Placeholder 3'
    //     },
    //     {
    //       name: 'name3',
    //       value: 'http://ionicframework.com',
    //       type: 'url',
    //       placeholder: 'Favorite site ever'
    //     },
    //     // input date with min & max
    //     {
    //       // name: 'name4',
    //       type: 'date',
    //       min: '2017-03-01',
    //       max: '2018-01-12'
    //     },
    //     // input date without min nor max
    //     {
    //       // name: 'name5',
    //       type: 'date'
    //     },
    //     {
    //       // name: 'name6',
    //       type: 'number',
    //       min: -5,
    //       max: 10
    //     },
    //     {
    //       // name: 'name7',
    //       type: 'text'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'ยกเลิก',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: () => {
    //         console.log('Confirm Cancel');
    //       }
    //     }, {
    //       text: 'ส่งความเห็น',
    //       handler: () => {
    //         console.log('Confirm Ok');
    //       }
    //     }
    //   ]
    // });
    //
    // await alert.present();

  }


  startPayment(){
    // process &
    this.closeModal(3);
  }

  addProductStar(event){
    console.log(event);
  }
  onRateChange(event){
    console.log(event);
  }


  forceDissmiss(val){
    this.closeModal(val);
  }

  async closeModal(status) {
    await this.modalController.dismiss(status);
  }

}
