import React from "react";
import Link from "next/link";

import styles from "../styles/Nav.module.scss";
function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
