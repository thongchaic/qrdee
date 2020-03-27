import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

////////////////// v2 ///////////////////
  genQR(promptpay, price){
    return this.http.get<any>(`https://qrdee.co/api/v2/qr?promptpay=${promptpay}&price=${price}`);
  }

  insertTransaction(products, prompt_payload, price, store_id){
     const body = {
       price: price,
       prompt_payload:prompt_payload,
       products: products
     }
     return this.http.post<any>(`https://qrdee.co/api/v2/trnqr/${store_id}`,body);
   }

   getOrders(store_id){
      return this.http.get<any>(`https://qrdee.co/api/v2/orders/${store_id}`);
   }


////////////////// v1 ///////////////////
  // latitude,longitude

 //  orderProduct() {
 //     console.log(`https://qrdee.co/api/v1/order`);
 //    return this.http.get<any>(`https://qrdee.co/api/v1/order`);
 //
 //  }
 //  orderProducts() {
 //     console.log(`https://qrdee.co/api/v1/orders`);
 //    return this.http.get<any>(`https://qrdee.co/api/v1/orders`);
 //
 //  }
 //
 //
 //  getUser() {
 //    return this.http.get<any>(`https://qrdee.co/api/v1/users`);
 //    // console.log('https://qrdee.co/api/v1/users');
 //  }
 //
 // getCodeRandoms() {
 //    return this.http.get<any>(`https://qrdee.co/api/v1/code_randomss`);
 //    // console.log('https://qrdee.co/api/v1/users');      store_id
 //  }
 //
 //  newTransaction(products, total_price,latitude,longitude,firstname,lastname,mobile_number,latitude_store,longitude_store,store_id,promptpay,verified) {
 //    const body = {
 //      total_price: total_price,
 //      products: products,
 //      latitude: latitude,
 //      longitude: longitude,
 //      firstname: firstname,
 //      lastname: lastname,
 //      mobile_number: mobile_number,
 //      latitude_store: latitude_store,
 //      longitude_store: longitude_store,
 //      store_id: store_id,
 //      promptpay:promptpay,
 //      verified:verified,
 //    }
 //    console.log(body);
 //
 //    return this.http.post<any>(`${this.baseUrl}/new_transaction`,body);
 //  }
 //
 //  newTransactionStore(products, total_price,verified) {
 //    const bodystore = {
 //      total_price: total_price,
 //      products: products,
 //      verified:verified,
 //    }
 //    console.log(bodystore);
 //    return this.http.post<any>(`https://qrdee.co/api/v1/new_transactionstore`,bodystore);
 //  }
 //
 //
 //  getverifiedcart(id) {
 //    return this.http.get<any>(`https://qrdee.co/api/v1/verified_transactionstore/${id}`);
 //  }


  // verifiedcart(verified) {
  //   const bodystoreverified = {
  //     verified:verified,
  //   }
  //   console.log('verified',bodystoreverified);
  //
  //   return this.http.post<any>(`https://qrdee.co/api/v1/verified_transactionstores`,bodystoreverified);
  // }
  //
  // newTransactionOrder(firstname, lastname,mobile_number,store_id,code_randoms) {
  //   const bodystorder = {
  //     firstname: firstname,
  //     lastname: lastname,
  //     mobile_number: mobile_number,
  //     store_id: store_id,
  //     code_randoms:code_randoms,
  //   }
  //   console.log(bodystorder);
  //
  //   return this.http.post<any>(`https://qrdee.co/api/v1/transaction_order_input`,bodystorder);
  // }

  //
  // verifyTransaction(transaction) {
  //   // console.log(transaction);
  //   return this.http.post<any>(`${this.baseUrl}/verify_transaction`, transaction);
  // }
  //
  // verifyTransactions(transaction) {
  //     // console.log(transaction);
  //     return this.http.post<any>(`${this.baseUrl}/verify_transactions`, transaction);
  // }
  //

// postUser(firstname,lastname) {
//     const name = {
//       firstname: firstname,
//       lastname: lastname
//     }
//     console.log(name);
//     return this.http.post<any>(`https://qrdee.co/api/v1/users_post`,name);
//     // console.log('https://qrdee.co/api/v1/users');
//   }

  //  update_transaction(transaction) {
  //   console.log(transaction);
  //   return this.http.post<any>(`${this.baseUrl}/update_transaction`, transaction);
  // }
}
