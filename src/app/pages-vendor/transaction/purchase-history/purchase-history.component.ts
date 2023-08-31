import { Component } from '@angular/core';
import { TransactionResponse } from 'src/app/pages-customer/model/transaction-response.model';
import { CustomerResponse } from '../../model/customer.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent {
  constructor(private readonly service: TransactionService) {
    this.transactions = [];
    this.customer = [];
  }

  transactions!: TransactionResponse[];

  customer!: CustomerResponse[];

  status: number = 0;

  ngOnInit(): void {
    this.getAllTransaction();
  }

  getAllTransaction(): void {
    this.service.getAllTransaction().subscribe((resT) => {
      resT.data.forEach((res) => {
        this.transactions.push(res);
        this.service.getCustomerById(res.customerId).subscribe((res) => {
          this.customer.push(res.data);
        });
      });
    });
  }

  getStatusColorClass(status: string) {
    if (status === 'SUCCESS') {
      return 'text-success';
    } else if (status === 'PENDING') {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  }
  
}
