import { Routes } from '@angular/router'


import { CityComponent } from './city/city.component'
import { CityListComponent } from './city-list/city-list.component'
import { IndexComponent } from './index/index.component'
import { MenuComponent } from './share/menu/menu.component' //como hacer para que aparezca en todas, necesita route?
import { PlaceDetailsComponent } from './place-details/place-details.component'
import { ProfileComponent } from './profile/profile.component'
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service'
import { LoginformNewComponent } from './loginform-new/loginform-new.component';
import { SignupformNewComponent } from './signupform-new/signupform-new.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'city/list', component: CityListComponent },
  { path: 'city/:city', component: CityComponent },
  { path: 'city/details/:id', component: PlaceDetailsComponent },
  { path: 'login', component: LoginformNewComponent },
  { path: 'signup', component: SignupformNewComponent },

  {
    path: 'user',
    component: ProfileComponent,
    canActivate: [IsLoggedInService]
  },
  { path: '**', redirectTo: '' }
];
