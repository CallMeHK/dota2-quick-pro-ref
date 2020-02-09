import * as React from 'react'
import * as DotaService from '../services/dota-api.service'

const useFetchRecentGames = id => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)
  const [matchData, setMatchData] = React.useState([])
  const errorMessage = 'Could not fetch player match data.'
  React.useEffect(() => {
    getMatchData(id)
  }, [])

  const getMatchData = React.useCallback(
    async playerId => {
      const response = await DotaService.getPlayersRecentGames(playerId)
      setIsLoading(false)
      if (!response.success) {
        setIsError(true)
        return
      }
      setMatchData(response.data)
    },
    [setIsError, setMatchData, setIsLoading],
  )
  return {isLoading, matchData, isError, errorMessage}
}

export default useFetchRecentGames
