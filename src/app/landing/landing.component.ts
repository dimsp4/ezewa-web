import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { GetStartedComponent } from '../shared/components/get-started/get-started.component';
import { AppSideLoginComponent } from '../authentication/login/login-vendor/login.component';
import { LoginGetStartedComponent } from '../shared/components/login-get-started/login-get-started.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(public dialog: MatDialog) {}

  isCLose = false

  openGetStarted() {
    const dialogRef = this.dialog.open(GetStartedComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginGetStartedComponent, {
      closeOnNavigation: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
