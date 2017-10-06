import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment'



@Injectable()
export class BuscadorService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: Http) { }

  getPoint(city) {
    return this.http.get(`${this.BASE_URL}/pointInterest/${city}`, city)
      .map((res) => res.json());
  }

}
