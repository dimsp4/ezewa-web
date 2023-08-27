import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  page: number = 0

  vendorPage(){
    this.page = 1
  }

  customerPage(){
    this.page = 2
  }

  getPage(e: number){
    this.page = e
  }
}
