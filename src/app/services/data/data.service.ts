import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const INTERFACE_URL = 'http://www.williamrobertfunk.com';
const DATA_URL = 'http://68.183.123.72:3000/';

@Injectable()
export class DataService {

  constructor(private readonly http: HttpClient) { }

  getTodayData() {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
    
    return this.http.get<any>(`${DATA_URL}data/today`, {headers});
  }
  getWeekData() {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
    
    return this.http.get<any>(`${DATA_URL}data/week`, {headers});
  }
  getMonthData() {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
    
    return this.http.get<any>(`${DATA_URL}data/month`, {headers});
  }
}
