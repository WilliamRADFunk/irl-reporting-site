import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../../services/data/data.service';

@Injectable()
export class MonthResolver implements Resolve<Observable<any>> {

  constructor(private readonly dataService: DataService) { }

    resolve() {
      return this.dataService.getMonthData();
    }

}
