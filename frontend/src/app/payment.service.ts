import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private httpClient: HttpClient) {}

  getPayments() {
    return this.httpClient.get(`http://localhost:3000/payments`);
  }

  savePayment(data: any) {
    return this.httpClient.post(`http://localhost:3000/payments`, data);
  }

  deletePayment(id: any) {
    return this.httpClient.delete(`http://localhost:3000/payments/${id}`);
  }
}
