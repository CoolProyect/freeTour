import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs'
import { environment } from '../../environments/environment'

const BASEURL = environment.BASEURL;

@Injectable()
export class MapService {

  private options = { withCredentials: true }


  constructor(private http: Http) { }

  getPoint() {
    return this.http.get(`${BASEURL}/test`, this.options)
      .map((res) => res.json())

  }

}
