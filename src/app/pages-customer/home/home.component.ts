import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from 'src/app/authentication/auth.service';
import { AppSideLoginComponent } from 'src/app/authentication/login/login-vendor/login.component';
import { AppSideRegisterComponent } from 'src/app/authentication/register/register-vendor/register.component';
import { GetStartedComponent } from 'src/app/shared/components/get-started/get-started.component';
import { LoginGetStartedComponent } from 'src/app/shared/components/login-get-started/login-get-started.component';
import { PagesCustomerService } from '../pages-customer.service';

interface TransactionCustomer{
  buildingName: string,
  dateTrans: string,
  status: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly authS: AuthService,
    private readonly custS: PagesCustomerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.seeTransaction()
  }

  transactions : TransactionCustomer[] = []

  seeTransaction(){
    this.custS.getAllTransactionByProfile().subscribe(res => {
      res.data.forEach(val => {
        this.transactions.push({
          buildingName: val.orderDetails[0].buildingResponse.buildingName,
          dateTrans: val.transDate,
          status: val.orderDetails[0].status
        })
      })
    })
  }

  imagesCarousel = [
    'assets/images/backgrounds/building.jpg',
    'assets/images/backgrounds/china-city-river-business-view.jpg',
    'assets/images/backgrounds/landing.jpg',
    'assets/images/backgrounds/landmarks-hong-kong.jpg',
    'assets/images/backgrounds/building.jpg',
    'assets/images/backgrounds/china-city-river-business-view.jpg',
    'assets/images/backgrounds/landing.jpg',
    'assets/images/backgrounds/landmarks-hong-kong.jpg',
  ];

  customOptions: OwlOptions = {
    margin: 20,
    autoplay: true,
    autoplaySpeed: 1000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: 2,
    rewind: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    // nav: true
  };

  formGroup: FormGroup = new FormGroup({
    input: new FormControl(''),
  });

  count = 1000;
  duration = 2500;

  scrolled = false;
  search = false;

  dhimas = 'dhimas';
  rudy = 'rudy';
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

  logoutButton() {
    this.authS.logout();
  }

  searchButton(data: any) {
    console.log(data.input);
    if (data.input) {
      this.router.navigate([`customer/building/all`], {
        queryParams: { q: data.input },
      });
    } else {
      this.router.navigateByUrl(`customer/building/all`);
    }
  }

  openLoginVendor() {
    const dialogRef = this.dialog.open(AppSideLoginComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openRegisterVendor() {
    const dialogRef = this.dialog.open(AppSideRegisterComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
