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
import { PlaceDetailsComponent } from './place-details/place-details.component'
import { MapComponent } from './map/map.component'
import { BuscadorComponent } from './buscador/buscador.component'
import { LoginformNewComponent } from './loginform-new/loginform-new.component';
import { SignupformNewComponent } from './signupform-new/signupform-new.component';

//services
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service'
import { AuthService } from './services/auth.service'
import { PointInterestService } from './services/point-interest.service'
import { MapService } from './services/map.service'
import { BuscadorService } from './services/buscador.service'
// modules
import { FileSelectDirective } from "ng2-file-upload"

import { routes } from './routes';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfileComponent,
    CityComponent,
    MenuComponent,
    PlaceDetailsComponent,
    CityListComponent,
    FileSelectDirective,
    MapComponent,
    FilterPipe,
    BuscadorComponent,
    LoginformNewComponent,
    SignupformNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDb2yy7qBIBYrlXY3J_XquVrC0xLmtiT3E',
      libraries: ["places"]
    })
  ],
  providers: [
    AuthService,
    IsLoggedInService,
    PointInterestService,
    MapService,
    BuscadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
