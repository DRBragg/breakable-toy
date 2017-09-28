import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import CardsGroup from './CardsGroup';


class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: this.props.games
    };
    this.dropGame = this.dropGame.bind(this);
  }

  dropGame(id) {
    let currentGames = this.state.games
    let updatedGames = currentGames.filter(game => game.id != id)
    this.setState({ games : updatedGames })
  }

  render() {
    return(
      <Grid>
        <Row>
          <CardsGroup dropGame={this.dropGame} games={this.state.games} />
        </Row>
      </Grid>
    )
  }
}

export default GamePage;
