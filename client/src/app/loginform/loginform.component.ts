import { Component, OnInit } from '@angular/core'
import {AuthService} from '../services/auth.service'
import { FileSelectDirective } from "ng2-file-upload"

interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
 //  // uploader: FileUploader = new FileUploader({
 //   url: `/user/`
 // })

  formInfo:LoginForm = {
    username: "",
    password: "",
  };

  feedback: string;
  constructor(public auth:AuthService) { }

  ngOnInit() {
    // this.uploader.onSuccessItem = (item, response) => {
    //  this.feedback = JSON.parse(response).message;
  //  }
   //
  //  this.uploader.onErrorItem = (item, response, status, headers) => {
  //    this.feedback = JSON.parse(response).message;
  //  }
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password)
      .map(user => console.log(user))
      .subscribe();
    } else{
      console.log("You must set a username and a password");
    }
    // this.uploader.uploadAll()
  }

}
