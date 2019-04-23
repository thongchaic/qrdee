import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from './product';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = `${ environment.api_url }/products`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  get(id) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  post(form) {
    const formData = new FormData();

    formData.append('thumbnail', form.image);
    formData.append('code_product', form.code_product);
    formData.append('product_category_id', form.product_category_id);
    formData.append('product_th', form.product_th);
    formData.append('details_th', form.details_th);
    formData.append('price', form.price);
    formData.append('cost', form.cost);
    formData.append('instock', form.instock);

    return this.http.post<any>(`${this.baseUrl}`, formData);
  }

  getByProductCode(product_code) {
    return this.http.get<Product>(`${this.baseUrl}?t=product_code&code=${product_code}`);
  }

  getProductCategory() {
    return this.http.get(`${environment.api_url}/ref/product_category`);
  }

  search(terms: Observable<string>, page: number) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term, page))
    );
  }

  searchEntries(term, page) {
    // let queryString = isNaN(term) ? `t=search_code&query=${term == '' ? true : term}&page=${page}` ? `?t=search&query=${term == '' ? true : term}&page=${page}`: 
    // console.log(isNaN(term));
    return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' ? true : term}&page=${page}`);
  }

}
