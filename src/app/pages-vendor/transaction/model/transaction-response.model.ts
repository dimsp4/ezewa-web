export interface TransactionResponse {
  orderId: string;
  customerId: string;
  transDate: Date;
  orderDetails: OrderDetailResponse[];
}

export interface OrderDetailResponse {
  orderDetailId: string;
  orderId: string;
  productResponse: any;
  quantity: number;
}
