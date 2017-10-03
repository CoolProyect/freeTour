import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { CityComponent } from './city/city.component';
import { MenuComponent } from './menu/menu.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { CityListComponent } from './city-list/city-list.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    IndexComponent,
    ProfileComponent,
    CityComponent,
    MenuComponent,
    PlaceDetailsComponent,
    CityListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
