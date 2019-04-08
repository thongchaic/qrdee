import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Product>(`${this.baseUrl}`);
  }

  get(id) {

  }

  search(terms: Observable<string>, page: number) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term, page))
    );
  }

  searchEntries(term, page) {
    return this.http.get<any>(`${this.baseUrl}?t=search&query=${term}&page=${page}`);
  }

}
