import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import CharacterTooltip from "./CharacterTooltip";

function Character({ character }) {
  return (
    <Tooltip
      arrow
      className={styles.container}
      title={<CharacterTooltip character={character} />}
      style={{ ho }}
    >
      <h3>{character.name}</h3>
    </Tooltip>
  );
}

export default Character;
