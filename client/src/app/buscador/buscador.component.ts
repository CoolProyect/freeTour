import { Component, OnInit } from '@angular/core'
import { BuscadorService } from '../services/buscador.service'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'

interface BuscadorForm {
  city: string

}

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  formInfo: BuscadorForm = {
    city: ""
  }

  constructor(public buscadorService: BuscadorService, public router: Router) { }

  ngOnInit() {

  }
  buscar() {
    console.log("entro")
    this.router.navigate(["/city", this.formInfo.city])
  }
}
