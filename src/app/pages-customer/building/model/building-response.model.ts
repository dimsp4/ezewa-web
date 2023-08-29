import { VendorResponse } from "src/app/pages-vendor/model/vendor.model";
import { FileResponse } from "./file.model";

export interface BuildingResponse {
  buildingId: string;
  buildingPriceId: string;
  buildingName: string;
  description: string;
  location: string;
  price: number;
  vendor: VendorResponse;
  buildingImages: FileResponse[];
}
