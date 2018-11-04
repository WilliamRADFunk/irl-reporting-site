import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Control, Icon, Layer, Map, TileLayer } from 'leaflet';
import * as L from 'leaflet';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

interface Observation {
  latitude: number;
  longitude: number;
  observation: any;
  reportedDateTime: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnDestroy, OnInit {
  private baseLayer: TileLayer;
  private layers: Layer[] = [];
  private map: Map;
  @ViewChild('mapid') mapid: HTMLElement;
  private rawData: {
    algae: Observation[];
    deadAnimals: Observation[];
    deadFish: Observation[];
    garbage: Observation[];
    healthEffects: Observation[];
    microorganisms: Observation[];
    other: Observation[];
    scent: Observation[];
    vegetation: Observation[];
    waterClarity: Observation[]; };
  private layerControl: Control.Layers;
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
    this.subscriptions = [];
    this.layers.filter(l => l && l.closePopup());
    this.layers = [];
  }
  /**
   * Angular life hook called when bound variables are resolved, but before anything else.
   */
  ngOnInit() {
    this.map = L.map('mapid').setView([28.2552946, -80.6761641], 9);
    this.baseLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?' +
      'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(this.map);

    this.subscriptions.push(this.currentRoute.data
      .subscribe(data => {
        console.log('rawData', data.data);
        this.rawData = data.data || null;
        this.updateMap();
      }));
  }
  /**
   * Called to grab the geo data for map population.
   */
  private updateMap(): void {
    this.layerControl = L.control.layers({ 'Open Street': this.baseLayer }).addTo(this.map);
    const scentLayers = [];
    this.rawData.scent.forEach(x => {
      scentLayers.push(L.circle([x.latitude, x.longitude], {
        color: 'yellow',
        fillColor: '#fff',
        fillOpacity: 0.5,
        radius: 500
      })
      .bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>Odor</td>
          </tr>
          <tr>
            <td>Smells like</td>
            <td>${x.observation}</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const scentGroup = L.layerGroup(scentLayers).addTo(this.map);
    this.layers.push(scentGroup);
    this.layerControl.addOverlay(scentGroup, 'Odor');
    const waterClarityLayers = [];
    this.rawData.waterClarity.forEach(x => {
      waterClarityLayers.push(L.circle([x.latitude, x.longitude], {
        color: 'brown',
        fillColor: '#725703',
        fillOpacity: 0.5,
        radius: 500
      }).bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>Water Clarity</td>
          </tr>
          <tr>
            <td>Blocked Visibility</td>
            <td>${x.observation}% Opaque</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const waterClarityGroup = L.layerGroup(waterClarityLayers).addTo(this.map);
    this.layers.push(waterClarityGroup);
    this.layerControl.addOverlay(waterClarityGroup, 'Water Clarity');
    const algaeLayers = [];
    this.rawData.algae.forEach(x => {
      algaeLayers.push(L.circle([x.latitude, x.longitude], {
        color: 'green',
        fillColor: '#21C36F',
        fillOpacity: 0.5,
        radius: 500
      })
      .bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>Algae Blooms</td>
          </tr>
          <tr>
            <td>Bloom Color</td>
            <td>${x.observation.color}</td>
          </tr>
          <tr>
            <td>Bloom on Shore</td>
            <td>${!!x.observation.onShore}</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const algaeGroup = L.layerGroup(algaeLayers).addTo(this.map);
    this.layers.push(algaeGroup);
    this.layerControl.addOverlay(algaeGroup, 'Algae');
    const deadAnimalsLayers = [];
    this.rawData.deadAnimals.forEach(x => {
      deadAnimalsLayers.push(L.marker([x.latitude, x.longitude], { icon: new Icon({
        iconUrl:       'assets/images/marker-icon-red.png',
        iconRetinaUrl: 'assets/images/marker-icon-2x-red.png',
        shadowUrl:     'assets/images/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize:  [41, 41]
      })})
      .bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>Dead Animals</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>${x.observation.type}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>${x.observation.quantity}</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const deadAnimalsGroup = L.layerGroup(deadAnimalsLayers).addTo(this.map);
    this.layers.push(deadAnimalsGroup);
    this.layerControl.addOverlay(deadAnimalsGroup, 'Dead Animals');
    const deadFishLayers = [];
    this.rawData.deadFish.forEach(x => {
      deadFishLayers.push(L.marker([x.latitude, x.longitude], { icon: new Icon({
        iconUrl:       'assets/images/marker-icon-violet.png',
        iconRetinaUrl: 'assets/images/marker-icon-2x-violet.png',
        shadowUrl:     'assets/images/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize:  [41, 41]
      })})
      .bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>Dead Fish</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>${x.observation.quantity}</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const deadFishGroup = L.layerGroup(deadFishLayers).addTo(this.map);
    this.layers.push(deadFishGroup);
    this.layerControl.addOverlay(deadFishGroup, 'Dead Fish');
    const garbageLayers = [];
    this.rawData.garbage.forEach(x => {
      garbageLayers.push(L.marker([x.latitude, x.longitude], { icon: new Icon({
        iconUrl:       'assets/images/marker-icon-yellow.png',
        iconRetinaUrl: 'assets/images/marker-icon-2x-yellow.png',
        shadowUrl:     'assets/images/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize:  [41, 41]
      })})
      .bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>Garbage</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>${x.observation.type}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>${x.observation.quantity}</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const garbageGroup = L.layerGroup(garbageLayers).addTo(this.map);
    this.layers.push(garbageGroup);
    this.layerControl.addOverlay(garbageGroup, 'Garbage');
    const healthEffectsLayers = [];
    this.rawData.healthEffects.forEach(x => {
      healthEffectsLayers.push(L.marker([x.latitude, x.longitude], { icon: new Icon({
        iconUrl:       'assets/images/marker-icon-black.png',
        iconRetinaUrl: 'assets/images/marker-icon-2x-black.png',
        shadowUrl:     'assets/images/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize:  [41, 41]
      })})
      .bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>HealthEffects</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>${x.observation.type}</td>
          </tr>
          <tr>
            <td>Severity</td>
            <td>${x.observation.severity}</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const healthEffectsGroup = L.layerGroup(healthEffectsLayers).addTo(this.map);
    this.layers.push(healthEffectsGroup);
    this.layerControl.addOverlay(healthEffectsGroup, 'Health Effects');
    const micororganismsLayers = [];
    this.rawData.microorganisms.forEach(x => {
      micororganismsLayers.push(L.marker([x.latitude, x.longitude], { icon: new Icon({
        iconUrl:       'assets/images/marker-icon-green.png',
        iconRetinaUrl: 'assets/images/marker-icon-2x-green.png',
        shadowUrl:     'assets/images/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize:  [41, 41]
      })})
      .bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>Micororganisms</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const micororganismsGroup = L.layerGroup(micororganismsLayers).addTo(this.map);
    this.layers.push(micororganismsGroup);
    this.layerControl.addOverlay(micororganismsGroup, 'Micororganisms');
    const otherLayers = [];
    this.rawData.microorganisms.forEach(x => {
      otherLayers.push(L.marker([x.latitude, x.longitude], { icon: new Icon({
        iconUrl:       'assets/images/marker-icon-grey.png',
        iconRetinaUrl: 'assets/images/marker-icon-2x-grey.png',
        shadowUrl:     'assets/images/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize:  [41, 41]
      })})
      .bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>Other</td>
          </tr>
          <tr>
            <td>Comment</td>
            <td>${x.observation}</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const otherGroup = L.layerGroup(otherLayers).addTo(this.map);
    this.layers.push(otherGroup);
    this.layerControl.addOverlay(otherGroup, 'Other');
    const vegetationLayers = [];
    this.rawData.microorganisms.forEach(x => {
      vegetationLayers.push(L.marker([x.latitude, x.longitude], { icon: new Icon({
        iconUrl:       'assets/images/marker-icon-green.png',
        iconRetinaUrl: 'assets/images/marker-icon-2x-green.png',
        shadowUrl:     'assets/images/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize:  [41, 41]
      })})
      .bindPopup(`
        <table class="table table-striped">
          <tr>
            <td>Category</td>
            <td>Vegetation</td>
          </tr>
          <tr>
            <td>Damage</td>
            <td>${x.observation}</td>
          </tr>
          <tr>
            <td>Reported</td>
            <td>${new Date(x.reportedDateTime)}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Lat: ${x.latitude} | Lng: ${x.longitude}</td>
          </tr>
        </table>`));
    });
    const vegetationGroup = L.layerGroup(vegetationLayers).addTo(this.map);
    this.layers.push(vegetationGroup);
    this.layerControl.addOverlay(vegetationGroup, 'Vegetation');
  }
}
