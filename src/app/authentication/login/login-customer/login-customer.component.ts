import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { UserRequest } from '../../model/user-request.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.scss']
})
export class LoginCustomerComponent {
  constructor(
    private readonly router: Router,
    private readonly service: AuthService,
    private readonly matDialog: MatDialog
  ) {}

  isLoading = false;


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  @Output() page = new EventEmitter<number>();

  changeVendor() {
    this.page.emit(1);
  }

  tryAuth(data: UserRequest) {
    this.isLoading = true
    this.service.login(data).subscribe({
      next: (res) => {
        let token = res.data.token;

        if (token) {
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('email', data.email);
          sessionStorage.setItem('role', res.data.roles);
          sessionStorage.setItem('id', res.data.id);
          console.log(res);

          this.router.navigateByUrl('customer');
        }
      },
      error: (err) => {
        alert('Invalid Email or Password')
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
        this.matDialog.closeAll();
      }
    });
  }
}
