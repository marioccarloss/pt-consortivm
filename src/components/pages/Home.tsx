import { Layout } from "components/templates/Layout";
import { WidgetWeather } from "components/organisms/WidgetWeather";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <Layout className={styles.home}>
      <WidgetWeather />
    </Layout>
  );
};
