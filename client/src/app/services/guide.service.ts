import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'

const BASEURL:string = environment.BASEURL;

@Injectable()
export class GuideService {


  constructor(private http: Http) { }
      private options = { withCredentials: true }
  getList() {
    return this.http.get(`${BASEURL}/guides`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${BASEURL}/guides/${id}`, this.options)
      .map((res) => res.json());
  }

  edit(guide) {
    return this.http.put(`${BASEURL}/guides/${guide.id}`, guide, this.options)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${BASEURL}/guides/${id}`, this.options)
      .map((res) => res.json());
  }

}
