import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MapComponent } from './components/map/map.component';
import { TimePanelComponent } from './components/time-panel/time-panel.component';
import { TodayResolver } from './resolvers/today/today.resolver';
import { DataService } from './services/data/data.service';
import { WeekResolver } from './resolvers/week/week.resolver';
import { MonthResolver } from './resolvers/month/month.resolver';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MapComponent,
    TimePanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  schemas: [],
  providers: [ DataService, TodayResolver, WeekResolver, MonthResolver ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
