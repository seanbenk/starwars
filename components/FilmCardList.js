import React from "react";

import styles from "../styles/FilmCardList.module.scss";
import FilmCard from "../components/FilmCard";

function FilmCardList({ films }) {
  return (
    <div className={styles.container}>
      <ul>
        {films.map((film, idx) => (
          <FilmCard film={film} key={idx} />
        ))}
      </ul>
    </div>
  );
}

export default FilmCardList;
