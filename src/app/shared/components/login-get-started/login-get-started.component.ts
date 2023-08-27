import { Component } from '@angular/core';

@Component({
  selector: 'app-login-get-started',
  templateUrl: './login-get-started.component.html',
  styleUrls: ['./login-get-started.component.scss']
})
export class LoginGetStartedComponent {
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
