import React from 'react';
import { Row } from 'react-bootstrap';
import GameCard from './GameCard';


const CardsGroup = (props) => {
  let cards = props.games.map(game => {
    return(
      <GameCard key={game.id} game={game} video={game.video} user={game.user} />
    )
  })

  return(
    <div>
      {cards}
    </div>
  )
}

export default CardsGroup
