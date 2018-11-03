import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const INTERFACE_URL = 'http://www.williamrobertfunk.com';
const DATA_URL = 'http://68.183.123.72:3000/';

@Injectable()
export class DataService {

  constructor(private readonly http: HttpClient) { }

  getTodayData() {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', INTERFACE_URL)
      .set('Access-Control-Allow-Methods', 'POST, GET')
      .set('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type')
      .set('Access-Control-Max-Age', '86400');
    return this.http.get<any>(`${DATA_URL}data/today`, {headers});
  }
}
