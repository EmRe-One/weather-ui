export interface CoordItem {
  lat: number;
  lon: number;
}

export interface WeatherItem {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

export interface MainItem {
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  humidity?: number;
}
export interface WindItem {
  speed?: number;
  deg?: number;
}
export interface CloudsItem {
  all: number;
}
export interface SysItem {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
}
export interface WeatherDto {
  id?: number;
  name?: string;
  cod?: number;
  coord?: CoordItem;
  weather?: WeatherItem[];
  base?: string;
  main?: MainItem;
  visibility?: number;
  wind?: WindItem;
  clouds?: CloudsItem;
  dt?: number;
  sys?: SysItem;
  timezone?: number;
}
