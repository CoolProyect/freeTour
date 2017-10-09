import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'



@Injectable()
export class PointInterestService {



  constructor(private http: Http) { }
     BASEURL = environment.BASEURL;
     private options = { withCredentials: true }
  getList() {
    return this.http.get(`${this.BASEURL}/pointInterest`, this.options)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASEURL}/pointInterest/${id}`, this.options)
      .map((res) => res.json());
  }

  edit(pointInterest) {
    return this.http.put(`${this.BASEURL}/pointInterest/${pointInterest.id}`, pointInterest, this.options)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASEURL}/pointInterest/${id}`, this.options)
      .map((res) => res.json());
  }

}
