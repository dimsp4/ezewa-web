export interface TransactionResponse {
  orderId: string;
  customerId: string;
  transDate: string;
  orderDetails: OrderDetail[];
  orderMidtransResponse: OrderMidtransResponse;
}

export interface BuildingImage {
  id: string;
  filename: string;
  url: string;
}

export interface Vendor {
  vendorId: string;
  name: string;
  address: string;
  mobilePhone: string;
  email: string;
}

export interface BuildingResponse {
  buildingId: string;
  buildingPriceId: string;
  buildingName: string;
  description: string;
  location: string;
  price: number;
  vendor: Vendor;
  buildingImages: BuildingImage[];
  available: boolean;
}

export interface OrderDetail {
  orderDetailId: string;
  orderId: string;
  buildingResponse: BuildingResponse;
  dateStart: string;
  status: string;
  available: boolean;
}

export interface OrderMidtransResponse {
  token: string;
  redirectUrl: string;
}


