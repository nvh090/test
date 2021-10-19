import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  readonly endpoint = 'http://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly';

  constructor(private http: HttpClient) {
  }

  getStats(): Observable<(number | null)[]> {
    return this.http.get<(number | null)[]>(`${this.endpoint}`);
  }
}
