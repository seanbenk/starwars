import React from "react";
import Link from "next/link";

import styles from "../styles/FilmCard.module.scss";
import Favourite from "./Favourite";

function FilmCard({ film }) {
  return (
    <article className={styles.container}>
      <Favourite title={film.title} />
      <Link
        href={{
          pathname: "/film/[id]",
          query: { id: film.episode_id, url: film.url },
        }}
        as={`/film/${film.episode_id}`}
      >
        {film.title}
      </Link>
    </article>
  );
}

export default FilmCard;
