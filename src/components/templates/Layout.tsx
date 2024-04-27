import { ReactNode } from "react";

import { Container } from "components/atoms/Container";

import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: Props) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};
