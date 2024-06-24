import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType } from "react";

import styles from "./Input.module.scss";

type InputProps<C extends ElementType = "input"> = {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<C>;

function Input({
  type = "text",
  placeholder = "텍스트를 입력해 주세요",
  disabled = false,
  isError = false,
  className,
  ...restProps
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(styles.input, isError && styles.err, className)}
      disabled={disabled}
      {...restProps}
    />
  );
}

export default Input;
