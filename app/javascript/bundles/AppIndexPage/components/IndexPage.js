import React from 'react';
import { Grid, Row, Col, Button, Well } from 'react-bootstrap';
import CardsGroup from './CardsGroup';


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12} className="text-center">
            //search bar
          </Col>
        </Row>
        <Row>
          <CardsGroup videos={[1,2,3,4,5,6,7,8,9]} />
        </Row>
      </Grid>
    )
  }
}

export default IndexPage;
