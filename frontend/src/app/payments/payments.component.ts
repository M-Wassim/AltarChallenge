import { Component, Input } from '@angular/core';
import { GridService } from '../grid.service';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent {
  receivedData: any;
  payment: string = '';
  amount: number = 0;
  code: string = '';
  grid: string = '';
  payments: any = [];

  constructor(
    private gridService: GridService,
    private paymentservice: PaymentService
  ) {}

  ngOnInit() {
    this.getAllPayments();
    this.gridService.sharedData$.subscribe((data) => {
      this.receivedData = data;
    });
  }
  getAllPayments() {
    this.paymentservice.getPayments().subscribe((data) => {
      this.payments = data;
    });
  }

  addPayment() {
    if (this.payment && this.amount > 0) {
      this.paymentservice
        .savePayment({
          payment: this.payment,
          amount: this.amount,
          code: this.receivedData?.code,
          grid: this.receivedData?.grid,
        })
        .subscribe((data) => {
          this.getAllPayments();
        });

      this.payment = '';
      this.amount = 0;
      this.code = '';
      this.grid = '';
    }
  }
}
