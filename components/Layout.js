import React from "react";

import styles from "../styles/Layout.module.scss";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
