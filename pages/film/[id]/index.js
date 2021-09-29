import React from "react";

function film({ film }) {
  console.log(film);
  return (
    <div>
      <h1>{film.title}</h1>
    </div>
  );
}

export default film;

export const getServerSideProps = async (context) => {
  console.log(context.query);
  const res = await fetch(context.query.url);
  const film = await res.json();
  return {
    props: {
      film,
    },
  };
};
