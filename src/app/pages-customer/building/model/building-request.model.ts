export interface BuildingRequest {
    building: {
      buildingName: string;
      description: string
      location: string
      price: number
      vendorId:string
    };
    images: string[]
  }
  