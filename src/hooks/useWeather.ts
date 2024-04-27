import { useContext } from "react";
import { WeatherContext } from "context/weatherContext";

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};
