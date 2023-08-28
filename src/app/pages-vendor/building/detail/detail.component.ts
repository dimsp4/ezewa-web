import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingComponent } from '../building.component';
import { BuildingModel } from '../model/building.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input()
  building : BuildingModel[] = []

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ){
    this.route.queryParams.subscribe(p => {
      this.buildById = this.building.find((finded) => finded.building.id === p['id']);
      
      this.buildingForm = new FormGroup({
        buildingName: new FormControl(this.buildById?.building.buildingName || ''),
        description: new FormControl(this.buildById?.building.description || ''),
        location: new FormControl(this.buildById?.building.location || ''),
        price: new FormControl(this.buildById?.building.price || ''),
      });
    })
  }

  buildingForm : FormGroup = new FormGroup({
    buildingName: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl(''),
  })
  
  buildById?: BuildingModel 

  saveBuilding(data: any){
    console.log(data);
  }

  onImageChange(data: any, changed: any){
    console.log(changed);
    
  }
}
