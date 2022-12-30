import React from "react";
import clsx from "clsx";
import styles from "./ButtonArea.module.scss";

interface ButtonAreaProps {
  children: React.ReactNode;
  className?: string;
}

function ButtonArea({ children, className }: ButtonAreaProps) {
  return <div className={styles.btnArea}>{children}</div>;
}

export default ButtonArea;
