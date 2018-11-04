import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DataService } from '../../services/data/data.service';

@Injectable()
export class TodayResolver implements Resolve<Observable<any>> {

  constructor(private readonly dataService: DataService) { }

    resolve() {
      return this.dataService.getTodayData();
    }

}
