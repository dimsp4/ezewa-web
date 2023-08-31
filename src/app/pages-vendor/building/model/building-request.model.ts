export interface BuildingRequest {
    building: {
      buildingName: string;
      description: string
      location: string
      price: number
      vendorId:string
    };
    images: File[]
  }

  export interface BuildingUpdateRequest {
    building: {
      buildingId: string
      buildingName: string;
      description: string
      location: string
      price: number
      vendorId:string
    };
    images: File[]
  }
  