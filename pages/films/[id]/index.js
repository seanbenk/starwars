import React from "react";

import styles from "../../../styles/pages/FilmDetails.module.scss";

function FilmDetailsPage({ film }) {
  console.log(film);
  return (
    <div className={styles.container}>
      <h1>{film.title}</h1>
      <h2>Episode {film.episode_id}</h2>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>release date: {film.release_date}</p>
    </div>
  );
}

export default FilmDetailsPage;

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://swapi.dev/api/films/${context.params.id}`);
  const film = await res.json();
  return {
    props: {
      film,
    },
  };
};

// const getCharacters = async (film) => {
//   const characters = [];
//   for (const character of film.characters) {
//     const res = await fetch(character);
//     const data = await res.json();
//     characters.push(data);
//   }
//   return characters;
// };
