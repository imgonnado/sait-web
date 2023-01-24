import React from "react";
import styles from "./Tab.module.scss";

interface TabProps {
  children: React.ReactNode;
}

function Tab({ children }: TabProps) {
  return (
    <div className={styles.tabArea}>
      <ul className={styles.tab}>{children}</ul>
    </div>
  );
}

export default Tab;
