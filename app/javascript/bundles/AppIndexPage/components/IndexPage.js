import React from 'react';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
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
          <Col xs={8} xsOffset={2} className="text-center">
            <form>
              <FormGroup controlId="seachForm">
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="search" />
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Search"
                  onChange={this.handleChange}
                />
                </InputGroup>
              </FormGroup>
            </form>
          </Col>
        </Row>
        <Row>
          <CardsGroup videos={['A', 'B', 'C', 'D', 'E', 'F', 'G']} />
        </Row>
      </Grid>
    )
  }
}

export default IndexPage;
