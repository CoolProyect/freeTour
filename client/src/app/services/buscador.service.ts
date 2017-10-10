import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment'

const BASEURL:string = environment.BASEURL;

@Injectable()
export class BuscadorService {
  private options = { withCredentials: true }
    markers: Array<object> = []
    photo: Array<object> = []


  constructor(private http: Http) { }

  getPoint(city) {
    return this.http.get(`${BASEURL}/point-interest/gmaps/?city=${city}`, this.options)
      .map((res) => res.json());
  }

  getMarker(city){
      return this.http.get(`${BASEURL}/point-interest/gmaps/?city=${city}`, this.options)
      .map((res) => res.json())
      .map((res)=> this.markers.push({place : res.name, location: res.geometry}))

    }

  getPhoto(city){
    return this.http.get(`${BASEURL}/point-interest/gmaps/?city=${city}`, this.options)
    .map((res)=> res.json())
    // .map((res) => this.photo.push({place: res.name, photoID: res.photos[0].photo_reference}))

  }

}
