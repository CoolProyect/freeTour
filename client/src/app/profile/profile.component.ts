import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: object;
  newCity;
  constructor(public auth: AuthService) {
    this.user = this.auth.getUser()
    this.auth.getLoginEventEmitter().subscribe(user => this.user = user)
  }

  ngOnInit() {
    let city=['berlin', 'dublin', 'roma', 'tallin', 'helsinki', 'miami', 'cartgena de indias', 'cancun', 'puabla de almenara', 'lisboa', 'praga', 'conpenhague', 'barcelona', 'amsterdam']
    console.log(city.length)
    let long = city.length
    let num = Math.trunc(Math.random()*long)
    console.log(num)
    this.newCity = city[num]
    console.log('NEW CITY', this.newCity)
  }

}
