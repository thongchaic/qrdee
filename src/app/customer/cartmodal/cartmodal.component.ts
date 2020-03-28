import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductService } from '../../products/shared/product.service';
import { ToastService } from '../../shared/services/toast.service';


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

  constructor(
    private productService: ProductService,
    private toastService: ToastService,
    private modalController: ModalController
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
  startPayment(){
    // process &
    this.closeModal(3);
  }


  forceDissmiss(val){
    this.closeModal(val);
  }

  async closeModal(status) {
    await this.modalController.dismiss(status);
  }

}
