import React from 'react';
import { Row } from 'react-bootstrap';
import GameCard from './GameCard';


const CardsGroup = (props) => {
  let cards = props.videos.map(vid => {
    return(
      <GameCard key={vid} user={vid} />
    )
  })

  return(
    <div>
      {cards}
    </div>
  )
}

export default CardsGroup
