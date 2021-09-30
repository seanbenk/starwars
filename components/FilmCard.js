import React from "react";
import Link from "next/link";

import styles from "../styles/FilmCard.module.scss";
import Favourite from "./Favourite";

function FilmCard({ film }) {
  return (
    <article className={styles.container}>
      <Favourite title={film.title} />
      <Link href="/films/[id]" as={`/films/${film.url[film.url.length - 2]}`}>
        <div>
          <h2>{film.title}</h2>
          <h3>Episode {film.episode_id}</h3>
        </div>
      </Link>
    </article>
  );
}

export default FilmCard;
