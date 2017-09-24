import React from 'react';
import { Col, Thumbnail, Button, Media } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const GameCard = (props) => {
  return(
    <Col md={3}>
    <Card>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="http://via.placeholder.com/50x50"
      />
      <CardMedia>
        <img src="http://via.placeholder.com/350x200" alt="" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Date Recorded: 09/25/2017 <br />
        Cards in deck: Card 1, Card 2, Card 3, Card 4
      </CardText>
      <CardActions>
        <FlatButton label="Watch This Game" />
      </CardActions>
    </Card>
    </Col>
  )
}

export default GameCard;
