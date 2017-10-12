import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs'
import { Observable } from 'rxjs/Observable'
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

  getDetails(placeID) {
    console.log('estoy en funcion getDetails', placeID)
    return this.http.get(`${BASEURL}/point-interest/gmaps/details/?place=${placeID}`, this.options)
      .map((res) => res.json())
  }

// wikiDetails(details){
//   console.log(details)
//   return this.http.get(`https://es.wikipedia.org/w/api.php?action=opensearch&search=${details}&format=json`)
//   .map((res)=>res.json())
// }


}
