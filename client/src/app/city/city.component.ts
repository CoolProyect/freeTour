//devuelve los puntos de interes de la ciudad seleciionada
import { Component, OnInit } from '@angular/core'
import { PointInterestService } from '../services/point-interest.service'
import { ActivatedRoute, Router } from '@angular/router'
import { BuscadorService } from '../services/buscador.service'
import 'rxjs'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {
    ciudad: any;
    mapReady:boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public buscadorService: BuscadorService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro recibido es: ${params['city']}`);
      console.log('esto es params', params)
      this.ciudad = params['city'].toUpperCase()
      this.buscadorService.getPoint(params['city']).subscribe();
    })
  }
}
