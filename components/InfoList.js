import React from "react";

import styles from "../styles/InfoList.module.scss";

function InfoList({ title, items, itemKey }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item[itemKey]}</li>
        ))}
      </ul>
    </div>
  );
}

export default InfoList;
