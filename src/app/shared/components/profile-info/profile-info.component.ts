import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {
  @Input() inputName : string = ''
  name: string = ''
  position: string = 'Fullstack Developer'
  image: string = './assets/images/profile/user-1.png'

  ngOnInit() {
    this.onImage(this.inputName)
  }

  onImage(name: string) {
    if (name === 'dhimas') {
      this.name = 'Dhimas Pamungkas Setiabudi'
      this.image = `./assets/images/profile/user-dhimas.png`
    } else if (name === 'fredy') {
      this.name = 'Fredy Mordechai Marpaung'
      this.image = `./assets/images/profile/user-fredy.png`
    } else if (name === 'ibnu') {
      this.name = 'Muhammad Ibnu Al Yazzar'
      this.image = `./assets/images/profile/user-ibnu.jpg`
    } else if (name === 'hafidz') {
      this.name = 'Vhierdy Hafidz'
      this.image = `./assets/images/profile/user-hafidz.png`
    }
  }
}
