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
  //photo: Array<object> = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public buscadorService: BuscadorService) { }

  ngOnInit() {
    let photoID = [];
    this.route.params.subscribe(params => {
      console.log(`El parametro recibido es: ${params['city']}`);
      console.log('esto es params', params)
      this.buscadorService.getPoint(params['city'])
        .subscribe( churro => {
          this.interest=churro
          console.log('Vamos imprimiendo ruta a fotos =>')
          console.log(this.interest)
          for(let i = 0; i<this.interest.length; i++){
            photoID.push({place: this.interest[i].name, ID:this.interest[i].photos[0].photo_reference})
          }
          console.log("City Component",photoID)
          this.buscadorService.setPhoto(photoID)
        })

    });

  }

}
