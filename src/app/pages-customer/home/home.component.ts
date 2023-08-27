import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private readonly router: Router, private readonly authS: AuthService,) {}

  formGroup: FormGroup = new FormGroup({
    input: new FormControl('')
  })

  count = 1000;
  duration = 2500;

  scrolled = false;
  search = false;

  @HostListener('document:scroll')
  scrollFunction() {
    if (
      (document.body.scrollTop > 20 && document.body.scrollTop < 500) ||
      (document.documentElement.scrollTop > 20 &&
        document.documentElement.scrollTop < 500)
    ) {
      this.scrolled = true;
      this.search = false;
    } else if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      this.scrolled = true;
      this.search = true;
    } else {
      this.scrolled = false;
      this.search = false;
    }
  }

  logoutButton(){
    this.authS.logout()
  }

  searchButton(data: any){
    console.log(data.input);
    if (data.input) {
      this.router.navigateByUrl(`building/${data.input}`)
    } else {
      this.router.navigateByUrl(`building`)
    }
  }
}
