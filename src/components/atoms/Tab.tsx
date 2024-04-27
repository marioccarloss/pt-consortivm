import { memo, ReactNode } from "react";

type TabProps = {
  title: string;
  children: ReactNode;
};

const Tab = memo(({ title, children }: TabProps) => {
  return <div aria-label={title}>{children}</div>;
});

Tab.displayName = "Tab";

export { Tab };
