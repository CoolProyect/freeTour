import { Component, OnInit } from '@angular/core'
import { PointInterestService } from '../services/point-interest.service'
import { ActivatedRoute, Router } from '@angular/router'
import { BuscadorService } from '../services/buscador.service'
import { MapService } from '../services/map.service'
import 'rxjs'

interface marker {
  nombre: string;
  center: {
    lat: number;
    lng: number;
  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent implements OnInit {
  markers: marker[] = [{
        nombre: 'Madrid',
        center: {lat: 40.417123,
        lng: -3.703565,
      }
  }]

  markersCity;
  constructor(
    public buscadorService: BuscadorService,
    public mapService: MapService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
  
  }
}
