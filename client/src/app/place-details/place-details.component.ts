import { Component, OnInit } from '@angular/core'
import {GuideService} from '../services/guide.service'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  guides;
  constructor(public guideService:GuideService) { }

  ngOnInit() {
    this.guideService.getList().subscribe(result => this.guides = result)
  }

}
