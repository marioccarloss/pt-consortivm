import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import WeatherContextProvider from "./context/weatherContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
);
