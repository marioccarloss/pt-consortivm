import { memo } from "react";
import { Typography } from "../atoms/Typography";

import { useWeatherContext } from "hooks/useWeather";

import styles from "./Header.module.scss";

const Header = memo(() => {
  const { selectedWeather: data } = useWeatherContext();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={data?.icon} alt={data?.day} />
        <Typography mode="title">{`${data?.feelsLike}`}</Typography>
        <Typography mode="strong">°C</Typography>
        <Typography>| °F</Typography>
        <ul className={styles.header__list}>
          <li>
            <Typography>{`Precipitation: ${data?.precipitation}%`}</Typography>
          </li>
          <li>
            <Typography>{`Humidity: ${data?.humidity}%`}</Typography>
          </li>
          <li>
            <Typography>{`Wind: ${data?.wind}km/h`}</Typography>
          </li>
        </ul>
      </div>
      <div className={styles.header__weather}>
        <Typography mode="subtitle">Weather</Typography>
        <Typography>{`${data?.day} ${data?.time}`}</Typography>
        <Typography>{`${data?.status}`}</Typography>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export { Header };
