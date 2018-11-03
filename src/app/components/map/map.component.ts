import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Map } from 'leaflet';
import * as L from 'leaflet';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnDestroy, OnInit {
  private map: Map;
  @ViewChild('mapid') mapid: HTMLElement;
  private pathState: string;
  private subscription: Subscription = null;
  /**
   * Class constructor for MapComponent
   * @param currentRoute service that tracks current route.
   */
  constructor(private readonly currentRoute: ActivatedRoute) { }
  /**
   * Angular life hook called just before component destruction.
   * Used to unsubscribe from all subscriptions.
   */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  /**
   * Angular life hook called when bound variables are resolved, but before anything else.
   */
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
  /**
   * Called to grab the geo data for map population.
   */
  private fetchData(): void {
    console.log('Fetching Date for ', this.pathState);
  }
}
