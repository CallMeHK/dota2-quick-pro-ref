import * as React from 'react'
import {PlayersContext} from '../context/PlayersContextProvider'

const ViewPlayers = () => {
  const {players} = React.useContext(PlayersContext)
  const [isPlayerShowing, setIsPlayerShowing] = React.useState(false)
  return (
    <div>
      <h2>Players</h2>
      <p>Players games, heroes, and WL</p>
      {isPlayerShowing &&
        players.map(player => (
          <div key={player.id}>
            {player.name} : {player.id}
          </div>
        ))}
    </div>
  )
}

export default ViewPlayers
