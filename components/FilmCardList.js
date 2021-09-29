import React, { useContext } from "react";

import styles from "../styles/FilmCardList.module.scss";
import FilmCard from "../components/FilmCard";
import AppContext from "../context/AppContext";

function FilmCardList({ films }) {
  const [context] = useContext(AppContext);

  const compareFn = (film1, film2) => {
    if (context.favourites.includes(film2.title)) return 1;
    return -1;
  };

  return (
    <div className={styles.container}>
      {films.results.sort(compareFn).map((film, idx) => (
        <FilmCard film={film} key={idx} />
      ))}
    </div>
  );
}

export default FilmCardList;
