import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class PointInterestService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/routes/pointInterest`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/routes/pointInterest/${id}`)
      .map((res) => res.json());
  }

  edit(pointInterest) {
    return this.http.put(`${this.BASE_URL}/routes/pointInterest/${pointInterest.id}`, pointInterest)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/routes/pointInterest/${id}`)
      .map((res) => res.json());
  }

}
