import { Component } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {

  building = [
    {
      "building": {
        "buildingName": "building1",
        "description": "building description",
        "location": "jakarta",
        "price": 1000,
        "vendorId": "101010"
      },
      "images": [
        "string"
      ]
    },
    {
      "building": {
        "buildingName": "building2",
        "description": "building description",
        "location": "jakarta",
        "price": 1000,
        "vendorId": "101010"
      },
      "images": [
        "string"
      ]
    },
    {
      "building": {
        "buildingName": "building3",
        "description": "building description",
        "location": "jakarta",
        "price": 1000,
        "vendorId": "101010"
      },
      "images": [
        "string"
      ]
    }
  ]

}
