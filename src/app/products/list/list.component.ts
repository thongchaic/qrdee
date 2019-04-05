import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  results = [];
  page = 1;
  $searchTerm = new BehaviorSubject<string>('');

  constructor(
    private productService: ProductService
  ) {
    this.productService.search(this.$searchTerm, this.page).subscribe(data => {
      console.log(data.data);
      this.results = data.data;
    });
  }

  ngOnInit() {}

  loadData(event) {
    this.page++;
    this.productService.search(this.$searchTerm, this.page).subscribe(data => {
      setTimeout(() => {
        console.log(data);
        this.results = this.results.concat(data['data']);
        // this.results.push(data.data);
        event.target.complete();

        if(this.page >= data['last_page']) {
          event.target.disabled = true;
        }
      }, 500);
    });
    // console.log('Begin async operation');

    // setTimeout(() => {
    //   for (let i = 0; i < 30; i++) {
    //     this.results.push( this.results.length );
    //   }

    //   console.log('Async operation has ended');
    //   infiniteScroll.complete();
    // }, 500);
  }

}
