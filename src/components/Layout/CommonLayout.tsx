import clsx from "clsx";
import React, { ReactElement } from "react";

import Header from "./Header/Header";
import GNB from "./NavigationBar/GNB";
import Top from "../Top/Top";

import styles from "./CommonLayout.module.scss";

interface CommonLayoutProps {
  children: React.ReactNode;
  header?: boolean;
  top?: boolean;
  mainClassName?: string;
  mainStyles?: React.CSSProperties;
}

export default function CommonLayout({
  children,
  header = true,
  top = true,
  mainClassName,
  mainStyles,
}: CommonLayoutProps): ReactElement {
  return (
    <div className={styles.wrap}>
      {header && <Header />}
      {top && <Top />}
      <main
        id="main_content"
        className={clsx(styles.content, styles.main, mainClassName)}
        style={mainStyles}
      >
        {children}
      </main>
      <GNB />
    </div>
  );
}
