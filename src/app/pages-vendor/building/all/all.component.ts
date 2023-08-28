import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BuildingModel } from '../model/building.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BuildingService } from '../building.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog,
    private readonly service: BuildingService
  ) {}

  ngOnInit(): void {
    this.service.getAllBuilding().subscribe({
      next: res => {
        this.building = res.data
      }
    })
  }

  isDetail = false;
  buildById: any;

  building: any[] = [];

  openAddBuilding() {
    const dialogRef = this.dialog.open(AddBuildingComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  buildingDetailNav(id: string) {
    this.buildById = this.building.find((b) => {
      b.building.id === id;
    });

    this.isDetail = true;
    this.router.navigate(['/vendor/building/all'], { queryParams: { id } });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: `
    <h1 mat-dialog-title>Add Building</h1>
    <div mat-dialog-content>
      <div class="row px-4">
        <label for="imageInput" class="col-3 btn btn-outline-secondary me-2">
          <input
            type="file"
            id="imageInput"
            style="display: none"
            class="rounded"
            (change)="onImageChange($event)"
          />

          <div *ngIf="imagePreviewUrl">
            <img
              [src]="imagePreviewUrl"
              alt="Selected Image"
              class="img-fluid mb-3"
              style="max-width: 100%"
            />
          </div>
        </label>
        <form
          class="col-9 mb-3 row justify-content-between"
          [formGroup]="buildingForm"
        >
          <input
            formControlName="buildingName"
            type="text"
            class="form-control col-4"
            placeholder="Name Building"
          />
          <input
            formControlName="location"
            type="text"
            class="form-control col-4"
            placeholder="Location"
          />
          <input
            formControlName="price"
            type="text"
            class="form-control col-3"
            placeholder="Price"
          />
          <input
            formControlName="description"
            type="text"
            class="form-control col-12 mt-3 pb-5"
            placeholder="Description"
          />
        </form>
        <button
          type="submit"
          class="btn btn-dark mt-3 mb-4"
          (click)="saveBuilding(buildingForm.value)"
        >
          Save
        </button>
      </div>
    </div>
  `,
  standalone: true,
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule, NgIf],
})
export class AddBuildingComponent {
  constructor(private readonly service: BuildingService) {}

  buildingForm: FormGroup = new FormGroup({
    buildingName: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl(''),
  });

  selectedImage: File | undefined;
  imagePreviewUrl: string | undefined;

  onImageChange(event: any) {
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      this.imagePreviewUrl = URL.createObjectURL(this.selectedImage);
    }
  }

  saveBuilding(data: any) {
    console.log('save');
  
    const buildingData = {
      buildingName: data.buildingName,
      description: data.description,
      location: data.location,
      price: data.price,
      vendorId: sessionStorage.getItem('id')
    };
  
    this.service.addBuilding(buildingData, [this.selectedImage!]).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
}
