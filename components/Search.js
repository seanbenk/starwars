import React from "react";

import styles from "../styles/Search.module.scss";

function Search({ onChange, placeholder }) {
  return (
    <input
      className={styles.container}
      onChange={onChange}
      placeholder={placeholder}
      label={placeholder}
    ></input>
  );
}

export default Search;
