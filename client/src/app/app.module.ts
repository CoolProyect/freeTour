import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

// component
import { AppComponent } from './app.component'
import { CityComponent } from './city/city.component'
import { IndexComponent } from './index/index.component'
import { MenuComponent } from './share/menu/menu.component'
import { ProfileComponent } from './profile/profile.component'
import { CityListComponent } from './city-list/city-list.component'
import { LoginformComponent } from './loginform/loginform.component'
import { PlaceDetailsComponent } from './place-details/place-details.component'

//services
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service'
import { GuideService } from './services/guide.service'
import { AuthService } from './services/auth.service'
import { PointInterestService } from './services/point-interest.service'
// modules
import { FileSelectDirective } from "ng2-file-upload"

import {routes} from './routes'

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    IndexComponent,
    ProfileComponent,
    CityComponent,
    MenuComponent,
    PlaceDetailsComponent,
    CityListComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    IsLoggedInService,
    GuideService,
    PointInterestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
