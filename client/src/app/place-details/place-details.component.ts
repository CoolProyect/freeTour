import { Component, OnInit } from '@angular/core'
import {GuideService} from '../services/guide.service'
import {ActivatedRoute, Router} from '@angular/router'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  guide;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private guideService: GuideService) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
          this.getGuideDetails(params['id'])
        });  }


        getGuideDetails(id) {
    this.guideService.get(id)
      .subscribe((guide) => {
        this.guide = guide
      });
  }
  deleteGuide() {
    if (window.confirm('Are you sure?')) {
      this.guideService.remove(this.guide._id)
        .subscribe(() => {
          this.router.navigate([''])
        });
    }
  }

}
