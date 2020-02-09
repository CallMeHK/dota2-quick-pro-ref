import React from 'react'
import usePlayersOrCache from './hooks/usePlayersOrCache'
import ChoosePlayers from './components/ChoosePlayers'
import ViewPlayers from './components/ViewPlayers'

const App = () => {
  const [isLoading, topPlayers] = usePlayersOrCache()

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && (
        <div>
          <h2>Dota Quick Pro Reference</h2>
          <ViewPlayers />
          <ChoosePlayers topPlayers={topPlayers} />
        </div>
      )}
    </div>
  )
}

export default App
