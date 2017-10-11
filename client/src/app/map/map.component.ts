import { Component, OnInit } from '@angular/core'
import { PointInterestService } from '../services/point-interest.service'
import { ActivatedRoute, Router } from '@angular/router'
import { BuscadorService } from '../services/buscador.service'
import { MapService } from '../services/map.service'
import 'rxjs'



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent implements OnInit {

  lat: number;
  lng: number;
  markersCity: any;

  constructor(
    public buscadorService: BuscadorService,
    public mapService: MapService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      console.log("esperando")
      this.markersCity = this.buscadorService.getMarkerToMap();
      console.log(this.markersCity)
      this.lat = this.markersCity[0].lat
      this.lng = this.markersCity[0].lng


    }, 1000);

  }
}
