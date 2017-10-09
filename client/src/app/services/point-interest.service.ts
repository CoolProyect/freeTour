import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'

const BASEURL:string = environment.BASEURL;

@Injectable()
export class PointInterestService {



  constructor(private http: Http) { }

     private options = { withCredentials: true }
  getList() {
    return this.http.get(`${BASEURL}/pointInterest`, this.options)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${BASEURL}/pointInterest/${id}`, this.options)
      .map((res) => res.json());
  }

  edit(pointInterest) {
    return this.http.put(`${BASEURL}/pointInterest/${pointInterest.id}`, pointInterest, this.options)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${BASEURL}/pointInterest/${id}`, this.options)
      .map((res) => res.json());
  }

}
