import React from "react";
import clsx from "clsx";

import styles from "./Backdrop.module.scss";

interface BackdropProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Backdrop({ children, isOpen, onClose }: BackdropProps) {
  return (
    <div
      className={clsx(styles.backdrop, isOpen && styles.open)}
      onClick={onClose}
    >
      {children}
    </div>
  );
}

export default Backdrop;
