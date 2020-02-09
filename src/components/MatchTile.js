import * as React from 'react'
import {css} from 'emotion'

const MatchTile = ({match}) => {
  const matchDate = new Date(match.date).toLocaleDateString('en-US')
  return (
    <div className={matchTileStyle}>
      <div>
        <h3 style={{margin: '1px'}}>{match.hero}</h3>
        <div>{matchDate}</div>
      </div>
      <div>
        <div>
          <span>Match ID: </span>
          <a
            href={'https://www.dotabuff.com/matches/' + match.id}
            target="_blank">
            {match.id}
          </a>
        </div>
        <div>
          KDA: {match.kills}/{match.deaths}/{match.assists}
        </div>
      </div>
    </div>
  )
}

const matchTileStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderStyle: 'solid',
  borderColor: 'white',
  padding: 3,
  marginLeft: 40,
})

export default MatchTile
