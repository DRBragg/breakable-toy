import React from 'react';
import { Col, Thumbnail, Button, Media } from 'react-bootstrap';


const GameCard = (props) => {
  return(
    <Col md={3}>
      <Thumbnail href="#" src="http://via.placeholder.com/350x200" alt="Video Placeholder">
        <Media>
          <Media.Left align="middle">
            <img width={50} height={50} src="http://via.placeholder.com/50x50" alt="Image" className="img-circle"/>
          </Media.Left>
          <Media.Body>
            <h4>UserName</h4>
          </Media.Body>
        </Media>
        <p>Cards answered: Card 1, Card 2, ect...</p>
        <p>
          <Button bsSize="small" bsStyle="primary">Date: 09/18/2017</Button>&nbsp;
          <Button bsSize="small" bsStyle="default">Comments: 0</Button>
        </p>
      </Thumbnail>
    </Col>
  )
}

export default GameCard;
