import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Map } from 'leaflet';
import * as L from 'leaflet';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnDestroy, OnInit {
  private map: Map;
  @ViewChild('mapid') mapid: HTMLElement;
  private pathState: string;
  private rawData;
  private subscriptions: Subscription[] = [];
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
    this.subscriptions.filter(s => s && s.unsubscribe());
  }
  /**
   * Angular life hook called when bound variables are resolved, but before anything else.
   */
  ngOnInit() {
    this.subscriptions.push(this.currentRoute.data
      .subscribe(data => {
        console.log('rawData', data.data);
        this.rawData = data.data || null;
      }));
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
  private updateMap(): void {
    console.log('Fetching Date for ', this.pathState);
  }
}
