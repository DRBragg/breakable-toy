import React from 'react';
import { Row } from 'react-bootstrap';
import UserGameCard from './UserGameCard';


const CardsGroup = (props) => {
  let cards = props.games.map(game => {
    return(
      <UserGameCard key={game.id} dropGame={props.dropGame} game={game} />
    )
  })

  return(
    <div>
      {cards}
    </div>
  )
}

export default CardsGroup
