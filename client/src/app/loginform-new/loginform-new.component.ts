import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform-new.component.html',
  styleUrls: ['./loginform-new.component.css']
})
export class LoginformNewComponent implements OnInit {
  formInfo: LoginForm = {
    username: "",
    password: ""
  };

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    const { username, password } = this.formInfo;
    if (username != "" && password != "") {
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password)
        .map(user => console.log(user))
        .subscribe();

    } else {
      console.log("You must set a username and a password");
    }
  }

}
