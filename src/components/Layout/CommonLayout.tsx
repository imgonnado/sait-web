import clsx from "clsx";
import React, { ReactElement } from "react";

import Header from "./Header/Header";
import GNB from "./NavigationBar/GNB";

import styles from "./CommonLayout.module.scss";

interface CommonLayoutProps {
  children: React.ReactNode;
}

export default function CommonLayout({
  children,
}: CommonLayoutProps): ReactElement {
  return (
    <div className={styles.wrap}>
      <Header />
      <main id="main_content" className={clsx(styles.content, styles.main)}>
        {children}
      </main>
      <GNB />
    </div>
  );
}
