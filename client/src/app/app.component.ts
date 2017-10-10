import { Component } from '@angular/core'
import { AuthService } from './services/auth.service'
import { environment } from '../environments/environment'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Viaja Conmigo'
  user: any
  environment: boolean

  constructor(public auth: AuthService) {
    this.environment = environment.production
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  };
}
