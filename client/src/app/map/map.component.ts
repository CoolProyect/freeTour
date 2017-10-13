import { Component, OnInit } from '@angular/core'
import { PointInterestService } from '../services/point-interest.service'
import { ActivatedRoute, Router } from '@angular/router'
import { BuscadorService } from '../services/buscador.service'
import { MapService } from '../services/map.service'
import 'rxjs'
import { Directive,  Input} from '@angular/core'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],

})

@Directive({
  selector: 'sebm-google-map-directions'
})

export class MapComponent implements OnInit {
  google: any;
  lat: number;
  lng: number;
  markersCity: any;
  zoom: number;
  @Input() origin;
  @Input() destination;


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
      this.zoom = 13

    }, 3000);



  }
}
