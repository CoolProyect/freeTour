import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'

@Injectable()
export class GuideService {

  BASEURL = environment.BASEURL;

  constructor(private http: Http) { }
      private options = { withCredentials: true }
  getList() {
    return this.http.get(`${this.BASEURL}/guides`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASEURL}/guides/${id}`, this.options)
      .map((res) => res.json());
  }

  edit(guide) {
    return this.http.put(`${this.BASEURL}/guides/${guide.id}`, guide, this.options)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASEURL}/guides/${id}`, this.options)
      .map((res) => res.json());
  }

}
