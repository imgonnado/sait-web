import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
  theme?: "primary" | "secondary" | "tertiary";
  size?: "small";
  width?: "narrow";
  disabled?: boolean;
} & ComponentPropsWithoutRef<C>;

function Button<C extends ElementType = "button">({
  as,
  children,
  theme,
  size,
  width,
  disabled,
  ...restProps
}: ButtonProps<C>) {
  const Component = as || "button";
  const aDisabled = Component === "a" ? disabled : undefined;
  const btnDisabled = Component === "button" ? disabled : undefined;

  return (
    <Component
      {...restProps}
      className={clsx(
        styles.btn,
        aDisabled && styles.disabled,
        size && styles.small,
        theme === "secondary" && styles.light,
        width === "narrow" && styles.btnFluid
      )}
      disabled={btnDisabled}
    >
      <span>{children}</span>
    </Component>
  );
}

export default Button;
