import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  email: string = ''
  role: string = ''
  loading = true

  constructor(private readonly service: ProfileService){}

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile(){
    setTimeout(() => {
    }, 2000);
    this.service.getMyProfile().subscribe(res => {
      this.email = sessionStorage.getItem('email')!
      this.role = res.data.roles
    })
  }
}
