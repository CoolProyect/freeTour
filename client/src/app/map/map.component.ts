import { Component, OnInit } from '@angular/core';
import {MapService} from '../services/map.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  listPoint: object;
  listDescriptionsPoints: Array<any>

  constructor(public mapService: MapService) { }

  ngOnInit() {
    console.log('LISTA DE SITIOS')
    this.mapService.getPoint().subscribe(result => {
      this.listPoint = result;
    //   this.mapService.getPointList(this.listPoint).subscribe(result => {
    //     this.listDescriptionsPoints = result;)
    //   console.log("PLACES", this.listPoint)
    })
  }

}
