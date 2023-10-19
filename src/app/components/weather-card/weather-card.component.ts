import { Component } from '@angular/core';
import {WeatherDto} from "../../models/WeatherDto";
import {FakeData} from "../../mock/FakeData";
import {DateTime} from "ts-luxon";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {

  isLoading: boolean = true;
  weatherData?: WeatherDto

  constructor(private weatherService: WeatherService) {
    this.updateCity('Berlin');
  }

  updateCity(city: string) {
    this.isLoading = true;
    this.weatherService.getWeatherData(city).subscribe((result) => {
      if (result) {
        this.weatherData = result;
      }
      else {
        console.log('Error');
      }
      this.isLoading = false;
    });
  }

  getWeatherIcon(): string {
    if (this.weatherData?.weather && this.weatherData.weather.length > 0) {
      return this.weatherData.weather!![0].icon!!;
    }
    return '00d';
  }

  getDescription(): string {
    if (this.weatherData?.weather && this.weatherData.weather.length > 0) {
      return this.weatherData.weather!![0].description!!;
    }
    return 'No description available';
  }

  getCurrentDay(): string {
    return DateTime.now().toFormat('EEEE');
  }

  getCurrentTime(): string {
    let time = DateTime.now()
    time.setZone('UTC');
    time.plus({minute: (this.weatherData?.timezone ?? 0)});
    return time.toFormat('hh:mm a');
  }

  getSunriseTime(): string {
    if (this.weatherData?.sys && this.weatherData.sys!!.sunrise) {
      return DateTime.fromSeconds(this.weatherData.sys!!.sunrise!!).toFormat('hh:mm a');
    }
    return '--:--'
  }
}
