import React from "react";
import { Tooltip } from "@mui/material";
import CharacterTooltip from "./CharacterTooltip";

function Character({ character }) {
  return (
    <Tooltip
      followCursor
      arrow
      title={<CharacterTooltip character={character} />}
    >
      <li>{character.name}</li>
    </Tooltip>
  );
}

export default Character;
