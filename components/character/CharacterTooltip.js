import React from "react";

import styles from "../../styles/character/CharacterTooltip.module.scss";

function CharacterTooltip({ character }) {
  return (
    <div className={styles.container}>
      <ul>
        <li>Name: {character.name}</li>
        <li>Birth Year: {character.birth_year}</li>
        <li>Gender: {character.gender}</li>
        <li>Hair Color: {character.hair_color}</li>
        <li>Eye Color: {character.eye_color}</li>
      </ul>
    </div>
  );
}

export default CharacterTooltip;
