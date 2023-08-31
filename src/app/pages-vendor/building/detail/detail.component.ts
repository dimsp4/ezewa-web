import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingComponent } from '../building.component';
import { BuildingModel } from '../model/building.model';
import { FormControl, FormGroup } from '@angular/forms';
import { BuildingResponse } from '../model/building-response.model';
import { BuildingService } from '../building.service';
import {
  BuildingRequest,
  BuildingUpdateRequest,
} from '../model/building-request.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  @Input()
  building: BuildingModel[] = [];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly service: BuildingService,
    public matDialog: MatDialog
  ) {
    this.route.queryParams.subscribe((p) => {
      this.buildById = this.building.find(
        (finded) => finded.buildingResponse.buildingId === p['id']
      )?.buildingResponse;

      this.buildingForm = new FormGroup({
        buildingName: new FormControl(this.buildById?.buildingName || ''),
        description: new FormControl(this.buildById?.description || ''),
        location: new FormControl(this.buildById?.location || ''),
        price: new FormControl(this.buildById?.price || ''),
      });
    });
  }

  buildingForm: FormGroup = new FormGroup({
    buildingName: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl(''),
  });

  buildById?: BuildingResponse;

  isLoading = false;

  selectedImage: File | undefined;
  imagePreviewUrl: string | undefined;

  onImageChange(event: any) {
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      this.imagePreviewUrl = URL.createObjectURL(this.selectedImage);
    }
  }

  updateBuilding(data: any) {
    this.isLoading = true;

    const buildingData: BuildingUpdateRequest = {
      building: {
        buildingName: data.buildingName,
        description: data.description,
        location: data.location,
        price: Number.parseInt(data.price),
        vendorId: sessionStorage.getItem('id')!,
        buildingId: this.buildById!.buildingId,
      },
      images: [],
    };

    if (this.selectedImage) {
      buildingData.images.push(this.selectedImage!);

      this.service
        .deleteBuildingImage(this.buildById!.buildingImages[0].id)
        .subscribe({
          next: (res) => {
            this.service.updateBuilding(buildingData).subscribe({
              next: (res) => {
                this.isLoading = false;
                this.router.navigateByUrl('vendor/building/all');
                alert('Upload Success');
              },
              error: (err) => {
                this.isLoading = false;
                alert('Image must under 4mb.');
              },
            });
          },
          error: (err) => {
            this.isLoading = false;
            alert(err.message);
          },
        });
    } else {
      this.service.updateBuilding(buildingData).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.router.navigateByUrl('vendor/building/all');
          alert('Upload Success');
        },
        error: (err) => {
          this.isLoading = false;
          alert('Image must under 4mb.');
        },
      });
    }
  }
}
