import {request} from './request.service'
import heroes from '../assets/filtered-heroes.json'

const dotaApiUrl = 'https://api.opendota.com/api'

const getAllProPlayers = async () => {
  const response = await request(dotaApiUrl + '/proPlayers')
  return response
}

const getHeroFromId = id => {
  return heroes.filter(hero => hero.id === id)[0].name
}

const getPlayersRecentGames = async id => {
  const requestUrl = dotaApiUrl + '/players/' + id + '/recentMatches'
  const response = await request(requestUrl)
  if (!response.success) {
    return response
  }
  const filteredMatches = response.data.map(match => ({
    id: match.match_id,
    hero: getHeroFromId(match.hero_id),
    hero_id: match.hero_id,
    date: match.start_time,
    kills: match.kills,
    deaths: match.deaths,
    assists: match.assists,
    radiant_win: match.radiant_win,
  }))
  return {
    success: true,
    data: filteredMatches,
  }
}

export {getAllProPlayers, getPlayersRecentGames}
