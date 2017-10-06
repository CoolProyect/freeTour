//descripcion de cada punto de interes

import { Component, OnInit } from '@angular/core'
import { PointInterestService } from '../services/point-interest.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  place;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pointInterestService: PointInterestService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPointDetails(params['id'])
    });
  }


  getPointDetails(id) {
    this.pointInterestService.get(id)
      .subscribe((place) => {
        this.place = place
      });
  }
  deletePoint() {
    if (window.confirm('Are you sure?')) {
      this.pointInterestService.remove(this.place._id)
        .subscribe(() => {
          this.router.navigate([''])
        });
    }
  }

}
