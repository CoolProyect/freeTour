import { Component, OnInit, Input, ViewChild, OnChanges} from '@angular/core';
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
  zoom: number = 13;
  ready: boolean = false;
  map: any;
  constructor() {
  }

  fitMarkers(){
    this.bounds = new google.maps.LatLngBounds();
    this.markers.forEach(e => {
      var latlng = new google.maps.LatLng(e.geo.lat, e.geo.lng);
      this.bounds.extend(latlng);
    });
    this.map.fitBounds(this.bounds);
    console.log("FITTED BOUNDS");
  }

  ngOnInit() {
      console.log("EL ARRAY DE LOS MARKERS", this.markers);
      this.agmMap.mapReady.subscribe(map => {
        this.map = map;
        this.fitMarkers();
        this.ready = true;
	    });
  }
  ngOnChanges(){
    if(this.ready){
      this.fitMarkers();
    }
  }
}
