import { NgModule, ApplicationRef } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { AgmCoreModule } from '@agm/core'

// component
import { AppComponent } from './app.component'
import { CityComponent } from './city/city.component'
import { IndexComponent } from './index/index.component'
import { MenuComponent } from './share/menu/menu.component'
import { ProfileComponent } from './profile/profile.component'
import { CityListComponent } from './city-list/city-list.component'
import { LoginformComponent } from './loginform/loginform.component'
import { PlaceDetailsComponent } from './place-details/place-details.component'
import { MapComponent } from './map/map.component'

//services
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service'
import { GuideService } from './services/guide.service'
import { AuthService } from './services/auth.service'
import { PointInterestService } from './services/point-interest.service'
import { MapService } from './services/map.service'
// modules
import { FileSelectDirective } from "ng2-file-upload"

import {routes} from './routes';
import { FilterPipe } from './pipes/filter.pipe'


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
    FileSelectDirective,
    MapComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9W78WCMWZm69WxVpbW4toJk2owfu_R0M'
    })
  ],
  providers: [
    AuthService,
    IsLoggedInService,
    GuideService,
    PointInterestService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
