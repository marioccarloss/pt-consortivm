import { useEffect, useRef, memo, RefObject, useCallback } from "react";

import styles from "./TabTitle.module.scss";

import classNames from "shared/classNames";

type TabTitleProps = {
  title: string;
  index: number;
  setSelectedTab: (_index: number) => void;
  selectedTab: number;
  tabRef: RefObject<HTMLButtonElement>;
  onActiveTabPositionChange: (_position: number) => void;
  onActiveTabWidthChange: (_width: number) => void;
  onClicked: (_clicked: boolean) => void;
};

const TabTitle = memo(
  ({
    title,
    setSelectedTab,
    index,
    selectedTab,
    tabRef,
    onActiveTabPositionChange,
    onActiveTabWidthChange,
    onClicked,
  }: TabTitleProps) => {
    const titleRef = useRef<HTMLButtonElement>(null);
    const tabTitleClasses = classNames(styles.tab__title, {
      [styles.tab__titleActive]: index === selectedTab,
    });

    const handleClick = useCallback(() => {
      setSelectedTab(index);
      onClicked(true);
    }, [index, setSelectedTab, onClicked]);

    useEffect(() => {
      const handleResize = () => {
        if (titleRef.current || tabRef.current) {
          const positionTabTitle =
            titleRef.current?.getBoundingClientRect() ?? {
              x: 0,
            };

          const positionTab = tabRef.current?.getBoundingClientRect() ?? {
            x: 0,
          };

          const width = titleRef.current?.clientWidth ?? 0;

          if (index === selectedTab) {
            onActiveTabPositionChange(positionTabTitle.x - positionTab.x + 2.5);
            onActiveTabWidthChange(width - 2.5);
          }
        }
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [
      titleRef,
      tabRef,
      index,
      selectedTab,
      onActiveTabPositionChange,
      onActiveTabWidthChange,
    ]);

    return (
      <li>
        <button
          ref={titleRef}
          className={tabTitleClasses}
          onClick={handleClick}
        >
          <span>{title}</span>
        </button>
      </li>
    );
  },
);

TabTitle.displayName = "TabTitle";

export { TabTitle };
