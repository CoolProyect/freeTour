import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { Observable } from 'rxjs/Observable';


interface marker {
  nombre: string;
  lat: number;
  lng: number;

}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent implements OnInit {
  markers: marker[] = [{
    nombre: 'Madrid',
    lat: 40.417123,
    lng: -3.703565,

  }]

  points;
  constructor(public mapService: MapService) { }

  ngOnInit() {

  }
}
