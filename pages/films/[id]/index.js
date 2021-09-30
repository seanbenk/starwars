import React, { useState, useEffect } from "react";
import Character from "../../../components/character/Character";
import InfoList from "../../../components/InfoList";

import styles from "../../../styles/pages/FilmDetails.module.scss";

function FilmDetailsPage({ film }) {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    film.characters.forEach((url) => fetchData(url, setCharacters));
    film.planets.forEach((url) => fetchData(url, setPlanets));
    film.starships.forEach((url) => fetchData(url, setStarships));
    film.vehicles.forEach((url) => fetchData(url, setVehicles));
    film.species.forEach((url) => fetchData(url, setSpecies));
  }, []);

  const fetchData = async (url, setter) => {
    const res = await fetch(url);
    const data = await res.json();
    setter((prev) => [...prev, data]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.baseInfoContainer}>
        <h1>{film.title}</h1>
        <h1>Episode {film.episode_id}</h1>
        <p>Director: {film.director}</p>
        <p>Producer: {film.producer}</p>
        <p>release date: {film.release_date}</p>
      </div>
      {planets.length > 0 && (
        <InfoList title="Planets" items={planets} itemKey="name" />
      )}
      {starships.length > 0 && (
        <InfoList title="StarShips" items={starships} itemKey="name" />
      )}
      {vehicles.length > 0 && (
        <InfoList title="vehicles" items={vehicles} itemKey="name" />
      )}
      {species.length > 0 && (
        <InfoList title="Species" items={species} itemKey="name" />
      )}
      {characters.length > 0 && (
        <div className={styles.charactersContainer}>
          <h1>Characters</h1>
          <ul>
            {characters.map((character, idx) => (
              <Character character={character} key={idx} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FilmDetailsPage;

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://swapi.dev/api/films/${context.params.id}`);
  const film = await res.json();
  // const characters = [];
  // const planets = [];
  // const starships = [];
  // const vehicles = [];
  // const species = [];
  // for (const url of film.characters) {
  //   const res = await fetch(url);
  //   const character = await res.json();
  //   characters.push(character);
  // }
  return {
    props: {
      film,
      // characters,
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
