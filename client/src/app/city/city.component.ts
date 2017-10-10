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
  interest: any = []
  points: object;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public buscadorService: BuscadorService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro recibido es: ${params['city']}`);
      console.log('esto es params', params)
      this.buscadorService.getPoint(params['city'])
        .subscribe( churro => {
          this.interest=churro
          console.log('Vamos imprimiendo ruta a fotos =>')
          for(let i = 0; i<this.interest.length; i++){
            console.log(`El ID de la foto es ${i}`, this.interest[i].photos[0].photo_reference)

          }
        })
        // this.buscadorService.getMarker(params['city'])
        // .map(m => {this.marker.push(m); console.log("esto es marker", this.marker)})
        // .subscribe()
    });

  }

}
