import { Component } from '@angular/core';
import { PagesCustomerService } from 'src/app/pages-customer/pages-customer.service';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.scss'],
})
export class TransactionDialogComponent {

  constructor(private readonly service: PagesCustomerService) {
    this.targetTime = new Date().getTime() + 10 * 60 * 1000; 
  }

  countdown: string = '';
  targetTime: number;

  ngOnInit(): void {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = this.targetTime - now;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        this.countdown = 'Countdown expired';
      } else {
        const minutes = Math.floor(timeRemaining / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        this.countdown = `${minutes}m ${seconds}s`;
      }
    }, 1000);
  }
}
