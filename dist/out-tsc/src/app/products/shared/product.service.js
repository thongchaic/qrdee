import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}/products`;
    }
    getAll() {
        return this.http.get(`${this.baseUrl}`);
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getUser() {
        return this.http.get(`https://qrdee.co/api/v1/users`);
    }
    getAllproduct(id) {
        // console.log('https://qrdee.co/api/v1/transaction_code/${code_randoms}');
        return this.http.get(`https://qrdee.co/api/v1/allproduct/${id}`);
    }
    createProduct(data) {
        return this.http.post(`${this.baseUrl}`, this.createFormData(data));
    }
    updateProduct(data, id) {
        return this.http.post(`${this.baseUrl}/update_product/${id}`, this.createFormData(data));
    }
    deleteProduct(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
    getByProductCode(product_code) {
        return this.http.get(`${this.baseUrl}?t=product_code&code=${product_code}`);
    }
    getProductCategory() {
        return this.http.get(`https://qrdee.co/api/v1/ref?type=produtc_types`);
    }
    search(term, page) {
        console.log(term);
        //return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
        return this.http.get(`${this.baseUrl}?t=search&query=${term}&page=${page}`);
    }
    searchs(id, term, page) {
        // console.log(id);
        console.log(term);
        // return this.http.get<any>(`https://qrdee.co/api/v1/search_products?f=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
        // return this.http.get<any>(`https://qrdee.co/api/v1/search_products/${id}?query=${term}&page=${page}`);
        return this.http.get(`https://qrdee.co/api/v1/search_products/${id}/?=search&query=${term}&page=${page}`);
        // https://qrdee.co/api/v1/search_products/25/?=search&query=สมุด&page=1
        // https://qrdee.co/api/v1/search_products/25?&query=รองเท้าแก้ว
    }
    getProductStore_id(id) {
        // console.log(`https://qrdee.co/api/v1/store_id/${id}`); 
        return this.http.get(`https://qrdee.co/api/v1/store_id/${id}`);
    }
    getAllS(id) {
        return this.http.get(`https://qrdee.co/api/v1/product_store/${id}`);
    }
    // searchEntries(term, page) {
    //   // let queryString = isNaN(term) ? `t=search_code&query=${term == '' ? true : term}&page=${page}` ? `?t=search&query=${term == '' ? true : term}&page=${page}`: 
    //   // console.log(isNaN(term));
    //   return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
    // }
    createFormData(data) {
        const fd = new FormData();
        if (data.thumbnail)
            fd.append('thumbnail', data.thumbnail);
        fd.append('code_product', data.code_product);
        fd.append('product_type_id', data.product_type_id);
        fd.append('product_th', data.product_th);
        fd.append('details_th', data.details_th);
        fd.append('price', data.price);
        fd.append('cost', data.cost);
        fd.append('instock', data.instock);
        return fd;
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map