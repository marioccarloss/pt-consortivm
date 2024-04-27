import { createContext, useState, ReactNode, useMemo } from "react";
import { weatherInfo } from "mock/weather.data";
import { WeatherData, Weather } from "types/Weather.d";

interface WeatherContextType {
  weatherData: WeatherData[];
  selectedWeather?: Weather;
  setSelectedWeather: (_weather: Weather) => void;
  setSelectedWeatherIndex: (_index: number) => void;
  selectedWeatherIndex: number;
}

const initialState: WeatherContextType = {
  weatherData: weatherInfo,
  selectedWeather: weatherInfo[0]?.data[0],

  setSelectedWeather: (_weather: Weather) => {},
  setSelectedWeatherIndex: (_index: number) => {},
  selectedWeatherIndex: 0,
};

export const WeatherContext = createContext<WeatherContextType>(initialState);

export default function WeatherContextProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [weatherData, setWeatherData] = useState<WeatherData[]>(
    initialState.weatherData,
  );

  const [selectedWeather, setSelectedWeather] = useState<Weather | undefined>(
    initialState.selectedWeather,
  );

  const [selectedWeatherIndex, setSelectedWeatherIndex] = useState<number>(
    initialState.selectedWeatherIndex,
  );

  const handleSelectWeather = (weather: Weather) => {
    setSelectedWeather(weather);
  };

  const handleSelectWeatherIndex = (index: number) => {
    setSelectedWeatherIndex(index);
  };

  const contextValue = useMemo(() => {
    return {
      weatherData,
      setWeatherData,
      selectedWeather,
      setSelectedWeather: handleSelectWeather,
      selectedWeatherIndex,
      setSelectedWeatherIndex: handleSelectWeatherIndex,
    };
  }, [weatherData, selectedWeather, selectedWeatherIndex]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}
