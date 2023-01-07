import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Heading.module.scss";

type HeadingProps<C extends ElementType> = {
  as?: C;
  size?: "3xl" | "2xl" | "xl" | "lg" | "md" | "sm";
  fw?: "demiLight" | "regular" | "medium" | "bold";
  color?: "default" | "darkgray" | "gray" | "lightgray" | "light";
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

function Heading<C extends ElementType = "h1">({
  as,
  size = "lg",
  fw = "regular",
  color = "default",
  children,
  ...restProps
}: HeadingProps<C>) {
  const Component = as || "h1";

  return (
    <Component
      className={clsx(
        styles.text,
        styles[`${size}`],
        styles[`${fw}`],
        styles[`${color}`]
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Heading;
