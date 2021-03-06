import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform-new.component.html',
  styleUrls: ['./signupform-new.component.css']
})
export class SignupformNewComponent implements OnInit {
  formInfo = {
    username: "",
    password: ""
  }
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  signup() {
    const { username, password } = this.formInfo;
    if (username != "" && password != "") {
      console.log(`Signup with ${username} ${password}`)
      this.auth.signup(username, password)
        .map(user => console.log(user))
        .subscribe();
    } else {
      console.log("You must set a username and a password");
    }
  }

}
