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

  urlGithub : string = 'https://github.com/'
  urlLinkedin : string = 'https://www.linkedin.com/'
  urlInstagram : string = 'https://www.instagram.com/'

  ngOnInit() {
    this.onImage(this.inputName)
  }

  onImage(name: string) {
    if (name === 'dhimas') {
      this.name = 'Dhimas Pamungkas Setiabudi'
      this.image = `assets/images/profile/dimas.jpg`
      this.urlGithub = 'https://github.com/dimsp4'
      this.urlLinkedin = 'https://www.linkedin.com/in/dimsp4'
      this.urlInstagram = 'https://www.instagram.com/dims.p'
    } else if (name === 'fredy') {
      this.name = 'Fredy Mordechai Marpaung'
      this.image = `assets/images/profile/edy.jpeg`
      this.urlGithub = 'https://github.com/'
      this.urlLinkedin = 'https://www.linkedin.com/'
      this.urlInstagram = 'https://www.instagram.com/'
    } else if (name === 'ibnu') {
      this.name = 'Muhammad Ibnu Al Yazzar'
      this.image = `./assets/images/profile/user-ibnu.jpg`
      this.urlGithub = 'https://github.com/ibnu001'
      this.urlLinkedin = 'https://www.linkedin.com/in/muhammadibnualyazzar/'
      this.urlInstagram = 'https://www.instagram.com/ibnu.al.yazzar/'
    } else if (name === 'hafidz') {
      this.name = 'Vhierdy Hafidz'
      this.image = `./assets/images/profile/user-hafidz.png`
      this.urlGithub = 'https://github.com/vhihafiz'
      this.urlLinkedin = 'https://www.linkedin.com/in/vhierdy-hafidz-b12982232/'
      this.urlInstagram = 'https://www.instagram.com/vhrdyhfdz/'
    }
  }
}
