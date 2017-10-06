import { Component, OnInit } from '@angular/core'
import {BuscadorService } from '../services/buscador.service'
import { Observable } from 'rxjs/Observable'


interface BuscadorForm{
  city:string

}

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  formInfo:BuscadorForm = {
    city:""
  }

  constructor(public buscadorService: BuscadorService) { }

  ngOnInit() {

  }
    buscar(){
      const {city} = this.formInfo
      if(city != ""){
        console.log(`Has buscado ${city} `)
          this.buscadorService.getPoint(city)
          .map( p => console.log(p) )
          .subscribe()
      }else{
          console.log("Pon una ciudad PENDEJO!!!!");
      }
    }
}
