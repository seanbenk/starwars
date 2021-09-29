import styles from "../styles/Home.module.scss";
import FilmCardList from "../components/FilmCardList";

export default function Home({ films }) {
  return (
    <div className={styles.container}>
      <FilmCardList films={films} />
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
