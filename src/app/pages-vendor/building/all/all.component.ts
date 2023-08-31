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
import { BuildingResponse } from '../model/building-response.model';
import { TransactionService } from '../../transaction/transaction.service';
import { TransactionResponse } from 'src/app/pages-customer/model/transaction-response.model';
import { BuildingRequest } from '../model/building-request.model';

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
    private readonly serviceBuilding: BuildingService,
    private readonly serviceTransaction: TransactionService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.serviceTransaction.getAllTransaction().subscribe((res) => {
      this.transactions = res.data;
      this.serviceBuilding.getAllBuilding().subscribe({
        next: (res) => {
          res.data.forEach((data) => {
            this.building.push({
              buildingResponse: data,
              avail: this.getTransaction(data.buildingId),
            });
          });
        },
      });
    });
  }

  isDetail = false;
  buildById: any;

  building: BuildingModel[] = [];
  transactions: TransactionResponse[] = [];

  getTransaction(id: string) {
    let find = this.transactions.find(
      (t) => t.orderDetails[0].buildingResponse.buildingId === id
    );
    if (find) {
      console.log(
        find.orderDetails[0].buildingResponse.buildingName,
        find.orderDetails[0].available
      );

      return find.orderDetails[0].available;
    }

    return true;
  }

  openAddBuilding() {
    const dialogRef = this.dialog.open(AddBuildingComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      this.getAll();
    });
  }

  buildingDetailNav(id: string) {
    this.buildById = this.building.find((b) => {
      b.buildingResponse.buildingId === id;
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
          *ngIf="!isLoading; else load"
        >
          Save
        </button>
        <ng-template #load>
          <button type="submit" class="btn btn-dark mt-3 mb-4" disabled>
            <p class="m-auto spinner-border"></p>
          </button>
        </ng-template>
      </div>
    </div>
  `,
  standalone: true,
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule, NgIf],
})
export class AddBuildingComponent {
  constructor(
    private readonly service: BuildingService,
    public matDialog: MatDialog
  ) {}

  buildingForm: FormGroup = new FormGroup({
    buildingName: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl(''),
  });

  isLoading = false;

  selectedImage: File | undefined;
  imagePreviewUrl: string | undefined;

  onImageChange(event: any) {
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      this.imagePreviewUrl = URL.createObjectURL(this.selectedImage);
      console.log(this.imagePreviewUrl);
      
    }
  }

  saveBuilding(data: any) {
    this.isLoading = true;

    const buildingData: BuildingRequest = {
      building: {
        buildingName: data.buildingName,
        description: data.description,
        location: data.location,
        price: Number.parseInt(data.price),
        vendorId: sessionStorage.getItem('id')!,
      },
      images: [],
    };

    buildingData.images.push(this.selectedImage!);

    this.service.addBuilding(buildingData).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.matDialog.closeAll();
        alert('Upload Success');
      },
      error: (err) => {
        this.isLoading = false;
        alert('Image must under 4mb.');
      },
    });
  }
}
