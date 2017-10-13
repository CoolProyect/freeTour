//descripcion de cada punto de interes
import { Component, OnInit } from '@angular/core'
import { PointInterestService } from '../services/point-interest.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { BuscadorService } from '../services/buscador.service'
import {Location} from '@angular/common';
import 'rxjs'


@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],
})
export class PlaceDetailsComponent implements OnInit {
  photoID: any = []
  details: any = []
  wiki: any
  geoobject:Array<any> = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public buscadorService: BuscadorService,
    private _location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('esto es params', params)
      this.buscadorService.getDetails(params.id)
        .subscribe(d => {
          this.details = d
          console.log('get deatails del component', this.details)
          console.log('LOCALIZAION', this.details.geometry.location)
          this.geoobject = [{geo:this.details.geometry.location}]
          //this.buscadorService.getMarkers(this.details.geometry.location)
        })
    })
  }
  backClicked() {
       this._location.back();
   }
}
