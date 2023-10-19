import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {WeatherDto} from "../models/WeatherDto";
import {constants} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APP_ID: string;

  constructor(private http: HttpClient) {
    this.APP_ID = constants.weather_api_key;
  }

  getWeatherData(city: string): Observable<WeatherDto> {
    return this.http.get<WeatherDto>(
      `https://api.openweathermap.org/data/2.5/weather?appid=${this.APP_ID}&units=metric&q=${city}`,
    );
  }

}
