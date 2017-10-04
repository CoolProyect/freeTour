import { Component, OnInit } from '@angular/core'
import {PointInterestService} from '../services/point-interest.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  points:object;
  constructor(public pointInterest:PointInterestService ) { }

  ngOnInit() {
    this.pointInterest.getList().subscribe(result => this.points = result)
  }

}
