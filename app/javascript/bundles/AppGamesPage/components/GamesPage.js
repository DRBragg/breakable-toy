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
          <CardsGroup videos={['A', 'B', 'C', 'D', 'E', 'F', 'G']} />
        </Row>
      </Grid>
    )
  }
}

export default GamePage;
