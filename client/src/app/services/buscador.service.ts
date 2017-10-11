import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment'

const BASEURL: string = environment.BASEURL;

@Injectable()
export class BuscadorService {
  private options = { withCredentials: true }
  markers: any
  photo: any
  constructor(private http: Http) { }
 getPoint(city) {
    return this.http.get(`${BASEURL}/point-interest/gmaps/?city=${city}`, this.options)
      .map((res) => res.json())
  }

  getMarkers(marker) {
    this.markers = marker
    console.log(this.markers)

  }

  getMarkerToMap() {
    return this.markers
  }

  setPhoto(photosID) {
    this.photo = photosID
  }
  getPhoto() {
    return this.photo
  }


}
