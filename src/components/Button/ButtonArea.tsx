import React from "react";

import styles from "./ButtonArea.module.scss";

interface ButtonAreaProps {
  children: React.ReactNode;
}

function ButtonArea({ children }: ButtonAreaProps) {
  return <div className={styles.btnArea}>{children}</div>;
}

export default ButtonArea;
