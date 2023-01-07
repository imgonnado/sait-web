import React from "react";
import clsx from "clsx";
import styles from "./Radio.module.scss";

interface RadioProps {
  children: React.ReactNode;
  id?: string;
  name?: string;
  textColor?: "primary";
  disabled?: boolean;
  checked?: boolean;
}

function Radio({
  children,
  id,
  name,
  textColor,
  disabled,
  checked,
}: RadioProps) {
  return (
    <>
      <input
        type="radio"
        className={styles.radio}
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
      />
      <label
        className={clsx(styles.radioLabel, textColor && styles[`${textColor}`])}
        htmlFor={id}
      >
        {children}
      </label>
    </>
  );
}

export default Radio;
