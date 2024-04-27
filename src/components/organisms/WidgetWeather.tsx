import { memo } from "react";

import { Header } from "components/organisms/Header";
import { Tabs } from "components/molecules/Tabs";
import { Tab } from "components/atoms/Tab";
import { TabContent } from "components/organisms/TabContent";

import { useWeatherContext } from "hooks/useWeather";

const WidgetWeather = memo(() => {
  const { weatherData } = useWeatherContext();
  return (
    <>
      <Header />
      <Tabs>
        {weatherData.map((data, index) => (
          <Tab key={`${index * Math.random()}`} title={data.category}>
            <TabContent data={data.data} />
          </Tab>
        ))}
      </Tabs>
    </>
  );
});

WidgetWeather.displayName = "WidgetWeather";

export { WidgetWeather };
