import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesCustomerService } from '../../pages-customer.service';
import { BuildingResponse } from '../model/building-response.model';
import { TransactionRequest } from '../../model/transaction-request.model';
import { MatDialog } from '@angular/material/dialog';
import { TransactionComponent } from 'src/app/pages-vendor/transaction/transaction.component';
import { TransactionDialogComponent } from 'src/app/shared/components/transaction-dialog/transaction-dialog.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy{
  constructor(
    private readonly service: PagesCustomerService,
    private readonly route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  datePick = new FormGroup({
    date: new FormControl('')
  })

  ngOnDestroy(): void {
    this.status = 0
  }

  building?: BuildingResponse;

  status: number = 0
  urlMidTrans: string = ''
  idTransaction: string = ''

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.detail(res['id']);
    });
  }

  detail(id: string) {
    this.service.getBuildingById(id).subscribe((res) => {
      console.log(res);
      
      this.building = res.data;
    });
  }

  startTransaction() {
    let idCustomer = sessionStorage.getItem('id');
    let date = this.datePick.controls['date'].value
    if (idCustomer) {
      this.service
      .startTransacation({
        customerId: idCustomer,
        orderDetails: [
          {
            buildingPriceId: this.building!.buildingPriceId,
            dateStart: formatDateStart(new Date(date!)),
          },
        ],
      })
      .subscribe((res) => {
        this.urlMidTrans = res.data.orderMidtransResponse.redirectUrl
        this.idTransaction = res.data.orderId
        this.openTransaction(this.idTransaction)
      });
    }
  }

  openTransaction(idTransaction: string) {
    window.open(this.urlMidTrans)

    const dialogRef = this.dialog.open(TransactionDialogComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result === true){
        this.service.getTransactionById(idTransaction).subscribe(res => {
          const status = res.data.orderDetails[0].status 
          if (status === 'SUCCESS') {
            this.status = 1
          } else if (status === 'PENDING'){
            this.status = 2
          } else {
            this.status = 3
          }
        })
      }
    });
  }


}

function formatDateStart(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day} 23:59:00`;
}
