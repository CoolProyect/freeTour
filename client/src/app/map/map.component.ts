import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {

  lat: number = 40.417123;
  lng: number = -3.703565;
  points;

  constructor(public mapService: MapService) { }

  ngOnInit() {

  }

}
