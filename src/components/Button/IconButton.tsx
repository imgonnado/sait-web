import React from "react";
import clsx from "clsx";
import styles from "./IconButton.module.scss";

interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  iconType?:
    | "home"
    | "search"
    | "alarm"
    | "my"
    | "more"
    | "close"
    | "writing"
    | "setting";
}

function IconButton({ children, className, iconType }: IconButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        styles.btnIcon,
        className,
        iconType && styles[`ico_${iconType}`]
      )}
    >
      <span className={styles.hiddenText}>{children}</span>
    </button>
  );
}

export default IconButton;
