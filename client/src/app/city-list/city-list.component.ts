//Lista de de todas las ciudades

import { Component, OnInit } from '@angular/core';
import { GuideService } from '../services/guide.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  guides: object;
  constructor(public guideService: GuideService) {
    this.guideService.getList().subscribe(result => this.guides = result)

  }

  ngOnInit() {
  }


}
