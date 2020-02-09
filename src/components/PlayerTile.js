import * as React from "react";
import { css } from "emotion";
import { PlayersContext } from '../context/PlayersContextProvider'


const PlayerTile = ({ player }) => {
  const {addPlayer} = React.useContext(PlayersContext)

  return (
    <div className={playerTileStyle}>
      <p>{player.name}</p>
			<button onClick={() => addPlayer(player)}>Add</button>
    </div>
  );
};

const playerTileStyle = css({
  padding: 6,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderStyle: "solid",
  borderColor: "white",
  margin: 3,
  fontSize: 18,
  maxWidth: 400
});

export default PlayerTile;
