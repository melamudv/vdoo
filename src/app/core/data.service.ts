import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

    baseUrl: string = '../assets/';

    constructor(private http: HttpClient) { }

  getData() : Observable<any[]> {
        const url = this.baseUrl + 'api-data.json'
        return this.http.get<any[]>(url)
            .pipe(
                catchError(this.handleError)
            );
    }

    // getCustomer(id: number) : Observable<ICustomer> {
    //     const url = this.baseUrl + 'customers.json'
    //     console.log("url is: ", url)
    //   return this.http.get<ICustomer[]>(url)
    //     .pipe(
    //       map(customers => {
    //         let customer = customers.filter((cust: ICustomer) => cust.id === id);
    //         return (customer && customer.length) ? customer[0] : null;
    //       }),
    //       catchError(this.handleError)
    //     )
    // }
    //
    // getOrders(id: number) : Observable<IOrder[]> {
    //   return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
    //     .pipe(
    //       map(orders => {
    //         let custOrders = orders.filter((order: IOrder) => order.customerId === id);
    //         return custOrders;
    //       }),
    //       catchError(this.handleError)
    //     );
    // }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}
