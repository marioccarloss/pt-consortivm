import { memo, ReactNode } from "react";

import styles from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = memo(({ children, className }: ContainerProps) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
});

Container.displayName = "Container";

export { Container };
