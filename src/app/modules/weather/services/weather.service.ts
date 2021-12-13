import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment';
import { CityInfo, IPartialCityInfo } from '../models/cityInfo';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private readonly http: HttpClient
  ) { }


  getWeather(city: string): Observable<CityInfo>{
    let params = new HttpParams();
    params = params.set('q', city);
    params = params.set('appid', environment.apiKey);
    params = params.set('lang', 'it');
    params = params.set('units', 'metric');

    return this.http.get<IPartialCityInfo>(`${environment.apiURL}/2.5/weather`, { params })
      .pipe(map(response => CityInfo.Build(response)));
  }
}
