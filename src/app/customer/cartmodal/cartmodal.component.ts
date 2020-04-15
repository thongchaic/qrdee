import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { ProductService } from '../../products/shared/product.service';
import { ToastService } from '../../shared/services/toast.service';
import { AlertController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { CustomerService } from '../shared/customer.service';


@Component({
  selector: 'app-cartmodal',
  templateUrl: './cartmodal.component.html',
  styleUrls: ['./cartmodal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartmodalComponent implements OnInit {

  @Input() store;
  products:any[] = [];
  member_cart:any[] = [];
  pick_count:number = 0;
  product_rate = 3;
  store_rate = 0;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
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


  async commentPrompt(pid, comments){
    const alert = await this.alertController.create({
      header: 'ความเห็น',
      inputs: [
        {
          name: 'comment',
          type: 'text',
          placeholder: 'เพิ่มข้อคิดเห็น'
        }
      ],
      message: "<ion-list no-margin no-padding>"+comments.map(comment => "<ion-item no-margin no-padding><small>" + comment.comment + "<sub> เมื่อ:"+(new Date(comment.created_at.replace(/-/g, '/')).toISOString().slice(0, 10))+"</sub></small></ion-item>").join(" ")+"</ion-list>",
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ส่ง',
          handler: (e) => {
            if(e.comment != ""){
              console.log(pid);
              this.customerService.addProductComment(pid, e.comment).subscribe(() => {
                this.toastService.showToast('เราได้รับข้อคิดเห็นของท่านแล้ว', 'top');
                this.loadProducts();
              });
            }

          }
        }
      ]
    });

    await alert.present();

  }


  startPayment(){
    // process &
    this.closeModal(3);
  }

  addProductStar(id, star){
    this.productService.addProductRate(id, star).subscribe(() => {
      this.toastService.showToast('เราได้รับดาวจากท่านแล้ว', 'top');
      //this.loadProducts();
    });
  }
  addStoreStar(id, star){
    this.customerService.addStoreStar(id, star).subscribe(()=>{
      this.toastService.showToast('เราได้รับดาวจากท่านแล้ว', 'top');
    });
  }


  forceDissmiss(val){
    this.closeModal(val);
  }

  async closeModal(status) {
    await this.modalController.dismiss(status);
  }

}
