import { ReactNode } from "react";

type ContainerProp = {
  children: ReactNode;
  size?: "lg" | "md" | "sm" | "xl";
};

const Container = ({ children, size = "md" }: ContainerProp) => {
  return <div className={`container container--${size}`}>{children}</div>;
};

export default Container;
