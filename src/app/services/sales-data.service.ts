import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {
  private headers: HttpHeaders;
  private accessPointUrl = 'http://localhost:5001/api/order/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public getOrders(page, limit) {
  
    return this.http.get(this.accessPointUrl + page + '/' + limit, { headers: this.headers });
  }
}