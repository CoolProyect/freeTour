//lista reducida de ciudades con su foto, pagina principal

import { Component, OnInit } from '@angular/core'
import {GuideService} from '../services/guide.service'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  guides;
  constructor(public guideService: GuideService) { }

  ngOnInit() {
    this.guideService.getList().subscribe(result => this.guides = result)
  }

}
