import { Routes } from '@angular/router'


import { CityComponent } from './city/city.component'
import { CityListComponent } from './city-list/city-list.component'
import { IndexComponent } from './index/index.component'
import { LoginformComponent } from './loginform/loginform.component'
import { MenuComponent } from './share/menu/menu.component' //como hacer para que aparezca en todas, necesita route?
import { PlaceDetailsComponent } from './place-details/place-details.component'
import { ProfileComponent } from './profile/profile.component'
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service'

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'city/list', component: CityListComponent },
    { path: 'city/:city', component: CityComponent },
    { path: 'city/:id/placeDetails/:id', component: PlaceDetailsComponent },
    { path: 'login', component: LoginformComponent },
    { path: 'user',
      component: ProfileComponent,
      canActivate: [ IsLoggedInService ]  },
    { path: '**', redirectTo: '' }
];
