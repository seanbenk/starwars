import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";

import styles from "../styles/pages/Home.module.scss";
import Search from "../components/Search";
import FilmCardList from "../components/FilmCardList";

export default function Home({ films }) {
  const [context] = useContext(AppContext);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const sortByFavourites = (film1, film2) =>
    context.favourites.includes(film2.title) ? 1 : -1;

  const filterBySearch = (film) =>
    film.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
      ? true
      : false;

  const sortFilms = () => {
    if (searchText === "") return films.results.sort(sortByFavourites);
    return films.results.filter(filterBySearch).sort(sortByFavourites);
  };

  return (
    <div className={styles.container}>
      <Search onChange={handleSearchChange} placeholder="movie title" />
      <FilmCardList films={sortFilms()} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://swapi.dev/api/films");
  const films = await res.json();
  return {
    props: {
      films,
    },
  };
};
