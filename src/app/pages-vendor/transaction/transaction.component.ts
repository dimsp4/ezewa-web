import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { TransactionResponse } from './model/transaction-response.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: TransactionResponse[] = []
  loading = true;

  constructor(private readonly service: TransactionService){}

  ngOnInit(): void {
    this.getAllTransaction()
  }

  getAllTransaction(){
    setTimeout(() => {
      this.service.getAllTransaction().subscribe(res => {
        console.log(res);
        this.transactions = res.data;
        this.loading = false; // Setelah selesai loading, ubah nilai menjadi false
      });
    }, 2000);
  }
}
