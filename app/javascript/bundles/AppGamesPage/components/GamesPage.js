import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import CardsGroup from './CardsGroup';


class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Grid>
        <Row>
          <CardsGroup games={this.props.games} />
        </Row>
      </Grid>
    )
  }
}

export default GamePage;
