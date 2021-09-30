import React, { useContext } from "react";
import FilmCardList from "../../components/FilmCardList";

import AppContext from "../../context/AppContext";
import styles from "../../styles/pages/FavouritesPage.module.scss";

function FavouritesPage({ films }) {
  const [context] = useContext(AppContext);
  const filterFavourites = (film) => {
    return context.favourites.includes(film.title) ? true : false;
  };

  return (
    <div className={styles.container}>
      {context.favourites.length <= 0 ? (
        <h1>No favourites selected, go back to home to select some!</h1>
      ) : (
        <FilmCardList films={films.results.filter(filterFavourites)} />
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://swapi.dev/api/films/");
  const films = await res.json();
  return {
    props: {
      films,
    },
  };
};

export default FavouritesPage;
