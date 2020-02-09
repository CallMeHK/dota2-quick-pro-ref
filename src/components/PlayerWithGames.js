import * as React from 'react'
import {css} from 'emotion'

import MatchTile from './MatchTile'
import useFetchRecentGames from '../hooks/useFetchRecentGames'
import {PlayersContext} from '../context/PlayersContextProvider'

const PlayerWithGames = ({player}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const {isLoading, matchData, isError, errorMessage} = useFetchRecentGames(
    player.id,
  )
  const {removePlayer} = React.useContext(PlayersContext)
  return (
    <div>
      <div className={playerHeaderStyle}>
        <h3>{player.name}</h3>
        <div>
          {isLoading ? (
            <p>Loading.....</p>
          ) : (
            <>
              <button onClick={() => setIsOpen(val => !val)}>
                {isOpen ? 'Hide' : 'Show'}
              </button>
              <button onClick={() => removePlayer(player.id)}>Remove</button>
            </>
          )}
        </div>
      </div>
      {!isLoading &&
        isOpen &&
        matchData.map((match, i) => (
          <MatchTile key={i + match.id} match={match} />
        ))}
    </div>
  )
}

const playerHeaderStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderStyle: 'solid',
  borderColor: 'white',
  padding: 3,
})

export default PlayerWithGames
