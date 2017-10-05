import { Component, OnInit } from '@angular/core';
import {MapService} from '../services/map.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],

})
export class MapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  listDescriptionsPoints: Array<any>
  descriptionPoints:any = []

  constructor(public mapService: MapService) { }

  ngOnInit() {
    console.log('LISTA DE SITIOS')
    this.mapService.getPoint().subscribe(result => {
      for(let i= 0; i < result.results.length; i++){
          this.descriptionPoints.push(result.results[i].name)
          console.log(this.descriptionPoints)
      }
        this.descriptionPoints 
    })
  }

}
