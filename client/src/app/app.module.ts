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
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
