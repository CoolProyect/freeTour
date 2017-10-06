//devuelve los puntos de interes de la ciudad seleciionada
import { Component, OnInit } from '@angular/core'
import {PointInterestService} from '../services/point-interest.service'
import {ActivatedRoute, Router} from '@angular/router'
import {BuscadorService} from '../services/buscador.service'
import  'rxjs'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  interest : Array<object>= []
  points:object;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    public buscadorService:BuscadorService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log(`El parametro recibido es: ${params['city']}`);
     console.log('esto es params', params)
       this.buscadorService.getPoint(params['city'])
         .map( p => {this.interest = p ; console.log(this.interest)})
         .subscribe()
   });

  }

}
// const {city} = this.formInfo
// if(city != ""){
//     this.buscadorService.getPoint(city)
//     .map( p => console.log(p) )
//     .subscribe()
// }else{
//     console.log("Pon una ciudad ");
// }
