import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Heading.module.scss";

type HeadingProps<C extends ElementType> = {
  as?: C;
  size?: "sm" | "md" | "lg" | "xl";
  fw?: "demiLight" | "regular" | "medium" | "bold";
  color?: "black-300" | "black-200" | "black-100" | "black-0";
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

function Heading<C extends ElementType = "h1">({
  as,
  size = "lg",
  fw = "regular",
  color = "black-300",
  children,
  ...restProps
}: HeadingProps<C>) {
  const Component = as || "h1";

  return (
    <Component
      className={clsx(styles.text, styles[size], styles[fw], styles[color])}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Heading;
