import { Component } from '@angular/core';
import {WeatherDto} from "../../models/WeatherDto";
import {FakeData} from "../../mock/FakeData";
import {DateTime} from "ts-luxon";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {

  weatherData: WeatherDto

  constructor() {
    this.weatherData = (new FakeData()).getBerlinWeather();
  }

  getWeatherIcon(): string {
    if (this.weatherData.weather && this.weatherData.weather.length > 0) {
      return this.weatherData.weather!![0].icon!!;
    }
    return '00d';
  }

  getDescription(): string {
    if (this.weatherData.weather && this.weatherData.weather.length > 0) {
      return this.weatherData.weather!![0].description!!;
    }
    return 'No description available';
  }

  getCurrentDay(): string {
    return DateTime.now().toFormat('EEEE');
  }

  getCurrentTime(): string {
    return DateTime.now().toFormat('hh:mm a');
  }

  getSunriseTime(): string {
    if (this.weatherData.sys && this.weatherData.sys!!.sunrise) {
      return DateTime.fromSeconds(this.weatherData.sys!!.sunrise!!).toFormat('hh:mm a');
    }
    return '--:--'
  }
}
