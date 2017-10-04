import { Component, OnInit } from '@angular/core'
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: object;

  constructor(public auth:AuthService) {
    this.user = this.auth.getUser()
    this.auth.getLoginEventEmitter().subscribe( user => this.user=user )
  }

  ngOnInit() {
  }

}
