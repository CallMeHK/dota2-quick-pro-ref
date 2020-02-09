import * as React from 'react'
import * as LocalStorage from '../services/local-storage.service'

const PlayersContext = React.createContext({})

const PlayersContextProvider = ({children}) => {
  const [players, setPlayers] = React.useState([])

  const addPlayer = React.useCallback(
    newPlayer => {
      setPlayers([...players, newPlayer])
    },
    [players, setPlayers],
  )

  const removePlayer = React.useCallback(
    id => {
      setPlayers(players.filter(player => id !== player.id))
    },
    [players, setPlayers],
  )

  React.useEffect(() => {
    const cachedPlayers = LocalStorage.get('userPlayerCache')
    if (cachedPlayers.success) {
      setPlayers(cachedPlayers.data)
    }
  }, [])

  React.useEffect(() => {
    if (players !== undefined) {
      LocalStorage.set('userPlayerCache', players)
    }
  }, [players])

  return (
    <PlayersContext.Provider
      value={{players, setPlayers, addPlayer, removePlayer}}>
      {children}
    </PlayersContext.Provider>
  )
}

export {PlayersContext}

export default PlayersContextProvider
