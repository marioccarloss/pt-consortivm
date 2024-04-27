export interface WeatherData {
  category: string;
  data: Weather[];
}

export interface Weather {
  time: string;
  day: string;
  icon: string;
  temperature: number;
  feelsLike: number;
  precipitation: number;
  humidity: number;
  wind: number;
  status: string;
}
