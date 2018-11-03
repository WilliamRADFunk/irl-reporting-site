import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnDestroy, OnInit {
  map;
  @ViewChild('mapid') mapid: HTMLElement;
  pathState: string;
  subscription: Subscription = null;

  constructor(private readonly currentRoute: ActivatedRoute) { }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  ngOnInit() {
    this.subscription = this.currentRoute.url
      .subscribe((segments: UrlSegment[]) => {
        this.pathState = segments[0]['path'];
        this.fetchData();
      });
    this.map = L.map('mapid').setView([28.2552946, -80.6761641], 10);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(this.map);
  }
  private fetchData(): void {
    console.log('Fetching Date for ', this.pathState);
  }
}
