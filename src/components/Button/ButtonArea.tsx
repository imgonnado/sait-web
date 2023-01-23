import React from "react";
import clsx from "clsx";
import styles from "./ButtonArea.module.scss";

interface ButtonAreaProps {
  children: React.ReactNode;
  className?: string;
  narrow?: "left" | "right";
}

function ButtonArea({ children, narrow, className }: ButtonAreaProps) {
  return (
    <div
      className={clsx(
        styles.btnArea,
        narrow === "left" && styles.left,
        narrow === "right" && styles.right,
        className
      )}
    >
      {children}
    </div>
  );
}

export default ButtonArea;
