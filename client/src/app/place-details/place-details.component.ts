//descripcion de cada punto de interes
import { Component, OnInit } from '@angular/core'
import { PointInterestService } from '../services/point-interest.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { BuscadorService } from '../services/buscador.service'
import 'rxjs'


@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  photoID: any = []
  arrIDs:Array<object>
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public buscadorService: BuscadorService) {
    }

  ngOnInit() {
    this.arrIDs = this.buscadorService.getPhoto()
    console.log(this.arrIDs)

    }
  }
