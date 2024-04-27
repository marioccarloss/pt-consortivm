import { memo } from "react";
import { Weather } from "types/Weather.d";

import { useWeatherContext } from "hooks/useWeather";

import styles from "./TabContent.module.scss";
import { Typography } from "../atoms/Typography";

type TabContentProps = {
  data: Weather[];
};

type HandleItemClickProps = {
  item: Weather;
  index: number;
};

const TabContent = memo(({ data }: TabContentProps) => {
  const { setSelectedWeather, setSelectedWeatherIndex, selectedWeatherIndex } =
    useWeatherContext();

  const handleItemClick = ({ item, index }: HandleItemClickProps) => {
    setSelectedWeather(item);
    setSelectedWeatherIndex(index);
  };

  return (
    <div className={styles.tabContent}>
      {data.length > 0 ? (
        <ul className={styles.tabContent__list}>
          {data.map((item, index) => (
            <li
              key={`${index * Math.random()}`}
              className={`${styles.tabContent__item} ${
                selectedWeatherIndex === index ? styles.active : ""
              }`}
            >
              <time>{item.time}</time>
              <button onClick={() => handleItemClick({ item, index })}>
                <strong>{item.day.slice(0, 3)}</strong>
                <img src={item.icon} alt={item.day} />
                <footer>
                  <b>{`${item.temperature}°`}</b>
                  <span>{`${item.feelsLike}°`}</span>
                </footer>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.tabContent__empty}>
          <Typography mode="strong">No data available</Typography>
        </div>
      )}
    </div>
  );
});

TabContent.displayName = "TabContent";

export { TabContent };
