import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { UserRequest } from '../../model/user-request.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  constructor(
    private readonly router: Router,
    private readonly service: AuthService,
    private readonly matDialog: MatDialog
    ) {}

  @Output() page = new EventEmitter<number>()

  form : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit(data: UserRequest) {
    this.service.registerVendor(data).subscribe({
      next: (res) => {
        this.service.login(data).subscribe({
          next: (res) => {
            let token = res.data.token;
            
            if (token) {
              sessionStorage.setItem('token', token);
          sessionStorage.setItem('email', data.email);
          sessionStorage.setItem('role', res.data.roles);
              this.router.navigateByUrl('vendor');
            }
          },
          error: (err) => {
            alert('Invalid Email or Password');
          },
        });
      },
      error: (err) => {
        alert('Invalid Email or Password');
      },
    });
    this.matDialog.closeAll()
  }

  changeCustomer(){
    this.page.emit(2)
  }
}
