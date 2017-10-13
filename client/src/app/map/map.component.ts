import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { AgmMap } from '@agm/core';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent implements OnInit {
  @Input() markers:Array<any>;
  @ViewChild(AgmMap) agmMap;
  bounds: any;
  constructor() {
  }

  ngOnInit() {
      console.log(this.markers);
      this.agmMap.mapReady.subscribe(map => {
        this.bounds = new google.maps.LatLngBounds();
        this.markers.forEach(e => {
          var latlng = new google.maps.LatLng(e.geo.lat, e.geo.lng);
          this.bounds.extend(latlng);
        });
        map.fitBounds(this.bounds);
    		console.log("hola");
        //setTimeout(map.fitBounds(),2000);
	    });
  }
}
