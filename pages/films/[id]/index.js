import React from "react";
import Character from "../../../components/character/Character";

import styles from "../../../styles/pages/FilmDetails.module.scss";

function FilmDetailsPage({ film, characters }) {
  return (
    <div className={styles.container}>
      <div>
        <h1>{film.title}</h1>
        <h2>Episode {film.episode_id}</h2>
        <p>Director: {film.director}</p>
        <p>Producer: {film.producer}</p>
        <p>release date: {film.release_date}</p>
      </div>
      <div className={styles.charactersContainer}>
        {characters.map((character, idx) => (
          <Character character={character} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default FilmDetailsPage;

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://swapi.dev/api/films/${context.params.id}`);
  const film = await res.json();
  const characters = [];
  // const planets = [];
  // const starships = [];
  // const vehicles = [];
  // const species = [];
  for (const url of film.characters) {
    const res = await fetch(url);
    const character = await res.json();
    characters.push(character);
  }
  return {
    props: {
      film,
      characters,
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
