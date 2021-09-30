import React from "react";

import styles from "../styles/Layout.module.scss";
import Nav from "./Nav";
import Background from "./background/Background";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      <Background />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
