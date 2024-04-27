import { useState, useRef, memo, ReactElement } from "react";
import { TabTitle } from "components/organisms/TabTitle";
import styles from "./Tabs.module.scss";

type TabsProps = {
  children: ReactElement[];
};

const Tabs = memo(({ children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [activeTabPosition, setActiveTabPosition] = useState<number>(0);
  const [activeTabWidth, setActiveTabWidth] = useState<number>(0);
  const tabRef = useRef<HTMLButtonElement>(null);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleActiveTabPositionChange = (position: number) => {
    setActiveTabPosition(position);
  };

  const handleActiveTabWidthChange = (width: number) => {
    setActiveTabWidth(width);
  };

  return (
    <section className={styles.weather}>
      <div className={styles.weather__header}>
        <ul className={styles.weather__list}>
          {children.map((item, index) => (
            <TabTitle
              key={`${index * Math.random()}`}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
              tabRef={tabRef}
              onActiveTabPositionChange={handleActiveTabPositionChange}
              onActiveTabWidthChange={handleActiveTabWidthChange}
              onClicked={setClicked}
            />
          ))}
        </ul>
        <div
          className={styles.weather__bottom}
          style={{
            left: `${activeTabPosition}px`,
            width: `${activeTabWidth}px`,
            transition: `${clicked ? "all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)" : ""}`,
          }}
        />
      </div>

      <div className={styles.weather__content}>{children[selectedTab]}</div>
    </section>
  );
});

Tabs.displayName = "Tabs";

export { Tabs };
