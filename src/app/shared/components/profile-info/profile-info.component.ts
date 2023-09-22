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

  openUrl(url: string){
    window.open(url)
  }

  onImage(name: string) {
    if (name === 'dhimas') {
      this.name = 'Dhimas Pamungkas'
      this.image = `./assets/images/profile/dimas.jpg`
      this.urlGithub = 'https://github.com/dimsp4'
      this.urlLinkedin = 'https://www.linkedin.com/in/dimsp4'
      this.urlInstagram = 'https://www.instagram.com/dims.p'
    } else if (name === 'rudy') {
      this.name = 'Rudy Nurafif'
      this.image = `./assets/images/profile/rudy.jpeg`
      this.urlGithub = 'https://github.com/rudynurafif'
      this.urlLinkedin = 'https://www.linkedin.com/in/rudynurafif/'
      this.urlInstagram = 'https://www.instagram.com/rudynurafif'
    } else if (name === 'ibnu') {
      this.name = 'Muhammad Ibnu Al Yazzar'
      this.image = `./assets/images/profile/user-ibnu.jpg`
      this.urlGithub = 'https://github.com/ibnu001'
      this.urlLinkedin = 'https://www.linkedin.com/in/muhammadibnualyazzar/'
      this.urlInstagram = 'https://www.instagram.com/ibnu.al.yazzar/'
    } else if (name === 'hafidz') {
      this.name = 'Vhierdy Hafidz'
      this.image = `./assets/images/profile/apis.jpg`
      this.urlGithub = 'https://github.com/vhihafiz'
      this.urlLinkedin = 'https://www.linkedin.com/in/vhierdy-hafidz-b12982232/'
      this.urlInstagram = 'https://www.instagram.com/vhrdyhfdz/'
    }
  }
}
