export interface TransactionRequest {
  customerId: string;
  orderDetails: OrderDetail[];
}

export interface OrderDetail {
    buildingPriceId: string;
    dateStart: string;
  }
  
  