export interface BuildingModel {
  building: {
    id: string;
    buildingName: string;
    description: string
    location: string
    price: number
    vendorId:string
  };
  images: string[]
}
