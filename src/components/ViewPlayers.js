import * as React from 'react'
import {css} from 'emotion'

import {PlayersContext} from '../context/PlayersContextProvider'
import PlayerWithGames from './PlayerWithGames'

const ViewPlayers = () => {
  const {players} = React.useContext(PlayersContext)
  const [isPlayerShowing, setIsPlayerShowing] = React.useState(true)
  return (
    <div className={viewPlayerStyle}>
      <div className={viewPlayersHeadingStyle}>
        <h2>Players</h2>
        <button onClick={() => setIsPlayerShowing(val => !val)}>
          {isPlayerShowing ? 'Collapse' : 'Open'}
        </button>
      </div>
      <p>Players games, heroes, and WL</p>
      <div style={!isPlayerShowing ? {display: 'none'} : {}}>
         {players.map(player => (
          <div key={player.id}>
            <PlayerWithGames player={player} />
          </div>
        ))}
      </div>
    </div>
  )
}
const viewPlayerStyle = css({
  maxWidth: 600,
})

const viewPlayersHeadingStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export default ViewPlayers
