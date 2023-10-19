import {WeatherDto} from "../models/WeatherDto";

export class FakeData {

  getBerlinWeather(): WeatherDto {
    return {
      "coord": {
        "lon": 13.4105,
        "lat": 52.5244
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 14.94,
        "feels_like": 14.66,
        "temp_min": 12.83,
        "temp_max": 16.67,
        "pressure": 1009,
        "humidity": 83
      },
      "visibility": 10000,
      "wind": {
        "speed": 5.66,
        "deg": 260
      },
      "clouds": {
        "all": 75
      },
      "dt": 1696509839,
      "sys": {
        "type": 2,
        "id": 2011538,
        "country": "DE",
        "sunrise": 1696482803,
        "sunset": 1696523773
      },
      "timezone": 7200,
      "id": 2950159,
      "name": "Berlin",
      "cod": 200
    }
  }

}
