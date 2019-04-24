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

  createProduct(data) {
    return this.http.post<any>(`${this.baseUrl}`, this.createFormData(data));
  }

  updateProduct(data, id) {
    return this.http.post<any>(`${this.baseUrl}/update_product/${id}`, this.createFormData(data));
  }

  deleteProduct(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getByProductCode(product_code) {
    return this.http.get<Product>(`${this.baseUrl}?t=product_code&code=${product_code}`);
  }

  getProductCategory() {
    return this.http.get(`${environment.api_url}/ref/product_category`);
  }

  search(term, page: number) {
    return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
  }

  // searchEntries(term, page) {
  //   // let queryString = isNaN(term) ? `t=search_code&query=${term == '' ? true : term}&page=${page}` ? `?t=search&query=${term == '' ? true : term}&page=${page}`: 
  //   // console.log(isNaN(term));
  //   return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
  // }

  createFormData(data): FormData {
    const fd = new FormData();

    if(data.image) fd.append('thumbnail', data.image);
    fd.append('code_product', data.code_product);
    fd.append('product_category_id', data.product_category_id);
    fd.append('product_th', data.product_th);
    fd.append('details_th', data.details_th);
    fd.append('price', data.price);
    fd.append('cost', data.cost);
    fd.append('instock', data.instock);

    return fd;
  }

}
