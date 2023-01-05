import React from "react";
import clsx from "clsx";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  children: React.ReactNode;
  id?: string;
  name?: string;
  checkboxType?: "toggle";
  textColor?: "primary";
  disabled?: boolean;
}

function Checkbox({
  children,
  id,
  name,
  checkboxType,
  textColor,
  disabled,
}: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        className={clsx(
          styles.checkbox,
          checkboxType && styles[`${checkboxType}`]
        )}
        id={id}
        name={name}
        disabled={disabled}
      />
      <label
        className={clsx(
          styles.checkboxLabel,
          textColor && styles[`${textColor}`]
        )}
        htmlFor={id}
      >
        {children}
      </label>
    </>
  );
}

export default Checkbox;
