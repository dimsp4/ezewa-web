import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
})
export class BuildingComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authS: AuthService
  ) {
    route.queryParams.subscribe(val => {
      this.searchPlaceHolder = val['q']
    })
  }

  searchPlaceHolder = ''

  logoutButton() {
    this.authS.logout();
  }

  searchButton(data: any){
    console.log(data.input);
    if (data.input) {
      this.router.navigate([`customer/building`], {queryParams: {q: data.input}})
    } else {
      this.router.navigateByUrl(`customer/building`)
    }
  }

  formGroup: FormGroup = new FormGroup({
    input: new FormControl(''),
  });

  count = 1000;
  duration = 2500;

  scrolled = false;
  search = false;

  dhimas = 'dhimas';
  fredy = 'fredy';
  ibnu = 'ibnu';
  hafidz = 'hafidz';

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
}
