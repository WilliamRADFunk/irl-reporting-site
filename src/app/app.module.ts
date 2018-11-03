import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MapComponent } from './components/map/map.component';
import { TimePanelComponent } from './components/time-panel/time-panel.component';

@NgModule({
  declarations: [ AppComponent, HomeComponent, AboutComponent, MapComponent, TimePanelComponent ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
