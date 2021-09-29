import React, { useContext } from "react";
import { cloneDeep } from "lodash";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppContext from "../context/AppContext";

function Favourite({ title }) {
  const [context, setContext] = useContext(AppContext);

  const setFavourites = () => {
    setContext((prev) => {
      const newContext = cloneDeep(prev);
      const favouriteIdx = newContext.favourites.findIndex(
        (item) => item === title
      );
      if (favouriteIdx < 0) {
        newContext.favourites.push(title);
        console.log(newContext.favourites);
        return newContext;
      }
      newContext.favourites.splice(favouriteIdx, 1);
      return newContext;
    });
  };
  return (
    <div onClick={setFavourites}>
      {context.favourites.includes(title) ? (
        <FavoriteIcon color="#000" />
      ) : (
        <FavoriteBorderIcon color="#000" />
      )}
    </div>
  );
}

const setFavouritesContext = () => {};

export default Favourite;
