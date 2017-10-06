import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment'



@Injectable()
export class BuscadorService {
  private options = { withCredentials: true }

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: Http) { }

  getPoint(city) {
    return this.http.get(`${this.BASE_URL}/point-interest/gmaps/?city=${city}`, this.options)
      .map((res) => res.json());
  }

  

}
