import * as React from 'react'
import PlayerTile from './PlayerTile'
import { css } from "emotion";

const ChoosePlayers = ({topPlayers}) => {
  const [filterValue, setFilterValue] = React.useState('')
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const filteredPlayers = topPlayers
    .filter(player =>
      player.name.toLowerCase().includes(filterValue.toLowerCase()),
    )
    .slice(0, 100)
  return (
    <div className={choosePlayerStyle}>
      <div className={choosePlayerHeadingStyle}>
        <h3>Choose Players</h3>
				<button onClick={() => setIsMenuOpen(val => !val)}>{isMenuOpen ? 'Close' : 'Open'}</button>
      </div>
      <p>Select players to add to your quick reference.</p>
      {isMenuOpen && (
        <>
          <p>
            This list only displays 100 players. Use the filter function to find
            the player you are looking for.
          </p>
          <label>Filter players</label>
          <input
            value={filterValue}
            onChange={e => setFilterValue(e.target.value)}
          />
          <div>
            {filteredPlayers.map(player => (
              <div key={`player-${player.id}`}>
                <PlayerTile player={player} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const choosePlayerStyle = css({
				maxWidth:600
})
const choosePlayerHeadingStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export default ChoosePlayers
