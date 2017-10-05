import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class MapService {
URL: string = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=point+of+interest+madrid&key=AIzaSyBVW4ymH2YvTXTaVlO39qJ_Kna1Svpimqg'



 constructor(private http: Http) { }

 descriptionPoints: Array<any> = [];

 getPoint(){
   return this.http.get(`${this.URL}`)
     .map((res) => res.json());
 }

 getPointList(points){

  for(let i= 0; i < points.results; i++){
      this.descriptionPoints.push(points.results[i].name)
  }
      return this.descriptionPoints
 }
}
