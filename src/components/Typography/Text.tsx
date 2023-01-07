import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Text.module.scss";

type TextProps<C extends ElementType> = {
  as?: C;
  size?: "lg" | "md" | "sm" | "xs";
  fw?: "demiLight" | "regular" | "medium" | "bold";
  color?: "default" | "darkgray" | "gray" | "lightgray" | "light";
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

function Text<C extends ElementType = "p">({
  as,
  size = "lg",
  fw = "regular",
  color = "default",
  children,
  ...restProps
}: TextProps<C>) {
  const Component = as || "p";

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

export default Text;
