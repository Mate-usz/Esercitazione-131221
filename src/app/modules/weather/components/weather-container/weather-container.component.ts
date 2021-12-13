import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CityInfo } from '../../models/cityInfo';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {

  cityWeatherForm = new FormGroup({
    cityName: new FormControl('', [Validators.required])
  })

  subscription?: Subscription

  cityInfo?: CityInfo;

  constructor(
    private readonly weatherService: WeatherService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.subscription = this.weatherService.getWeather(this.cityWeatherForm.value.cityName)
      .subscribe(response => this.cityInfo = response);
  }
}
